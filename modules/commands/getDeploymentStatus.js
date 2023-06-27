const util = require('../util');

async function executeGetDeploymentStatus() {

    const command = `sfdx force:mdapi:deploy:report`;

    util.executeInTerminal(command);
}

module.exports = {
    executeGetDeploymentStatus
}
