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
        fromCurrency: '',
        toCurrency: '',
        toValue: ''
    }
    
    setToCurrency = ( currency ) => {
        this.setState( {
            toCurrency: currency
        }, () => {
            this.calculateToValue();
        }  )
    }
    
    handleChange = ( e ) => {
        const name = e.target.name
        this.setState( {
            [name]: e.target.value
        },()=>{
            this.calculateToValue();
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
        }, () => {
            this.calculateToValue();
        } )
    }
    
    setFromCurrency =(currency)=>{
        this.setState({
            fromCurrency: currency
        })
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
    
    /* remove list item */
    
     removeTransaction = (name) => {
         const newTransactionList = this.state.transactionList.filter(item =>{
            // console.log('click dziala');
             return item.name != name
         });
         
         this.setState({
             transactionList: newTransactionList
         })
     }
    
     /* sum the transactions */
    
    // sumOfTransactions = () => {
    //
    // }
    
    
    
    handleTransaction = ( e ) => {
        e.preventDefault();
        if ( typeof this.addTransaction === 'function' ) {
            const obj = {
                name: this.state.transactionName,
                toValue: this.state.toValue,
                toCurrency: this.state.toCurrency,
                fromValue: this.state.fromValue,
                fromCurrency: this.state.fromCurrency
            }
            this.addTransaction( obj );
        }
        
    }
    
    calculateToValue = () => {
        let toValue =0;
        if ( this.state.fromValue === '' || this.state.toCurrency === '' || !this.state.rates[this.state.toCurrency] ) {
            return toValue;
        }
        toValue = (this.state.fromValue * this.state.rates[this.state.toCurrency]).toFixed(2);
        this.setState({
        toValue // is toValue = toValue
        });
        return toValue;
    }
    
    render() {
        return (
            <>
                <div className={'mainView'}>
                    {/*currency form */}
                    <section className={'main_app'}>
                        <div>
                            <h1>CURRENCY CONVERTER</h1>
                            <form onSubmit={this.handleSubmit}>
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
                                            <input type='text' name='fromValue' value={this.state.fromValue}
                                                   onChange={this.handleChange}
                                                   placeholder='Numbers only' className={'input_fields'}>
                                            </input>
                                            <CurrencyValue setFromCurrency = {this.setFromCurrency} setRates={this.setRates}/>
                                        </label>
                                    </div>
                                    
                                    <div>
                                        
                                        <input type='text' name='toValue' value={this.state.toValue}
                                               placeholder='Numbers only' className={'input_fields'} readOnly>
                                        </input>
                                        <CurrencyRates setToCurrency={this.setToCurrency}/>
                                    </div>
                                    
                                    <button type='submit' name='calculate' onClick={this.handleTransaction}
                                            className={'btn'}> Add transaction
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
                                {this.state.transactionList.map( ( element, index ) => <li key={index}>
                                    <div className={'list_element'}>
                                        Transaction Name:<span> {element.name}</span>
                                        Transaction {element.fromCurrency}:<span>{element.fromValue}</span>
                                        Transaction {element.toCurrency}: <span>{element.toValue}</span>
                                        <button onClick={() => this.removeTransaction(element.name)}
                                        className={'btn_remove'}>x</button>
                                    </div>
                                </li> )}
                            </ul>
                        </div>
                    </section>
                    
                    {/*sum of all transactions (section in progress) */}
                    
                    <section className={'main_app'}>
                        <div className={'hover'}>
                            <ul className={'transaction_list transactions'} onClick={this.handleChange}>
                                <h3>Total sum of all transactions</h3>
                                <li>
                                    Amount in Euro: <span>{this.state.eur}</span>
                                    Amount in PLN:<span>{this.state.pln}</span>
                                </li>
                            </ul>
                        </div>
                    </section>
                    {/*biggest transaction (section in progress) */}
                    <section className={'main_app'}>
                        <div className={'hover'}>
                            <h3>The biggest transaction</h3>
                            <h2>transaction name</h2>
                            <ul className={'transaction_list transactions'}>
                                
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