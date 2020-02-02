// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

const userConfig = vscode.workspace.getConfiguration();

const getSettings = () => {
  let extensionConfig = vscode.workspace.getConfiguration('touchBar');

  return {
    night: extensionConfig.nightTheme,
    day: extensionConfig.dayTheme
  };
};

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.workspace.onDidChangeConfiguration(getSettings, this);
  let themeKey = 'workbench.colorTheme';
  let settings = getSettings();

  vscode.commands.registerCommand('extensionTouchBar.night', () => {
    userConfig.update(themeKey, settings.night, true);
  });
  vscode.commands.registerCommand('extensionTouchBar.day', () => {
    userConfig.update(themeKey, settings.day, true);
  });

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
