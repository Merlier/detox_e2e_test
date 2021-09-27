#!/bin/bash

apt update

npm i -g envinfo detox-cli && envinfo
npm install

echo yes | $ANDROID_HOME/tools/bin/sdkmanager --channel=0 --verbose "system-images;android-30;default;x86_64"
echo no | $ANDROID_HOME/tools/bin/avdmanager --verbose create avd --force --name "Pixel_API_30" --package "system-images;android-30;default;x86_64" --sdcard 200M --device 11

npx jetify
npx detox build -c android.emu.release
npx detox test -c android.emu.release \
  --artifacts-location="e2e/__screenshots__" \
  --take-screenshots="all" \
  --headless \
  --device-boot-args="-http-proxy 10.0.2.2:3080"

#npx detox test -c android.emu.release \
#  --artifacts-location="e2e/__screenshots__" \
#  --take-screenshots="all" \
#  --headless \
#  --device-boot-args="-http-proxy 10.0.2.2:3080" \
#  --updateSnapshot
