#!/usr/bin/env bash
cp ./src/constants/domains/domains.dev.ts ./src/constants/domains/domains.ts
cp ./src/constants/creds/creds.dev.ts ./src/constants/creds/creds.ts
npx react-native run-android