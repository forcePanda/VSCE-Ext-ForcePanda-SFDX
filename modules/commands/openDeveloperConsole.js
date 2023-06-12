const { exec } = require('child_process');
const vscode = require('vscode');

function executeOpenDeveloperConsole() {
    
    vscode.window.showInformationMessage('Command executed');
    // const command = 'sfdx force:org:open -p "/_ui/common/apex/debug/ApexCSIPage"';
    
    // exec(command, (error, stdout, stderr) => {
    //     if (error) {
    //         console.error(`Error executing command: ${error}`);
    //         return;
    //     }
        
    //     console.log(stdout);
    //     console.error(stderr);
    // });
}

module.exports = {
    executeOpenDeveloperConsole
};

