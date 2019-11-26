import React, {Component} from "react";
import ReactDOM from "react-dom";
import './../style/app.scss';
import CurrencyValue from "./CurrencyValue";


class CurrencyConverter extends Component {
    state = {
        transactionName: '',
        eur: 0,
        pln: 0,
        transactionList: []
    }
    handleChange = ( e ) => {
        const name = e.target.name
        this.setState( {
            [name]: e.target.value
        }, () => {
            if ( name === 'euro' ) {
                this.setState( {
                    pln: this.state.euro * 4.30
                } )
            }
        } );
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
            const obj = { //objekt ktory dodawawny jest do state. to jest lista transakcji. kolejny element listy transakcji
                name: this.state.transactionName,
                euro: this.state.euro,
                pln: this.state.euro * 4.30
            }
            this.addTransaction( obj );
        }
        
    }
    
    render() {
        return (
            /* fetch test section */
            <>
                <section>
                
                </section>
                /* currency form */
                <section>
                    <form onSubmit={this.handleSubmit}>
                        <div>EURO RATE: 4.30 PLN</div>
                        <h1>NEW TRANSACTION</h1>
                        <label>Transaction name
                            <input type='text' name='transactionName' value={this.state.transactionName}
                                   onChange={this.handleChange} placeholder='Transaction name'>
                            </input>
                        </label>
                        <label>From:
                            <CurrencyValue setPln={this.setPln} setEuro={this.setEuro}/>
                            <input type='text' name='euro' value={this.state.euro} onChange={this.handleChange}
                                   placeholder='Numbers only'>
                            </input>
                        </label>
                        <label>To:
                            <CurrencyValue setPln={this.setPln} setEuro={this.setEuro}/>
                            <input type='text' name='pln' value={this.state.pln} onChange={this.handleChange}
                                   readOnly>
                            </input>
                        </label>
                        <button type='submit' name='calculate' onClick={this.handleTransaction}> Calculate</button>
                    </form>
                </section>
                {/* list of all transactions */}
                <section>
                    <div>
                        <ul>
                            {this.state.transactionList.map( ( element, index ) => <li key={index}>Transaction
                                                                                                   PLN: {element.pln}</li> )}
                        </ul>
                    </div>
                </section>
                {/*sum of all transactions*/}
                <section>
                    <div>
                        <ul>
                            <h3>Total sum of all transactions</h3>
                            <li>Amount in Euro: <span></span>
                                Amount in PLN:<span></span>
                            </li>
                        </ul>
                    </div>
                </section>
                {/*biggest transaction*/}
                <section>
                    <div>
                        <ul>
                            <h3>The biggest transaction</h3>
                            <li>Amount in Euro: <span></span>
                                Amount in PLN:<span></span>
                            </li>
                        </ul>
                    </div>
                </section>
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