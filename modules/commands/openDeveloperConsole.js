const util = require('../util');

const DEV_CONSOLE_PATH = '"/_ui/common/apex/debug/ApexCSIPage"';

function executeOpenDeveloperConsole() {
    util.executeInTerminal(
        'sfdx force:org:open -p ' + DEV_CONSOLE_PATH
    );
}

module.exports = {
    executeOpenDeveloperConsole
};

