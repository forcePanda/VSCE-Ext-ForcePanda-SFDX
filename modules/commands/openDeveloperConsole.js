const util = require('../util');
const { PAGE_URLS } = require('../urls/urlDictionary') 

function executeOpenDeveloperConsole() {
    util.executeInTerminal(
        'sfdx force:org:open -p ' + PAGE_URLS.DEV_CONSOLE.url
    );
}

module.exports = {
    executeOpenDeveloperConsole
};

