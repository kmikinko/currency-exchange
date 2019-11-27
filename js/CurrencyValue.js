import React, {Component} from "react";
import getCurrencyRates from "./utils/CurrencyApi";


class CurrencyValue extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            currencies: [],
            eur: 0,
            pln: 0,
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
            this.props.setRates(response.rates);
            this.setState( {...this.state, fromCurrency: response.base} );
        } )
    
    handleChange = ( val ) => this.getCurrencyValue( val.target.value );
    
    render() {
        return <>
            <select onChange={this.handleChange}>
                <option>EUR
                </option>
                <option>PLN
                </option>
            </select>
        </>
    }
}

export default CurrencyValue;

