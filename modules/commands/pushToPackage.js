const vscode = require('vscode');
const util = require('../util');

async function executePushToPackage() {
    const mdtDir = await vscode.window.showInputBox({
        prompt: 'Enter Metadata directory',
        placeHolder: 'ex. force-app/main/default'
    });

    util.executeInTerminal(
        `sfdx force:mdapi:deploy` +
        ` -d "${mdtDir}"`
    );
}

module.exports = {
    executePushToPackage
};