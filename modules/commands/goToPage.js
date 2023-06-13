const vscode = require('vscode');
const { executeInTerminal } = require('../util');
const { PAGE_URLS } = require('../urls/urlDictionary') 

async function executeGoToPage() {

    const pagesUrlMap = getPagesUrlMap();

    const pageName = await showPagesList(Array.from(pagesUrlMap.keys()));

    const pageUrl = pagesUrlMap.get(pageName);

    if(!pageUrl) {
        return;
    }

    const command = 'sfdx force:org:open -p ' + pageUrl;

    executeInTerminal(command);
}

function showPagesList(pageList) {
    return vscode.window.showQuickPick(
        pageList,
        { placeHolder: 'Select Page' }
    );
}

function getPagesUrlMap() {

    const urlMap = new Map();

    for (const key in PAGE_URLS) {
        const { label, url } = PAGE_URLS[key];
        urlMap.set(label, url);
    }
    return urlMap;
}

module.exports = {
    executeGoToPage
};
