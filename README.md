# boutme
A demo profile app using React Native
# Bout Me App

> A simple demo app of what [React Native](https://reactnative.dev/) can do. \
> This branch is dedicated for the IOS version to avoid build conflicts.

> For Bout Me Android version, go [here](https://github.com/huesmiles49/boutme/tree/master-android)

<br />

<p align="center">
  <img width="400" height="500" src="https://github.com/huesmiles49/boutme/blob/master/BoutMe/assets/images/demo-pic-ios.png">
</p>

<br />

---

## Environment Setup (MacOS)
<br />

> For more information to setup react native project environment, please refer to the [React Native Docs](https://reactnative.dev/docs/environment-setup)

<br />

```bash
# 1. Install Homebrew, Node, Watchman, CocoaPods
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
$ brew install node
$ brew install watchman
$ sudo gem install cocoapods

# 2. Install XCode: https://stackoverflow.com/questions/10335747/how-to-download-xcode-dmg-or-xip-file

# 3. Open XCode, then set the CLI Tools to the respective XCode version

# 4. Install React Native Cli
$ npm install -g react-native-cli
```
<br />

## Installation

```bash
# 1. Clone project
$ git clone https://github.com/huesmiles49/boutme.git

# 2. Switch to IOS branch
$ git checkout master-ios

# 3. Navigate to project
$ cd boutme/BoutMe 

# 4. Install Node packages
$ npm install

# 5. Install CocoaPods packages
$ npx pod-install ios
```
<br />

## Run the app

```bash
$ react-native run-ios
```