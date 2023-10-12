const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
const { executeInTerminal } = require('../util');
const { CONSTANTS } = require('../constants');

const YES = 'Continue';
const NO = 'Cancel';
const DEPLOYMENT_WAIT_TIME = 20;

const METADATA_SOURCES = [
    'Use Manifest file',
    'Specify metadata directory'
];

async function executePushToChangeSet() {
    const changeSetName = await requestChangeSetName();

    const mdtSource = await getMdtSource();

    if (!changeSetName || !mdtSource.path) {
        return;
    }

    const defaultFolderPath = await createChangeSetFolder(changeSetName);

    await runForceSourceConvert(defaultFolderPath, mdtSource);

    updatePackageXml(defaultFolderPath, changeSetName);

    await runForceMdapiDeploy(defaultFolderPath);

    removeAllFiles(
        getChangeSetFolderPath(changeSetName)
    );

    handleSuccess();
}

async function getMdtSource() {
    const mdtSource = await vscode.window.showQuickPick( METADATA_SOURCES, {
        placeHolder: 'Select Metadata Source'
    });

    const isManifest = mdtSource === METADATA_SOURCES[0];

    const path = await vscode.window.showInputBox({
        prompt: 'Specify ' + (isManifest ?  'Manifest file' : 'Metadata source') + ' directory',
        value: isManifest ? CONSTANTS.DEFAULT_MANIFEST : CONSTANTS.DEFAULT_FOLDER_PATH
    });

    return {
        isManifest: isManifest,
        path: path
    }
}

async function requestChangeSetName() {
    return await vscode.window.showInputBox({
        prompt: 'Enter Change Set Name',
        placeHolder: 'Change Set Name'
    });
}

async function createChangeSetFolder(changeSetName) {
    const changeSetFolder = getChangeSetFolderPath(changeSetName);
    const mainFolder = path.join(changeSetFolder, 'main');
    const defaultFolder = path.join(mainFolder, 'default');

    if (fs.existsSync(changeSetFolder)) {
        // If the change set folder already exists, remove all contents from the default folder
        removeAllFiles(changeSetFolder);
    }

    fs.mkdirSync(changeSetFolder);
    fs.mkdirSync(mainFolder);
    fs.mkdirSync(defaultFolder);

    return defaultFolder.replace(/\\/g, '/');
}

function removeAllFiles(path) {
    fs.rmSync(path, { recursive: true });
}

function getChangeSetFolderPath(changeSetName) {
    return path.join(
        vscode.workspace.workspaceFolders[0].uri.fsPath, 
        changeSetName
    );
}

async function runForceSourceConvert(defaultFolderPath, mdtSource) {
    const convertCommand = `sfdx force:source:convert` +
        (mdtSource.isManifest 
            ? ' --manifest ' + mdtSource.path
            : ' --sourcepath ' + mdtSource.path)
        + ` -d "${defaultFolderPath}"`;
    await executeCommand(convertCommand);
}

function updatePackageXml(defaultFolderPath, changeSetName) {
    const packageXmlPath = path.join(defaultFolderPath, 'package.xml');

    if (!fs.existsSync(packageXmlPath)) {
        throw new Error('package.xml file not found.');
    }

    const packageXmlContent = fs.readFileSync(packageXmlPath, 'utf8');
    const updatedPackageXmlContent = packageXmlContent.replace(
        '</Package>',
        `    <fullName>${changeSetName}</fullName>\n</Package>`
    );
    fs.writeFileSync(packageXmlPath, updatedPackageXmlContent, 'utf8');
}

async function runForceMdapiDeploy(defaultFolderPath) {
    const deployCommand = `sfdx force:mdapi:deploy` +
        ` --deploydir "${defaultFolderPath}"` +
        ` --wait ${DEPLOYMENT_WAIT_TIME}`;
    await executeCommand(deployCommand);
}

async function executeCommand(command) {
    executeInTerminal(command);

    await delay(2000);

    const result = await showCommandRunStatusModal();

    if (result === YES) {
        return Promise.resolve();
    } else {
        return Promise.reject(
            new Error('Exiting process as command did not run successfully.')
        );
    }
}

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function showCommandRunStatusModal() {
    return vscode.window.showInformationMessage(
        'To continue, press ' + YES + ' after the command is executed successfully. If not, press ' + NO + '.',
        YES,
        NO
    );
}

function handleSuccess() {
    vscode.window.showInformationMessage('Change Set updated succesfully.');
}

module.exports = {
    executePushToChangeSet
};