import * as vscode from "vscode";
import bold from "./commands/bold";
import code from "./commands/code";
import headingLevel1 from "./commands/headingLevel1";
import headingLevel2 from "./commands/headingLevel2";
import headingLevel3 from "./commands/headingLevel3";
import headingLevel4 from "./commands/headingLevel4";
import headingLevel5 from "./commands/headingLevel5";
import headingLevel6 from "./commands/headingLevel6";
import italic from "./commands/italic";
import italicWithBold from "./commands/italicWithBold";
import strikeThrough from "./commands/strikeThrough";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(vscode.commands.registerCommand("markdown-commands.bold", bold));
  context.subscriptions.push(vscode.commands.registerCommand("markdown-commands.code", code));
  context.subscriptions.push(vscode.commands.registerCommand("markdown-commands.headingLevel1", headingLevel1));
  context.subscriptions.push(vscode.commands.registerCommand("markdown-commands.headingLevel2", headingLevel2));
  context.subscriptions.push(vscode.commands.registerCommand("markdown-commands.headingLevel3", headingLevel3));
  context.subscriptions.push(vscode.commands.registerCommand("markdown-commands.headingLevel4", headingLevel4));
  context.subscriptions.push(vscode.commands.registerCommand("markdown-commands.headingLevel5", headingLevel5));
  context.subscriptions.push(vscode.commands.registerCommand("markdown-commands.headingLevel6", headingLevel6));
  context.subscriptions.push(vscode.commands.registerCommand("markdown-commands.italic", italic));
  context.subscriptions.push(vscode.commands.registerCommand("markdown-commands.italicWithBold", italicWithBold));
  context.subscriptions.push(vscode.commands.registerCommand("markdown-commands.strikeThrough", strikeThrough));
}
