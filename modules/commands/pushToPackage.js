const vscode = require('vscode');
const util = require('../util');

async function executePushToPackage() {
    const mdtDir = await vscode.window.showInputBox({
        prompt: 'Enter Metadata directory',
        placeHolder: 'ex. force-app/main/default'
    });

    if(!mdtDir) {
        return;
    } 

    util.executeInTerminal(
        `sfdx force:mdapi:deploy` +
        ` --wait 20`
    );
}

module.exports = {
    executePushToPackage
};