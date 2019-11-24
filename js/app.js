import React, {Component} from "react";
import ReactDOM from "react-dom";
class CurrencyConverter extends Component {
    state = {
        transactionName: '',
        euro: '',
        pln: '',
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
    /* adding the list */
    addTransaction = ( transaction) => {
        transaction.pln = this.state.euro * 4.30
        let newTransactionList = [ ...this.state.transactionList, transaction];
        console.log(newTransactionList);
        console.log(this.state.transactionList);
        this.setState( {
            transactionList: newTransactionList,
            pln: this.state.euro * 4.30
        });
    }
    handleTransaction = ( e ) => {
        e.preventDefault();
        if ( typeof this.addTransaction === 'function' ) {
            console.log(this.state.transactionName)
            let obj = JSON.parse(`{ "name": "${this.state.transactionName}", "euro": "${this.state.euro}", "pln" : ""}`);
            console.log(obj);
            this.addTransaction(obj);
        }
    }
    render(){
        return (
            /* currency form */
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
                            <input type='text' name='euro' value={this.state.euro} onChange={this.handleChange} placeholder='Numbers only'>
                            </input>
                        </label>
                        <button type='submit' name='calculate' onClick={this.handleTransaction}> Calculate</button>
                        <label>PLN
                            <input type='text' name='pln' value={this.state.pln} onChange={this.handleChange} readOnly>
                            </input>
                        </label>
                    </form>
                </section>
                {/* list of all transactions */}
                <section>
                    <div>
                        <ul>
                            {this.state.transactionList.map((element,index)=> <li key={index}>Transaction Name: {element.name} Amount in Euro: {element.euro} Amount in PLN: {element.pln}</li>)}
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