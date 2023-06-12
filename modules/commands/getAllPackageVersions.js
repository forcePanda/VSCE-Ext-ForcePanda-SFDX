const vscode = require('vscode');
const util = require('../util');

async function executeGetAllPackageVersions() {

    const packageId = await vscode.window.showInputBox({
        prompt: 'Enter Package ID',
        placeHolder: 'Package ID'
    });

    if(!packageId) {
        return;
    }

    const command = `sfdx force:package:version:list` +
        ` --packages "${packageId}"`;

    util.executeInTerminal(command);
}

module.exports = {
    executeGetAllPackageVersions
};
