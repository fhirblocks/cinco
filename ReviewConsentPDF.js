import React from 'react';
import { TouchableOpacity, TouchableHighlight, FlatList, ScrollView, Alert, StyleSheet, Text, View, Button, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
//import PDFView from'react-native-view-pdf/lib/index'
import PDFReader from 'rn-pdf-reader-js'



 class ReviewConsentPDF extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <PDFReader source={{ uri: "https://s3-us-west-2.amazonaws.com/fhirblocksdocs/consentToROI.pdf" }}/>
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
                Alert.alert(
                 'FHIRBlocks asks...',
                 "I'm happy to fill in the form for you, but I will need access to credentials in your wallet.  Is that OK?",
                 [
                   {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                   {text: 'OK', onPress: () => {
                        console.log('OK Pressed');
                        this.props.navigation.navigate('FilledPDF');
                        },
                   }
                 ],
                 { cancelable: false }
                );
            }}>
                <Text style={{fontSize: 32, color: 'white'}}>Fill out the Form</Text>
        </TouchableOpacity>
      </View>
    );
  }


    _showAlert = () => {
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
             { cancelable: false }
        )
    }

}

const styles = StyleSheet.create({
	titleText: {
		fontSize: 32,
		textAlign: 'left'
    },
    button: {
        margin: 24,
        padding: 40,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "transparent",
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
        backgroundColor: '#ff6666'
      },
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#ecf0f1',
      }
});

export default ReviewConsentPDF;