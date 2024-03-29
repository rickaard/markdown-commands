import * as vscode from "vscode";
import { italic } from "../constants";
import { wrapSelection } from "../helpers";

export default () => {
  const { activeTextEditor } = vscode.window;
  const edition = wrapSelection(activeTextEditor?.selection, italic);

  if (!edition) return;

  return vscode.workspace.applyEdit(edition);
};
