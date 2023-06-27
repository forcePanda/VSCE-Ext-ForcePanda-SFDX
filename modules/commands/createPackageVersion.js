const vscode = require('vscode');
const util = require('../util');

async function executeCreatePackageVersion() {

    const packageId = await vscode.window.showInputBox({
        prompt: 'Enter Package ID',
        placeHolder: 'Package ID'
    });

    if(!packageId) {
        return
    }

    const command = `sfdx force:package:version:create` +
        ` --package "${packageId}"` +
        ` --wait 20` +
        ` --installationkeybypass` +
        ` --codecoverage`;

    util.executeInTerminal(command);
}

module.exports = {
    executeCreatePackageVersion
};
