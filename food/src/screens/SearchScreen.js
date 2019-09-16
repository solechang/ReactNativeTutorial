/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
// useEffect = hook. Allows to run code 1 time
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} // or newTerm => setTerm(newTerm)
                onTermSubmit={() => searchApi(term)} // or () => searchApi() passin the reference to the funciton invoked
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length}</Text>
            <ResultsList title="Cost Effective" />
            <ResultsList title="Bit Pricier" />
            <ResultsList title="Big Spender" />
        </View>
    );

};

const styles = StyleSheet.create({});

export default SearchScreen;