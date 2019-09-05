import React from 'react'
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
	const name = 'solechang'
	const greeting = <Text style= {styles.subHeaderTextStyle}>My name is {name}</Text>;
	return (
		<View>
			<Text style={styles.textStyle}>Getting started with React Native!</Text>
			{greeting}
		</View>
	);
};

const styles = StyleSheet.create( {
	textStyle: {
		fontSize: 45

	},
	subHeaderTextStyle: {
		fontSize: 20
	}
});

export default ComponentsScreen;