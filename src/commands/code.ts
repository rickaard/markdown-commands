import * as vscode from "vscode";
import { code } from "../constants";
import { wrapSelection } from "../helpers";

export default () => {
  const { activeTextEditor } = vscode.window;
  const edition = wrapSelection(activeTextEditor?.selection, code);

  if (!edition) return;

  return vscode.workspace.applyEdit(edition);
};
