const vscode = require('vscode');
const { spawn } = require('child_process');

// Import the command modules
// const { executeCreatePackageWithoutNamespace } = require('./modules/createPackageWithoutNamespace');
// const { executeCreatePackageWithNamespace } = require('./modules/createPackageWithNamespace');
// const { executeCreatePackageVersion } = require('./modules/createPackageVersion');
// const { executeReleasePackageVersion } = require('./modules/releasePackageVersion');
// const { executeDeletePackageVersion } = require('./modules/executeDeletePackageVersion');


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
} = require('./commands.js');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	context.subscriptions.push(
		// vscode.commands.registerCommand('extension.createPackageWithoutNamespace', createPackageWithoutNamespace),
        // vscode.commands.registerCommand('extension.createPackageWithNamespace', createPackageWithNamespace),
        // vscode.commands.registerCommand('extension.createPackageVersion', createPackageVersion),
        // vscode.commands.registerCommand('extension.releasePackageVersion', releasePackageVersion),
        // vscode.commands.registerCommand('extension.deletePackageVersion', deletePackageVersion),
        // vscode.commands.registerCommand('extension.deletePackage', deletePackage),
        // vscode.commands.registerCommand('extension.getAllPackages', getAllPackages),
        // vscode.commands.registerCommand('extension.getAllPackageVersions', getAllPackageVersions),
        // vscode.commands.registerCommand('extension.checkPackageVersionStatus', checkPackageVersionStatus),
        // vscode.commands.registerCommand('extension.getDeploymentStatus', getDeploymentStatus),
        // vscode.commands.registerCommand('extension.retrieveChangeSet', retrieveChangeSet),
        // vscode.commands.registerCommand('extension.pushToChangeSet', pushToChangeSet),
        // vscode.commands.registerCommand('extension.retrieveMetadata', retrieveMetadata),
        // vscode.commands.registerCommand('extension.convertSourceToMDAPI', convertSourceToMDAPI),
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
