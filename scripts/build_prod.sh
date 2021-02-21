#!/usr/bin/env bash
cp ./src/constants/domains/domains.prod.ts ./src/constants/domains/domains.ts
cp ./src/constants/creds/creds.prod.ts ./src/constants/creds/creds.ts

# The below command will generates .aab file available inside "project/android/app/build/outputs/bundle/release/"
# cd android && ./gradlew bundleRelease --stacktrace


# The below command will generate .apk file available inside "project/android/app/build/outputs/apk/release/"
cd android && ./gradlew assembleRelease --stacktrace