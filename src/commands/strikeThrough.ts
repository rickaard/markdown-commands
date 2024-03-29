import * as vscode from "vscode";
import { strikeThrough } from "../constants";
import { wrapSelection } from "../helpers";

export default () => {
  const { activeTextEditor } = vscode.window;
  const edition = wrapSelection(activeTextEditor?.selection, strikeThrough);

  if (!edition) return;

  return vscode.workspace.applyEdit(edition);
};
