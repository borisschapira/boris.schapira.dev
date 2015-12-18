find $1 -type f|while read file;do [ "`head -c3 -- "$file"`" == $'\xef\xbb\xbf' ] && echo "found BOM in: $file";done;
