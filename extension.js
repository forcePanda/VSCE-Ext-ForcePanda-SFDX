//const vscode = require('vscode');
const { registerCommandWithErrorHandler } = require('./modules/util');

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
} = require('./modules/commands.js');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	context.subscriptions.push(
		registerCommandWithErrorHandler('extension.createPackageWithoutNamespace', createPackageWithoutNamespace),
        registerCommandWithErrorHandler('extension.createPackageWithNamespace', createPackageWithNamespace),
        registerCommandWithErrorHandler('extension.createPackageVersion', createPackageVersion),
        registerCommandWithErrorHandler('extension.releasePackageVersion', releasePackageVersion),
        registerCommandWithErrorHandler('extension.deletePackageVersion', deletePackageVersion),
        registerCommandWithErrorHandler('extension.deletePackage', deletePackage),
        registerCommandWithErrorHandler('extension.getAllPackages', getAllPackages),
        registerCommandWithErrorHandler('extension.getAllPackageVersions', getAllPackageVersions),
        registerCommandWithErrorHandler('extension.checkPackageVersionStatus', checkPackageVersionStatus),
        registerCommandWithErrorHandler('extension.getDeploymentStatus', getDeploymentStatus),
        registerCommandWithErrorHandler('extension.retrieveChangeSet', retrieveChangeSet),
        registerCommandWithErrorHandler('extension.pushToChangeSet', pushToChangeSet),
        registerCommandWithErrorHandler('extension.retrieveMetadata', retrieveMetadata),
        registerCommandWithErrorHandler('extension.convertSourceToMDAPI', convertSourceToMDAPI),
        registerCommandWithErrorHandler('extension.openDeveloperConsole', openDeveloperConsole)
    );
}

exports.activate = activate;

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
    activate,
    deactivate
};
