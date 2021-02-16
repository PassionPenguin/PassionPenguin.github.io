#!/bin/bash
cd ../../
for f in documents/*.md
  do if [ ! -f "./archive/${${f//md/html}//documents\//}" ]
  then
  echo "Generate ${f//md/html}"
  md2html $f -o ./archive; fi
  ls-minifier $f --silent --override --html-compressor=html-minifier
  done
