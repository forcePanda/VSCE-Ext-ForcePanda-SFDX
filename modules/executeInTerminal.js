const vscode = require('vscode');

function executeCommand(command) {
    const terminal = vscode.window.createTerminal('SFDX Terminal');
    terminal.sendText(command);
    terminal.show();
}