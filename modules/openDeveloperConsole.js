const { exec } = require('child_process');

function executeOpenDeveloperConsole() {
    const command = 'sfdx force:org:open -p "/_ui/common/apex/debug/ApexCSIPage"';
    
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error}`);
            return;
        }
        
        console.log(stdout);
        console.error(stderr);
    });
}

