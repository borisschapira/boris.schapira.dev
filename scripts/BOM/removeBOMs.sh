#!/bin/bash
parent_path=$( cd "$(dirname "${BASH_SOURCE}")" ; pwd -P )
bash ./scripts/BOM/findBOM.sh $1|while read file;do bash ./scripts/BOM/removeBOM.sh $file;done;
