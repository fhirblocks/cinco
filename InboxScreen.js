import React from 'react';
import { TouchableHighlight, FlatList, TextInput, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import  MerlinWidget from './components/MerlinWidget'
import Swipeout from 'react-native-swipeout'

 class InboxScreen extends React.Component {
 

 	state = {
 		inboxItems: [
 			{key: '1', requestor: 'wwDr. Lubed Digit', title: 'May I Break the Glass?', description: 'Hi Doug.  Based on our discussion, I need you to sign this consent using FHIRBlocks so I can "break the glass".  Thanks for looking me up!  I look forward to curing your STD.', displayDate: 'Monday'},
 			{key: '2', requestor: 'Alex Smith, Esq.', title: "Let's get that scumbag!", description: 'If you want me to sue the asshole that ran over you, sign this and we can get started.', displayDate: 'Monday'},
 			{key: '3', requestor: 'Freddia Freeloader', title: 'Request for an ALD consent', description: 'When it comes time to pull the plug, just count on us!', displayDate: 'Monday'},
 			{key: '4', requestor: 'Dr Jack Slicem', title: 'Request for a Surgical Consent', description: "Hi Doug.  Here's the consent for your upcoming heart transplant.  Just use FHIRBlocks to sign, and everything will be ok.  Really.  Trust me now. Ok?", displayDate: 'Monday'},
 		],
 		gem: [
 		    {
        		"prompt": "What is your full name?",
        		"type": "textBox",
        		"mapTo": "pdfName"
        	},
        	{
        		"prompt": "What is your birthday?",
        		"type": "date",
        		"mapTo": "pdfDOB"
        	},
        	{
        		"prompt": "enter your age in years",
        		"type": "integer",
        		"mapTo": "pdfAge"
        	},
        	{
        	    "prompt": "Include Mental & Behavorial Notes?",
        	    "type": "boolean",
        	    "mapTo": "mental"
        	},
        	{
        	    "prompt": "Include Substance Abuse Notes?",
        	    "type": "boolean",
        	    "mapTo": "mental"
        	},
        	{
                "prompt": "Include Genetic Testing?",
                "type": "boolean",
                "mapTo": "genetic"
            }

 		]
 	};
  tapped = (k) => {
         this.props.navigation.navigate('RequestDetails', {request: k});
     };
  swipeBtns = [{
      text: 'Delete',
      backgroundColor: 'red',
      underlayColor: 'green',
      onPress: () => { alert('delete'); this.deleteItem }
    }];
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'top', alignItems: 'left' }}>
      	<Text style = {styles.titleText} >The Merlin Engine!</Text>
      	<FlatList 
          data={this.state.gem}
          renderItem={
            ({item}) =>
              <Swipeout right={this.swipeBtns} autoClose='true' backgroundColor= 'transparent'>
                  <MerlinWidget title={item.prompt} type={item.type} requestor={item.requestor} description={item.description}/>

              </Swipeout>
          }>
        </FlatList>
      </View>
    );	
  }
}

const styles = StyleSheet.create({
	titleText: {
		fontSize: 32,
		textAlign: 'left'
}});

export default InboxScreen;