const vscode = require('vscode');
const util = require('../util');

async function executeCheckPackageVersionStatus() {

    const packageRequestId = await vscode.window.showInputBox({
        prompt: 'Enter Package Request ID',
        placeHolder: 'Package Request ID'
    });

    if(!packageRequestId) {
        return
    }

    const command = `sfdx force:package:version:create:report` +
        ` -i "${packageRequestId}"`;

    util.executeCheckPackageVersionStatus(command);
}

module.exports = {
    executeCheckPackageVersionStatus
};
