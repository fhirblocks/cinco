/*

The inbox item 

*/

import React from 'react';
import { TouchableHighlight, ScrollView, StyleSheet, Text, View, Image } from 'react-native';

class InboxItem extends React.Component {

	render() {
			return (
				<View style={styles.inboxItemStyle}>
					<Text style={styles.title}>{this.props.title}</Text>
					<Text style={styles.requestor}>{this.props.requestor}</Text>
					<Text style={styles.descriptionStyle}>{this.props.description}</Text>
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

export default InboxItem;

