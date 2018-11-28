#!/bin/bash

output=$(tslint -p tsconfig.json valid.ts)

if [[ $? -ne 0 ]]; then
	echo "valid.ts doesn't passed checking."
	echo "$output"
	exit 1
fi

if [[ $output == *'deprecat'* ]]; then
	echo 'Contains deprecated rule.'
	echo "$output"
	exit 1
fi

output=$(tslint -p tsconfig.json invalid.ts)

if [[ $? -eq 0 ]]; then
	echo 'invalid.ts passed checking.'
	echo "$output"
	exit 1
fi

if [[ $output == *'deprecat'* ]]; then
	echo 'Contains deprecated rule.'
	echo "$output"
	exit 1
fi
