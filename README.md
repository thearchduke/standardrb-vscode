# Standardrb-vscode

This is a quick and dirty vscode extension that runs `standardrb --fix [current_file_path]` when you save a ruby file.

## Installation

1. Clone this repo.
1. You'll need to have [standard](https://github.com/testdouble/standard) installed, with the `standardrb` binary on your PATH from the workspace root directory.
1. The .vsix file in this repo _should_ be the newest build of the extension; you can install it with `Install from VSIX...` in the command palette.
1. Or, to build it yourself, you'll need `vsce`: `npm install -g vsce`
1. Run `vsce package` from the root directory of the repo. You can add `-o [filename]` if you don't want to overwrite the existing one.
1. Install the .vsix file that you've created.

**You will probably want to increase your "Editor: Format on Save Timeout" to 2000ms since rubocop is slooow.** If it doesn't do anything (including throw errors) try increasing this further.

## Notes

This is not the fastest document formatter in the world!

## Contributing

Please do! The error-reporting mechanism in `doFormat` is especially awful, and this should really be in typescript.
