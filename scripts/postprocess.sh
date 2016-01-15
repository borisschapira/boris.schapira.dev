#!/bin/sh

PUBLIC_WWW=$1

## create gzipped versions of the files
find $PUBLIC_WWW -name "*.css" -type f -exec /bin/sh -c "gzip -c '{}' > '{}.gz'" \;
find $PUBLIC_WWW -name "*.html" -type f -exec /bin/sh -c "gzip -c '{}' > '{}.gz'" \;
find $PUBLIC_WWW -name "*.js" -type f -exec /bin/sh -c "gzip -c '{}' > '{}.gz'" \;
find $PUBLIC_WWW -name "*.svg" -type f -exec /bin/sh -c "gzip -c '{}' > '{}.gz'" \;

## Post process files to remove BOMs
sh ./scripts/BOM/removeBOMs.sh $1;
