# ReasyGo

## Environment Setup
1. Install react native
    
    `npm install -g react-native-cli`
    
    `npm install -g react-native`
    
1. Initialize project directory

    `react-native init ReasyGo`
    
1. Connect to the GitHub
    1. `git init`
    1. `git remote add origin https://github.com/nmark00/ReasyGo.git`
    1. `git branch -M main`
    1. `git pull` use `git reset --hard origin/master` if error

    1. `npm install`
    1. For ios: 

        1. `cd ios/ && pod install`
        1. In XCode, open .workspace file. File > Add Package, enter `https://github.com/firebase/firebase-ios-sdk`
        2. Add GoogleService plist file to the .workspace file: Right-click > Add File to ReasyGo
        3. Then open Signing & Capabilities and select a Team. 


1. Go to main directory and start app with `npx react-native run-ios`

