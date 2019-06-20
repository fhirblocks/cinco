import React from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import QRCode from 'react-native-qrcode'

class HomeScreen extends React.Component {
  state = {valueForCode: "did:fb:1234"};

  render() {
    return (
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
            <QRCode value={this.state.valueForQRCode} size={100} />
        </View>
        <View >
            <Image source ={require ('./assets/fhirBlocksLogo.png')}/>
            <View style={{padding: 10}}>
                        <Button containerStyle={{width:80, padding: 10, borderColor: 'red'}} buttonStyle={{fontSize: 30,  color: 'green'}}  title="Inbox"   onPress={() => {this.props.navigation.navigate('Inbox')}}/>
                    </View>
                    <View style={{padding: 10}}>
                        <Button style={styles.buttonStyle} title="Consents Given" onPress={() => {this.props.navigation.navigate('Consents')}}/>
                    </View>
                    <View style={{padding: 10}}>
                        <Button style={styles.buttonStyle} title="Consents Received" onPress={() => {this.props.navigation.navigate('Consents')}}/>
                    </View>
                    <View style={{padding: 10}}>
                        <Button title="Request Consent" onPress={() => {this.props.navigation.navigate('GetConsents')}}/>
                    </View>
                    <View style={{padding: 10}}>
                        <Button title="My ID & Credentials" onPress={() => {this.props.navigation.navigate('Creds')}}/>
                    </View>
                    <View style={{padding: 10}}>
                        <Button title="Providers" onPress={() => {this.props.navigation.navigate('Providers')}}/>
                    </View>
                    <View style={{padding: 10}}>
                        <Button title="Settings" onPress={() => {this.props.navigation.navigate('ReviewConsentPDF')}}/>
                    </View>

        </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
	buttonStyle: {color: 'red', marginTop: 20, padding: 20, backgroundColor: 'green'}
});

export default HomeScreen;