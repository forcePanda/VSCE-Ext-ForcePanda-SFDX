const util = require('../util');

async function executeGetDeploymentStatus() {

    const command = `sf project deploy report`;

    util.executeInTerminal(command);
}

module.exports = {
    executeGetDeploymentStatus
}
