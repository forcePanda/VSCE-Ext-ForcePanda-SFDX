const vscode = require('vscode');
const util = require('../util');

async function executeDeletePackage() {

    const packageId  = await vscode.window.showInputBox({
        prompt: 'Enter Package  ID',
        placeHolder: 'Package ID'
    });

    if(!packageId) {
        return;
    }

    const command = `sfdx force:package:delete` +
        ` --package "${packageId}"`;

    util.executeInTerminal(command);
}

module.exports = {
    executeDeletePackage
}
