// Import the necessary packages and modules
const vscode = require('vscode');
const { CONSTANTS } = require('../constants');
const util = require('../util');

// Define the function to execute the command
async function executeCreatePackageWithNamespace() {
    const packageName = await vscode.window.showInputBox({
        prompt: 'Enter package name',
        placeHolder: 'Package Name'
    });

    const packageDescription = await vscode.window.showInputBox({
        prompt: 'Enter package description',
        placeHolder: 'Package Description'
    });

    const packageType = await vscode.window.showQuickPick( CONSTANTS.PACKAGE_TYPES, {
        placeHolder: 'Select package type'
    });

    const packageNameSpace = await vscode.window.showInputBox({
        prompt: 'Enter package namespace',
        placeHolder: 'Package Namespace'
    });

    const path = await vscode.window.showInputBox({
        prompt: 'Enter folder path',
        placeHolder: 'Path',
        value: CONSTANTS.DEFAULT_FOLDER_PATH
    });

    const command = `sfdx force:package:create` +
        ` --name "${packageName}"` +
        ` --description "${packageDescription}"` +
        ` --packagetype "${packageType}"` +
        ` --path "${path}"` +
        ` --namespace "${packageNameSpace}"`;
    
    if(!packageName || !packageType || !path || !packageNameSpace)  {
        return;
    }

    util.executeInTerminal(command);
}

// Export the function to be used in the main extension file
module.exports = {
    executeCreatePackageWithNamespace
};
