
const { executeCreatePackageWithoutNamespace } = require('./commands/createPackageWithoutNamespace.js');
const { executeCreatePackageWithNamespace } = require('./commands/createPackageWithNamespace.js');
const { executeCreatePackageVersion } = require('./commands/createPackageVersion.js');
const { executeReleasePackageVersion } = require('./commands/releasePackageVersion.js');
const { executeDeletePackage } = require('./commands/deletePackage.js');
const { executeGetAllPackages } = require('./commands/getAllPackages.js');
const { executeGetAllPackageVersions } = require('./commands/getAllPackageVersions.js');
const { executeCheckPackageVersionStatus } = require('./commands/checkPackageVersionStatus.js');
const { executePushToChangeSet } = require('./commands/pushToChangeSet.js');
const { executeDeletePackageVersion } = require('./commands/deletePackageVersion.js');
const { executeOpenDeveloperConsole } = require('./commands/openDeveloperConsole.js');
const { executeGoToPage } = require('./commands/goToPage.js');
const { executeGetDeploymentStatus } = require('./commands/getDeploymentStatus.js')

// Create Package without Namespace
function createPackageWithoutNamespace() {
    executeCreatePackageWithoutNamespace();
}

// Create Package with Namespace
function createPackageWithNamespace() {
    executeCreatePackageWithNamespace();
}

// Create Package Version
function createPackageVersion() {
    executeCreatePackageVersion();
}

// Release Package Version
function releasePackageVersion() {
    executeReleasePackageVersion();
}

// Delete Package Version
function deletePackageVersion() {
    executeDeletePackageVersion();
}

// Delete Package
function deletePackage() {
    executeDeletePackage();
}

// Get all Packages
function getAllPackages() {
    executeGetAllPackages();
}

// Get all Package Versions
function getAllPackageVersions() {
    executeGetAllPackageVersions();
}

// Check Package Version Status
function checkPackageVersionStatus() {
    executeCheckPackageVersionStatus();
}

// Get Deployment Status
function getDeploymentStatus() {
    executeGetDeploymentStatus();
}

// Retrieve Change Set
function retrieveChangeSet() {}

// Push to Change Set
function pushToPackage() {}

// Retrieve Metadata
function retrieveMetadata() {}

// Convert Source to MDAPI
function convertSourceToMDAPI() {}

// Open Developer Console
function openDeveloperConsole() {
    executeOpenDeveloperConsole();
}

function pushToChangeSet() {
    executePushToChangeSet();
}

function goToPage() {
    executeGoToPage();
}


module.exports = {
    createPackageWithoutNamespace,
    createPackageWithNamespace,
    createPackageVersion,
    releasePackageVersion,
    deletePackageVersion,
    deletePackage,
    getAllPackages,
    getAllPackageVersions,
    checkPackageVersionStatus,
    getDeploymentStatus,
    retrieveChangeSet,
    pushToChangeSet,
    retrieveMetadata,
    convertSourceToMDAPI,
    openDeveloperConsole,
    goToPage
};
