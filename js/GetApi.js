import React, {Component} from "react";


class GetApi extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            currencies: [],
            eur: 0,
            pln: 0,
            fromValue: '',
            fromCurrency: '',
            toValue: '',
            toCurrency:''
        }
    }
    
    componentDidMount() {
       const currency = data.rates.currency;
        fetch( `https://api.exchangerate-api.com/v4/latest/${currency}` ).then( r => r.json() )
            .then( data => {
                this.setState( {fromCurrency: data.rates.currency});
            } )
        fetch( `https://api.exchangerate-api.com/v4/latest/${currency}` ).then( r => r.json() )
            .then( data => {
                this.setState( {toCurrency: data.rates.currency});
            } )
    }
    
    
    render() {
        return <>
            <select>
                <option value={this.state.fromCurrency}>EUR
                </option>
                <option value={this.state.toCurrency}>PLN
                </option>
            </select>
        </>
    }
}

export default GetApi;

