const util = require('../util');

async function executeConvertSourceToMDAPI() {

    util.executeInTerminal(
        `sf source convert`
    );
}

module.exports = {
    executeConvertSourceToMDAPI
}