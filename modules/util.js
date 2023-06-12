const vscode = require('vscode');
const TERMINAL = 'FP-SFDX Terminal';

function executeInTerminal(command) {
    const terminal = getTerminal();
    terminal.sendText(command);
    terminal.show();
}

function getTerminal() {
    return vscode.window.activeTerminal
        ? vscode.window.activeTerminal
        : vscode.window.createTerminal(TERMINAL)
}

module.exports = {
    executeInTerminal,
    TERMINAL
};