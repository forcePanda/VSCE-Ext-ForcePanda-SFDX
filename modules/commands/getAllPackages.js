const util = require('../util');

async function executeGetAllPackages() {

    const command = `sfdx force:package:list`;
    util.executeInTerminal(command);
}

module.exports = {
    executeGetAllPackages
}
