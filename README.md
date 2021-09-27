# Detox e2e test

Commands:

    $ docker run --rm -ti --privileged -v $(pwd):/app reactnativecommunity/react-native-android:latest bash -c "cd /app && ./e2e/run_e2e_tests.sh;exit;"
