/*

The Merlin Widget!

*/

import React from 'react';
import { Switch, TouchableHighlight, TextInput, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import  DatePicker  from 'react-native-datepicker'
import RadioGroup from 'react-native-radio-buttons-group';

class MerlinWidget extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: 'Useless Placeholder',
            type: 'text',
            date: '',
            nyNumber: 0
        };
    }


	render() {
			return (
				<View style={styles.inboxItemStyle}>
					<Text style={styles.title}>{this.props.title}</Text>
					<Text style={styles.requestor}>{this.props.requestor}</Text>
					<Text style={styles.descriptionStyle}>{this.props.description}</Text>
				    { this.props.type == "textBox" && <TextInput style={{height: 30, borderColor: 'grey', borderWidth: 4}}></TextInput> }
				    { this.props.type == "integer" && <TextInput
                         style={styles.textInput}
                         keyboardType='numeric'
                         //onChangeText={(text)=> this.onChanged(text)}
                         value={this.state.myNumber}
                         maxLength={10}  //setting limit of input
                      />}
                    { this.props.type == "date" && <DatePicker
                          style={{width: 200}}
                            date={this.state.date}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="2016-05-01"
                            maxDate="2016-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                              dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                              },
                              dateInput: {
                                marginLeft: 36
                              }

                            }}
                            onDateChange={(date) => {this.setState({date: date})}}
                    ></DatePicker>}
                    { this.props.type == "boolean" && <Switch></Switch>}

				</View>

		);
	}
}

const styles = StyleSheet.create({
		inboxItemStyle: {
			borderTopWidth: 1,
			borderTopColor: 'gray',
			paddingLeft: 10,
			paddingRight: 10,
			borderBottomColor: 'gray',
			borderBottomWidth: 1
		},
		title: {
			color: "black",
			fontSize: 20,
			fontWeight: '500'
		},
		requestor: {
			color: "black"
		},
		descriptionStyle: {
			color: "#616563"
		}
	});

export default MerlinWidget;

