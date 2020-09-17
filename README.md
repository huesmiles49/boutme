# Bout Me App

> A simple demo app of what [React Native](https://reactnative.dev/) can do. \
> This branch is dedicated for the Android version to avoid build conflicts.

> For Bout Me IOS version, go [here](https://github.com/huesmiles49/boutme/tree/master-ios)

<br />

<p align="center">
  <img width="460" height="300" src="https://github.com/huesmiles49/boutme/blob/master-android/BoutMe/assets/images/demo-pic-android.png">
</p>

<br />

---

## Environment Setup (MacOS)
<br />

> For more information to setup react native project environment, please refer to the [React Native Docs](https://reactnative.dev/docs/environment-setup)

<br />

```bash
# 1. Install Homebrew, Node, Watchman, JDK
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
$ brew install node
$ brew install watchman
$ brew cask install adoptopenjdk/openjdk/adoptopenjdk8

# 2. Android Studio: https://developer.android.com/studio/index.html

# 3. Copy + Paste in .bashrc or .zshrc
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools

# 4. Install React Native Cli
$ npm install -g react-native-cli
```
<br />

## Installation

```bash
# 1. Clone project
$ git clone https://github.com/huesmiles49/boutme.git

# 2. Navigate to project
$ cd boutme/BoutMe 

# 3. Install Node packages
$ npm install

# 4. Link resources
$ react-native link
```
<br />

## Run the app

```bash
$ react-native run-android
```
