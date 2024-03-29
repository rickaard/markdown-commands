import * as vscode from "vscode";
import { headingLevel3 } from "../constants";
import { insertBeforeSelection } from "../helpers";

export default () => {
  const { activeTextEditor } = vscode.window;
  const edition = insertBeforeSelection(activeTextEditor?.selection, headingLevel3);

  if (!edition) return;

  return vscode.workspace.applyEdit(edition);
};
