#!/bin/bash

output=$(tslint -p tsconfig.json valid.ts)

if [[ $output == *'ERROR'* ]]; then
	echo "valid.js doesn't passed checking."
	echo "$output"
	exit 1
fi

if [[ $output == *'deprecat'* ]]; then
	echo 'Contains deprecated rule.'
	echo "$output"
	exit 1
fi

output=$(tslint -p tsconfig.json invalid.ts)

if [[ $output != *'ERROR'* ]]; then
	echo 'invalid.js passed checking.'
	echo "$output"
	exit 1
fi

if [[ $output == *'deprecat'* ]]; then
	echo 'Contains deprecated rule.'
	echo "$output"
	exit 1
fi
