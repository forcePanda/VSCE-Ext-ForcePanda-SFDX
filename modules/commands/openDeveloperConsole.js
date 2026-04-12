const util = require('../util');
const { PAGE_URLS } = require('../urls/urlDictionary') 

function executeOpenDeveloperConsole() {
    util.executeInTerminal(
        'sf org open --path ' + PAGE_URLS.DEV_CONSOLE.url
    );
}

module.exports = {
    executeOpenDeveloperConsole
};

