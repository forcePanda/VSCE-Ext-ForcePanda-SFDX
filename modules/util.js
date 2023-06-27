const vscode = require('vscode');
const TERMINAL_NAME = 'FP-SFDX Terminal';

const terminal = getTerminal();

function executeInTerminal(command) {
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
    const fpSfdxTerminal = vscode.window.terminals.find( terminal => terminal.name === TERMINAL_NAME);
    return fpSfdxTerminal
        ? fpSfdxTerminal
        : vscode.window.createTerminal(TERMINAL_NAME)
}

vscode.window.onDidChangeTerminalState = (state) => handleTerminalStateChange(state);

function handleTerminalStateChange(state) {
    vscode.window.showInformationMessage('State changed: ' + JSON.stringify(state));
}

module.exports = {
    executeInTerminal,
    TERMINAL_NAME,
    registerCommandWithErrorHandler
};