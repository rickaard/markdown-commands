import * as vscode from "vscode";
import { headingLevel6 } from "../constants";
import { insertBeforeSelection } from "../helpers";

export default () => {
  const { activeTextEditor } = vscode.window;
  const edition = insertBeforeSelection(activeTextEditor?.selection, headingLevel6);

  if (!edition) return;

  return vscode.workspace.applyEdit(edition);
};
