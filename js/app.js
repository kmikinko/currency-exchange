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
    
    render() {
    
        /* tabelka z historia transakcji */
    
        addTransaction = (transaction) =>{
            let newTransactionList = [...this.state.transactionList, transaction];
            this.setState({
                transactionList: newTransactionList
            })
        }
    
        return (
            /* formularz z walutami */
            <section>
                <form onSubmit={this.handleSubmit}>
                    <div>EURO RATE: 4.30 PLN</div>
                    <label>Transaction name
                        <input type='text' name='transactionName' value={this.state.transactionName}
                               onChange={this.handleChange}></input>
                    </label>
                    <label>EUR
                        <input type='text' name='euro' onChange={this.handleChange}></input>
                    </label>
                    <button type='submit' name='calculate'> Calculate</button>
                    <label>PLN
                        <input type='text' name='pln' value={this.state.pln} onChange={this.handleChange}></input>
                    </label>
                </form>
            </section>
        
        /* tabelka z transakcjami */
        
        
        
        )
        
    }
}

class App extends Component {
    render() {
        return <CurrencyConverter/>
    }
}


ReactDOM.render( <App/>, document.getElementById( "app" ) );