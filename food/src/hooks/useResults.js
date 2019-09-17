import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) =>{ 
        // console.log('HI THERE');
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit:50,
                    term: searchTerm, // term: term
                    location: 'san jose'
                }
            });

            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
   // promise needed for async call .then()
    };
    // call searchapi when component is first rendered Bad code!
    useEffect(() => {
        searchApi('pasta')
    }, []);

    return [searchApi, results, errorMessage];

};