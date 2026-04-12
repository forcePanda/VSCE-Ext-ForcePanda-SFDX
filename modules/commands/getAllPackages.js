const util = require('../util');

async function executeGetAllPackages() {

    const command = `sf package list`;
    util.executeInTerminal(command);
}

module.exports = {
    executeGetAllPackages
}
