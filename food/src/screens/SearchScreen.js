/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
// useEffect = hook. Allows to run code 1 time
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });

    };
    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} // or newTerm => setTerm(newTerm)
                onTermSubmit={() => searchApi(term)} // or () => searchApi() passin the reference to the funciton invoked
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice('$')}
                    title="Cost Effective" 
                    navigation={navigation}
                />
                <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" navigation={navigation}/>
                <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" 
                navigation={navigation}/>
            </ScrollView>
        </>
    );

};

const styles = StyleSheet.create({});

export default SearchScreen;