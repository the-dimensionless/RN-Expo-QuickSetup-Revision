### React Native Quick Setup Revision Using EXPO-CLI

### Base Setup
1. Install Node
2. npm i --global react-native
3. npm i --global expo-cli

### Android
1. Install Android Studio
2. Set ANDROID_HOME, JAVA_HOME
3. GET SOME EMULATORS UP AND RUNNING

### MAC
1. Install XCode
2. Set ANDROID_SDK on global path, set PATH to platform-tools

### Start
1. expo init <project_name>
2. expo start
3. Through metro server, click on Run on Android emulato, IOS emulator or real device through tunneling and QR code Scan

### Adding navigation packages using expo itself
1. expo install @react-native-community/masked-view react-native-gesture-handler react-native-screens 
2. expo install @react-navigation/native @react-navigation/stack

### Begin with navigation
1. import { NavigationContainer } from '@react-navigation/native';
2. Two ways to build navigation -> programmatically (react-native apis) vs declaratively (JSX)
3. import { createStackNavigator } from '@react-navigation/stack';

### Setup Stack Navigation
1. Keep track of navigation using routes
2. Path between screens is the route stored in a Route Object
3. Use Descriptive route names


### Routing
1. moving to next screen -> Screen pushed onto Stack
2. going back -> Screen popped off Stack
3. moving to next screen -> Screen pushed onto Stack (new Instance, new key in Route Object)
4. Does nothing if routing to it's own path like from Details to Details to Details
5. Can be enforced using navigation.push()
