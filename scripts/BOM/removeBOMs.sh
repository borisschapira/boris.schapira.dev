#!/bin/bash
parent_path=$( cd "$(dirname "${BASH_SOURCE}")" ; pwd -P )
sh ./scripts/BOM/findBOM.sh $1|while read file;do sh ./scripts/BOM/removeBOM.sh $file;done;
