const child_process = require("child_process");
const vscode = require("vscode");

function doFormat() {
  let thisDocument = vscode.window.activeTextEditor.document;
  if (thisDocument.languageId === "ruby") {
    // necessary?   ^^
    const filePath = thisDocument.fileName;
    const cwd = vscode.workspace.rootPath;
    let options = {};
    // Useful if you use child_process.spawn instead: { stdio: "inherit", shell: true };
    if (cwd) options.cwd = cwd;
    let callback = (err, _stdout, stderr) => {
      // TODO FIXME callback?
      // This is dumb because standardrb exits with code 1 to abort itself
      // even when it succeeds. ???
      if (err && stderr.length > 0) {
        vscode.window.showErrorMessage(err.message);
      }
    };
    child_process.exec(`standardrb --fix ${filePath}`, options, callback);
  }
}

module.exports = { doFormat };
