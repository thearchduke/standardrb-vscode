#!/usr/bin/env bash

file_path=$(vsce package | cut -d' ' -f 2)
#  ^^  packages extension and retrieves file name
file_name=$(basename $file_path)
git add $file_name
git commit -m "Extension packaged for distribution"
curr_branch=$(git rev-parse --abbrev-ref HEAD)
git push origin $curr_branch
