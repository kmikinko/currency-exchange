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
        fetch( "https://api.exchangerate-api.com/v4/latest/EUR" ).then( r => r.json() )
            .then( data => {
                this.setState( {eur: data.rates.EUR} );
                this.props.setEuro( data.rates.EUR );
            } )
        fetch( "https://api.exchangerate-api.com/v4/latest/PLN" ).then( r => r.json() )
            .then( data => {
                this.setState( {pln: data.rates.PLN} );
                this.props.setPln( data.rates.PLN );
            } )
    
        // fetch( "https://api.exchangerate-api.com/v4/latest/EUR" ).then( r => r.json() )
        //     .then( data => {
        //         this.setState( {eur: data.rates.EUR} );
        //         this.props.setEuro( data.rates.EUR );
        //     } )
        // fetch( "https://api.exchangerate-api.com/v4/latest/PLN" ).then( r => r.json() )
        //     .then( data => {
        //         this.setState( {pln: data.rates.PLN} );
        //         this.props.setPln( data.rates.PLN );
        //     } )
    }
    
    
    render() {
        console.log(this.state.pln);
        return <>
            <select>
                <option value=''>EUR
                </option>
                <option value=''>PLN
                </option>
            </select>
        </>
    }
}

export default GetApi;

