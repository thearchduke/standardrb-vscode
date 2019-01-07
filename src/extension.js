const vscode = require("vscode");
const { doFormat } = require("./doFormat");

class StandardrbDocumentFormatter {
  provideDocumentFormattingEdits(_document) {
    doFormat();
  }
}

function activate(_context) {
  vscode.languages.registerDocumentFormattingEditProvider(
    { language: "ruby", scheme: "file" },
    new StandardrbDocumentFormatter()
  );
}

function deactivate() {
  // no-op
}

module.exports = {
  activate,
  deactivate,
};
