find $1 -type f -exec sed '1s/^\xEF\xBB\xBF//' -i.bak {} \; -exec rm {}.bak \;
