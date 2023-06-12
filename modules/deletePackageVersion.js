const vscode = require('vscode');

function executeDeletePackageVersion() {
    // Retrieve the package version ID from the user
    vscode.window.showInputBox({ prompt: 'Enter the package version ID to delete' }).then(packageVersionId => {
        if (!packageVersionId) {
            return;
        }
        
        vscode.window.showWarningMessage(`Are you sure you want to delete package version ${packageVersionId}?`, 'Yes', 'No').then(selection => {
            if (selection === 'Yes') {
                // Execute the SFDX command to delete the package version
                const terminal = vscode.window.createTerminal('SFDX Terminal');
                terminal.sendText(`sfdx force:package:version:delete --packageversionid ${packageVersionId} --noprompt`);
                terminal.show();
            }
        });
    });
}

module.exports = deletePackageVersion;
