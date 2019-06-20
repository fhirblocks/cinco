/*
 * CINCO - the FHIRBlocks wallet

*/

import React from 'react';
import { Text, View, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import InboxScreen from './InboxScreen';
import RequestDetails from './RequestDetails';
import ReviewConsentPDF from './ReviewConsentPDF';
import FilledPDF from './FilledPDF';
import GetConsents from './GetConsents';

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

class ConsentsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Consents!</Text>
      </View>
    );
  }
}



class CredsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Credentials!</Text>
      </View>
    );
  }
}

class ProvidersScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Providers!</Text>
      </View>
    );
  }
}

const Navigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Inbox: {screen: InboxScreen },
  Consents: {screen: ConsentsScreen },
  Creds: {screen: CredsScreen },  
  Providers: { screen: ProvidersScreen },
  Settings: { screen: SettingsScreen },
  RequestDetails: {screen: RequestDetails},
  ReviewConsentPDF: {screen: ReviewConsentPDF},
  FilledPDF: {screen: FilledPDF},
  GetConsents: {screen: GetConsents}

}, {
  initialRouteName: "Home"
});


export default createAppContainer(Navigator);
