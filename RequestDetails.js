import React from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import InboxItem from './components/InboxItem';

class RequestDetails extends React.Component {
  render() {
  request = this.props.navigation.state.params.request;
  title=request.title;
  description=request.description;
  requestor=request.requestor;

    return (
      <View style={{ flex: 1}}>
      <Text style={styles.titleText}>Pending Request</Text>
        <InboxItem title={title}
                   requestor={requestor}
                   description={description}/>
         <Button title="View Consent Document" onPress={() => {this.props.navigation.navigate('ReviewConsentPDF')}}/>
         <Button title="Decline Request" onPress={() => {this.props.navigation.navigate('ReviewConsentPDF')}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	buttonStyle: {
	    color: 'red',
	    marginTop: 20,
	    padding: 20,
	    backgroundColor: 'green'
	    },
	titleText: {
    	fontSize: 32,
    	textAlign: 'left'
    	}
});

export default RequestDetails;
