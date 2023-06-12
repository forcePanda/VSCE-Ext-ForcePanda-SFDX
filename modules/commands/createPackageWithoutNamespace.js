// Import the necessary packages and modules
const vscode = require('vscode');
const { CONSTANTS } = require('../constants');
const util = require('../util');

async function executeCreatePackageWithoutNamespace() {
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

    const path = await vscode.window.showInputBox({
        prompt: 'Enter folder path',
        placeHolder: 'Path',
        value: CONSTANTS.DEFAULT_FOLDER_PATH
    });

    if(!packageName || !packageType || !path)  {
        return;
    }

    util.executeInTerminal(
        `sfdx force:package:create` +
        ` --name "${packageName}"` +
        ` --description "${packageDescription}"` +
        ` --packagetype "${packageType}"` +
        ` --nonamespace` +
        ` --path "${path}"`
    );
}

module.exports = {
    executeCreatePackageWithoutNamespace
};
