const util = require('../util');

async function executeConvertSourceToMDAPI() {

    util.executeInTerminal(
        `sfdx force:source:convert`
    );
}

module.exports = {
    executeConvertSourceToMDAPI
}