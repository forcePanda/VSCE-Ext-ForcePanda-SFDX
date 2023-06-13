const vscode = require('vscode');
const TERMINAL = 'FP-SFDX Terminal';

function executeInTerminal(command) {
    const terminal = getTerminal();
    terminal.sendText(command);
    terminal.show();
}

function registerCommandWithErrorHandler(commandId, handlerMethod) {
    return vscode.commands.registerCommand(commandId, () => {
        try {
            handlerMethod();
        } catch (error) {
            handleError(error);
        }
    });
}

function handleError(err) {
    vscode.window.showErrorMessage('Something went wrong! ' + err);
}

function getTerminal() {
    return vscode.window.activeTerminal
        ? vscode.window.activeTerminal
        : vscode.window.createTerminal(TERMINAL)
}

module.exports = {
    executeInTerminal,
    TERMINAL,
    registerCommandWithErrorHandler
};