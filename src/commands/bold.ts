import * as vscode from "vscode";
import { bold } from "../constants";
import { wrapSelection } from "../helpers";

export default () => {
  const { activeTextEditor } = vscode.window;
  const edition = wrapSelection(activeTextEditor?.selection, bold);

  if (!edition) return;

  return vscode.workspace.applyEdit(edition);
};
