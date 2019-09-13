/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    const searchApi = async () => {
        const response = await yelp.get('/search', {
            params: {
                limit:50,
                term, // term: term
                location: 'san jose'
            }
        });
        setResults(response.data.businesses);

        // promise needed for async call .then()
    };

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} // or newTerm => setTerm(newTerm)
                onTermSubmit={searchApi} // or () => searchApi() passin the reference to the funciton invoked
            />
            <Text>Search Screen</Text>
            <Text>We have found {results.length}</Text>
        </View>
    );

};

const styles = StyleSheet.create({});

export default SearchScreen;