import React, {Component} from "react";
import ReactDOM from "react-dom";
import '../style/main.scss';
import CurrencyValue from "./CurrencyValue";
import CurrencyRates from './components/CurrencyRates';


class CurrencyConverter extends Component {
    state = {
        transactionName: '',
        eur: 0,
        pln: 0,
        transactionList: [],
        rates: [],
        fromValue: '',
        toCurrency: '',
        toValue: ''
    }
    
    setToCurrency = ( currency ) => {
        this.setState( {
            toCurrency: currency
        } )
    }
    
    handleChange = ( e ) => {
        const name = e.target.name
        this.setState( {
            [name]: e.target.value
        } );
    }
    
    handleCurrencySelection = e => {
        this.setState( {
            fromCurrency: e.target.value,
        } )
    }
    
    setRates = rates => {
        this.setState( {
            rates: rates
        } )
    }
    
    setEuro = eur => {
        this.setState( {
            eur: eur
        } )
    }
    
    setPln = pln => {
        this.setState( {
            pln: pln
        } )
    }
    
    handleSubmit = e => {
        e.preventDefault();
    };
    
    
    /* adding the list */
    addTransaction = ( transaction ) => {
        let newTransactionList = [ ...this.state.transactionList, transaction ];
        this.setState( {
            transactionList: newTransactionList,
        } );
    }
    
    
    handleTransaction = ( e ) => {
        e.preventDefault();
        if ( typeof this.addTransaction === 'function' ) {
            console.log( this.state.transactionName )
            const obj = {
                name: this.state.transactionName,
                euro: this.state.euro,
                pln: this.state.euro * 4.30
            }
            this.addTransaction( obj );
        }
        
    }
    
    calculateToValue = () => {
        if ( this.state.fromValue === '' || this.state.toCurrency === '' || !this.state.rates[this.state.toCurrency] ) {
            return 0;
        }
        
        // this.setState({
        //     change state, assign to the field w liscie
        // })
        return this.state.fromValue * this.state.rates[this.state.toCurrency];
    }
    
    render() {
        return (
            <>
                <div className={'mainView'}>
                    {/*currency form */}
                    <section className={'main_app'}>
                        <div>
                            <h1 className={'container'}>CURRENCY CONVERTER</h1>
                            <form onSubmit={this.handleSubmit} className={'container'}>
                                <div className={'exchange'}>
                                    <div>
                                        <label>Transaction name
                                            <input type='text' name='transactionName' value={this.state.transactionName}
                                                   onChange={this.handleChange} placeholder='Transaction name'
                                                   className={'input_fields'}>
                                            </input>
                                        </label>
                                    </div>
                                    
                                    <div>
                                        <label>From:
                                            <CurrencyValue setRates={this.setRates}/>
                                            <input type='text' name='fromValue' value={this.state.fromValue}
                                                   onChange={this.handleChange}
                                                   placeholder='Numbers only' className={'input_fields'}>
                                            </input>
                                        </label>
                                    </div>
                                    
                                    <div>
                                        <CurrencyRates setToCurrency={this.setToCurrency}/>
                                        <input type='text' name='toValue' value={this.calculateToValue()}
                                               placeholder='Numbers only' className={'input_fields'} readOnly>
                                        </input>
                                    </div>
                                    
                                    <button type='submit' name='calculate' onClick={this.handleTransaction}
                                            className={'btn'}> Calculate
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>
                    {/* list of all transactions */}
                    <section className={'main_app'}>
                        <div>
                            <h3 className={'all_transactions'}>ALL TRANSACTIONS</h3>
                            <ul className={'transaction_list'}>
                                <li>test</li>
                                <li>test</li>
                                
                                {this.state.transactionList.map( ( element, index ) => <li key={index}>
                                    <span> Transaction Name:<span> {this.state.transactionName}</span></span>
                                    <span> Transaction EUR:<span>{this.state.fromValue}</span></span>
                                    <span> Transaction PLN: <span>{this.state.toValue}</span></span>
                                </li> )}
                            </ul>
                        </div>
                    </section>
                    {/*sum of all transactions*/}
                    <section className={'main_app'}>
                        <div className={'container '}>
                            <ul className={'transaction_list transactions'} onClick={this.handleChange}>
                                <h3>Total sum of all transactions</h3>
                                <li>
                                    <span>Amount in Euro: <span>{this.state.eur}</span> </span>
                                    <span> Amount in PLN:<span>{this.state.pln}</span></span>
                                </li>
                            </ul>
                        </div>
                    </section>
                    {/*biggest transaction*/}
                    <section className={'main_app'}>
                        <div className={'container'}>
                            <ul className={'transaction_list transactions'}>
                                <h3>The biggest transaction</h3>
                                <li>Amount in Euro: <span>'100'</span>
                                    Amount in PLN:<span>'100'</span>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </>
        )
    }
    
}


class App extends Component {
    render() {
        return <>
            <CurrencyConverter/>
        </>
    }
}

ReactDOM.render( <App/>, document.getElementById( "app" ) );