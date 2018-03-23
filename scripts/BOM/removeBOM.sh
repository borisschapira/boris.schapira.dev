#!/bin/bash
awk '{if(NR==1)sub(/^\xef\xbb\xbf/,"");print}' $1 > $1.tmp
cp $1.tmp $1
rm -f $1.tmp
