const vscode = require('vscode');
const { spawn } = require('child_process');

// Import the command modules
const { executeCreatePackageWithoutNamespace } = require('./commands/createPackageWithoutNamespace');
const { executeCreatePackageWithNamespace } = require('./commands/createPackageWithNamespace');
const { executeCreatePackageVersion } = require('./commands/createPackageVersion');
const { executeReleasePackageVersion } = require('./commands/releasePackageVersion');
const { executeDeletePackageVersion } = require('./commands/executeDeletePackageVersion');


const { 
	createPackageWithoutNamespace, 
	createPackageWithNamespace, 
	createPackageVersion, 
	releasePackageVersion, 
	deletePackageVersion, 
	deletePackage, 
	getAllPackages, 
	getAllPackageVersions, 
	checkPackageVersionStatus, 
	getDeploymentStatus, 
	retrieveChangeSet, 
	pushToChangeSet, 
	retrieveMetadata, 
	convertSourceToMDAPI, 
	openDeveloperConsole 
} = require('./commands');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	context.subscriptions.push(
		vscode.commands.registerCommand('extension.createPackageWithoutNamespace', createPackageWithoutNamespace),
        vscode.commands.registerCommand('extension.createPackageWithNamespace', createPackageWithNamespace),
        vscode.commands.registerCommand('extension.createPackageVersion', createPackageVersion),
        vscode.commands.registerCommand('extension.releasePackageVersion', releasePackageVersion),
        vscode.commands.registerCommand('extension.deletePackageVersion', deletePackageVersion),
        vscode.commands.registerCommand('extension.deletePackage', deletePackage),
        vscode.commands.registerCommand('extension.getAllPackages', getAllPackages),
        vscode.commands.registerCommand('extension.getAllPackageVersions', getAllPackageVersions),
        vscode.commands.registerCommand('extension.checkPackageVersionStatus', checkPackageVersionStatus),
        vscode.commands.registerCommand('extension.getDeploymentStatus', getDeploymentStatus),
        vscode.commands.registerCommand('extension.retrieveChangeSet', retrieveChangeSet),
        vscode.commands.registerCommand('extension.pushToChangeSet', pushToChangeSet),
        vscode.commands.registerCommand('extension.retrieveMetadata', retrieveMetadata),
        vscode.commands.registerCommand('extension.convertSourceToMDAPI', convertSourceToMDAPI),
        vscode.commands.registerCommand('extension.openDeveloperConsole', openDeveloperConsole)
    );
}

exports.activate = activate;

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
    activate,
    deactivate
};
