const EXCHANGE_URL = 'https://api.exchangerate-api.com/v4/latest/';

const getCurrencyRates = (currency) => fetch( EXCHANGE_URL + currency ).then( r => r.json() );

export default getCurrencyRates;
