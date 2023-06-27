const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
const { executeInTerminal } = require('../util');

const YES = 'Continue';
const NO = 'Cancel';
const DEPLOYMENT_WAIT_TIME = 20;

async function executePushToChangeSet() {
    const changeSetName = await requestChangeSetName();

    if (!changeSetName) {
        return;
    }

    const defaultFolderPath = await createChangeSetFolder(changeSetName);

    await runForceSourceConvert(defaultFolderPath);

    updatePackageXml(defaultFolderPath, changeSetName);

    await runForceMdapiDeploy(defaultFolderPath);

    handleSuccess();
}

async function requestChangeSetName() {
    return await vscode.window.showInputBox({
        prompt: 'Enter Change Set Name',
        placeHolder: 'Change Set Name'
    });
}

async function createChangeSetFolder(changeSetName) {
    const rootPath = vscode.workspace.workspaceFolders[0].uri.fsPath;
    const changeSetFolder = path.join(rootPath, changeSetName);
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

async function runForceSourceConvert(defaultFolderPath) {
    const convertCommand = `sfdx force:source:convert` +
        // ` -r "${vscode.workspace.rootPath}"` +
        ` -d "${defaultFolderPath}"`;
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