/**
 * @format
 */

import {Settings} from 'react-native-fbsdk-next';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

Settings.initializeSDK();

AppRegistry.registerComponent(appName, () => App);
