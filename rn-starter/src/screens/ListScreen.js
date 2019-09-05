import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {

	const friends = [
		{ name: 'Friend #1', age: '20'},
		{ name: 'Friend #2', age: '32'},
		{ name: 'Friend #3', age: '24'},
		{ name: 'Friend #4', age: '51'},
		{ name: 'Friend #5', age: '32'},
		{ name: 'Friend #6', age: '44'}

	];

	return (
		<FlatList

		 keyExtractor={friend => friend.name}
		 data={friends}
		 renderItem = {({ item }) => {
		 	return <Text style={styles.textStyle}> {item.name} - age: {item.age}</Text>;
		 }}
		/>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		marginVertical: 150
	}

});

export default ListScreen;