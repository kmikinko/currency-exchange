import React, {Component} from "react";
import getCurrencyRates from "./utils/CurrencyRates";


class CurrencyValue extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            currencies: [],
            eur: 0,
            pln: 0,
            fromValue: '',
            fromCurrency: '',
            toValue: '',
            toCurrency: ''
        }
    }
    
    componentDidMount() {
        this.getCurrencyValue( 'Euro' )
    }
    
    getCurrencyValue = ( currency ) => getCurrencyRates( currency )
        .then( response => {
            this.setState( {...this.state, fromCurrency: response.base} );
        } )
    
    handleChange = ( val ) => this.getCurrencyValue( val.target.text ); //check
    
    render() {
      
        return <>
            <select onChange={this.handleChange}>
                <option value={this.state.fromCurrency}>EUR
                </option>
                <option value={this.state.toCurrency}>PLN
                </option>
            </select>
        </>
    }
}

export default CurrencyValue;

