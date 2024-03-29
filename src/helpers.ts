import * as vscode from "vscode";

export function wrapSelection(selection: vscode.Selection | undefined, markdownType: string) {
  const { activeTextEditor } = vscode.window;

  if (!activeTextEditor) return;
  if (!selection || selection.isEmpty) return;

  const edit = new vscode.WorkspaceEdit();

  edit.insert(activeTextEditor.document.uri, selection.start, markdownType);
  edit.insert(activeTextEditor.document.uri, selection.end, markdownType);

  return edit;
}

export function insertBeforeSelection(selection: vscode.Selection | undefined, markdownType: string) {
  const { activeTextEditor } = vscode.window;

  if (!activeTextEditor) return;
  if (!selection || selection.isEmpty) return;

  const edit = new vscode.WorkspaceEdit();

  edit.insert(activeTextEditor.document.uri, selection.start, markdownType);

  return edit;
}
