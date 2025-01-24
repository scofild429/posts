for i in ./src/*.org; do name=${i##*/}; pandoc -s $i -o ./src/md/${name%*.org}.md; done
rm src/SUMMARY.md
for i in ./src/md/*.md; do name=${i##*/}; echo "- [${name%*.md}](./md/$name)" >> ./src/SUMMARY.md; done
mdbook build 
