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
6. Push keeps adding new instances everytime called, navigate jumps to a screen if already instantiated
7. push & pop used by Stack, goBack used by all navigations

### Passing Parameters
1. Simple Parameters -> navigate(routeName, JSON Object of params)
ex. Route Object -> Object {
  "key": "Home_to_Details-TnybBl8V7ieXIZqkaGDoW", //unique per stack item
  "name": "Home_to_Details", // user defined descriptive identifier
  "params": Object {
    "screenNumber": 1,
  },
}
Params object is part of the properties Object passed from one screen to another

### Stack Navigation Screen Options
1. reactnative.dev
2. navigation options
3. Context
4. Hooks
5. Nesting Navigation
6. Modal Dialogs
7. Events and listeners
8. Stack, Tab, Drawer

### Built in gesture support
1. (cross-platform) Button, Drawer, FlatList, Keyboard, Picker, ScrollView, Slider,
Switch, Tab, TextInput

### Touchable API
1. TouchableOpacity
2. TouchableHighlight
3. TouchableWithoutFeedback
4. TouchableNativeFeedback

### Pressable API

### Gesture Response Lifecycle
1. Tap, Double Tap, Long Press, Force Press
2. Pan, Scroll, Swipe
3. Flick
4. Pinch & Spread
5. Drag
6. Rotate

Event -> Bubble Up onStartShouldSetResponder with callback.
If any returns true, call onResponderGrant with callback,
keep bubbling up if false.
onResponderRelease with callback.
onResponderReject with callback.

onMoveShouldSetResponder


### XMLHttpRequest (XHR) API
1. Fetch, axios, superagent, etc
2. XML and JSON exchange formats

1. Create and init an XHR Object
2. Send a Web API Request
3. Process Response
4. OMDB: Open Movie Database


