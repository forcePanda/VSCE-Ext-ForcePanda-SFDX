const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
const { TERMINAL_NAME } = require('../util');

async function executePushToChangeSet() {
    const changeSetName = await requestChangeSetName();

    if(!changeSetName) {
        return;
    }

    const changeSetFolder = createChangeSetFolder(changeSetName);
    const defaultFolderPath = createFolders(changeSetFolder);
    await runForceSourceConvert(defaultFolderPath);
    updatePackageXml(changeSetFolder, changeSetName);
    await runForceMdapiDeploy(defaultFolderPath);
}

async function requestChangeSetName() {
    return await vscode.window.showInputBox({
        prompt: 'Enter Change Set Name',
        placeHolder: 'Change Set Name'
    });
}

function createChangeSetFolder(changeSetName) {
    const rootPath = vscode.workspace.rootPath;
    const changeSetFolder = path.join(rootPath, changeSetName);
    fs.mkdirSync(changeSetFolder);
    return changeSetFolder;
}

function createFolders(changeSetFolder) {
    const mainFolder = path.join(changeSetFolder, 'main');
    const defaultFolder = path.join(mainFolder, 'default');
    fs.mkdirSync(mainFolder);
    fs.mkdirSync(defaultFolder);
    return defaultFolder.replace(/\\/g, '/');
}

async function runForceSourceConvert(defaultFolderPath) {
    const convertCommand = `sfdx force:source:convert` +
        // ` -r "${vscode.workspace.rootPath}"` +
        ` -d "${defaultFolderPath}"`;
    await executeCommand(convertCommand);
}

function updatePackageXml(changeSetFolder, changeSetName) {
    const defaultFolder = path.join(changeSetFolder, 'main', 'default');
    const packageXmlPath = path.join(defaultFolder, 'package.xml');

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
        ` -d "${defaultFolderPath}"`; //+
        //` -u YourOrgAlias`;
    await executeCommand(deployCommand);
}

async function executeCommand(command) {
    const terminal = vscode.window.createTerminal(TERMINAL_NAME);
    terminal.show();
    terminal.sendText(command);
    await new Promise(resolve => setTimeout(resolve, 2000));
}

module.exports = {
    executePushToChangeSet
}
