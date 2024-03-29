import * as vscode from "vscode";
import { italicWithBold } from "../constants";
import { wrapSelection } from "../helpers";

export default () => {
  const { activeTextEditor } = vscode.window;
  const edition = wrapSelection(activeTextEditor?.selection, italicWithBold);

  if (!edition) return;

  return vscode.workspace.applyEdit(edition);
};
