import React, {Component} from "react";
import ReactDOM from "react-dom";

class CurrencyConverter extends Component {
    state = {
        euro: '',
        pln: '',
        transactionName: '',
        transactionList: []
    }
    
    handleChange = ( e ) => {
        this.setState( {
            [e.target.name]: e.target.value
        } )
    }
    
    handleSubmit = e => {
        e.preventDefault();
    };
    
    /* dodanie listy */
    
    addTransaction = ( transaction ) => {
        let newTransactionList = [ ...this.state.transactionList, transaction ];
        this.setState( {
            transactionList: newTransactionList,
            pln: this.state.euro * 4.30
        } )
    }

    handleTransaction = ( e ) => {
        e.preventDefault();
        if ( typeof this.addTransaction === 'function' ) {
            this.addTransaction();
        }
    }
    

 
    render(){
        
        return (
            
            /* formularz z walutami */
            
            <>
                <section>
                    <form onSubmit={this.handleSubmit}>
                        <div>EURO RATE: 4.30 PLN</div>
                        <h1>ADD TRANSACTION</h1>
                        <label>Transaction name
                            <input type='text' name='transactionName' value={this.state.transactionName}
                                   onChange={this.handleChange} placeholder='Transaction name'>
                            </input>
                        </label>
                        <label>EUR
                            <input type='text' name='euro' onChange={this.handleChange} placeholder='Numbers only'>
                            </input>
                        </label>
                        <button type='submit' name='calculate' onClick={this.handleTransaction}> Calculate</button>
                        <label>PLN
                            <input type='text' name='pln' value={this.state.pln} onChange={this.handleChange} readOnly>
                            </input>
                        </label>
                    </form>
                </section>
                
                {/*lista wszystkich transakcji */}
                
                <section>
                    <div>
                        <ul>
                            {/*<h3>{this.state.transactionName}</h3>*/}
                            {/*<li>Amount in Euro:<span>{this.state.euro}</span>*/}
                            {/*    Amount in PLN: <span> {this.state.pln}</span>*/}
                            {/*</li>*/}
                            <li></li>
                        </ul>
                    </div>
                </section>
                
                {/*suma wszystkich transakcji*/}
                
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
                
                {/*najwieksza transakcja*/}
                
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