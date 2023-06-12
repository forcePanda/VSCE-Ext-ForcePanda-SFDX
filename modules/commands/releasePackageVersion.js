const vscode = require('vscode');
const util = require('../util');

async function executeReleasePackageVersion() {
    const packageVersionId = await vscode.window.showInputBox({
        prompt: 'Enter Package Version ID',
        placeHolder: 'Package Version ID'
    });

    if(!packageVersionId) {
        return;
    }

    const command = `sfdx force:package:version:promote` +
        ` --package "${packageVersionId}"`;

    util.executeInTerminal(command);
}

module.exports = {
    executeReleasePackageVersion
};
