const util = require('../util');
const { urlMap } = require('../urls/lex/urls_lex');

function executeOpenDeveloperConsole() {
    util.executeInTerminal(
        'sfdx force:org:open -p ' + urlMap.DEV_CONSOLE
    );
}

module.exports = {
    executeOpenDeveloperConsole
};

