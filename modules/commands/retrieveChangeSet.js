const vscode = require('vscode');
const util = require('../util');

async function executeRetrieveChangeSet() {
    const packageName = await vscode.window.showInputBox({
        prompt: 'Enter Change Set name',
        placeHolder: 'Change Set name'
    });

    if(!packageName) {
        return;
    }

    util.executeInTerminal(
        `sfdx force:source:retrieve` +
        ` -n"${packageName}"`
    );
}

module.exports = {
    executeRetrieveChangeSet
}