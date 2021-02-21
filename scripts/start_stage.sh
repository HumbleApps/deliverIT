#!/usr/bin/env bash
cp ./src/constants/domains/domains.stage.ts ./src/constants/domains/domains.ts
cp ./src/constants/creds/creds.stage.ts ./src/constants/creds/creds.ts

npx react-native run-android