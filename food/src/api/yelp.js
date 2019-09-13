import axios from 'axios';

export default axios.create({
    // creating instance
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer A83wtATwCOgO-zjJSz2RsCvBaVL5pJE_yf8fcXD0t5aI4refLV8MSFN6bOHt97bXEnBFPc3-4FQ2qgIyFmQhac0pn21C4niI1lXVhjiT9pYxmzW1zfOrqPrsnNobXXYx'
    }
});