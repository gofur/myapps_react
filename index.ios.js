//index.ios.js -- place code in here for ios!!!

//import a library to help create a component
// import React from 'react';
// import { AppRegistry, View } from 'react-native';
//import Header from './src/components/header';
//import AlbumList from './src/components/AlbumList';

// create a component
// const App = () => (
//   <View style={{ flex: 1  }}>
//     <Header headerText={'Albums'} />
//     <AlbumList />
//   </View>
// );


// Render it to the device
// AppRegistry.registerComponent('albums', () => App);

import { AppRegistry } from 'react-native';
import App from './src/app';

AppRegistry.registerComponent('auth', () => App);
