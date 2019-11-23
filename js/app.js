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
            transactionList: newTransactionList
        } )
    }
    
    handleTransaction = ( e ) => {
        e.preventDefault();
        if ( typeof this.addTransaction === 'function' ) {
            this.addTransaction(); // cos tu przekazuje?
        }
    }
    
    // przelicz na zlotowki
    
  
    
    render() {
        
        return (
            
            /* formularz z walutami */
            
            <>
                <section>
                    <form onSubmit={this.handleSubmit}>
                        <div>EURO RATE: 4.30 PLN</div>
                        <h1>ADD TRANSACTION</h1>
                        <label>Transaction name
                            <input type='text' name='transactionName' value={this.state.transactionName}
                                   onChange={this.handleChange}>
                            </input>
                        </label>
                        <label>EUR
                            <input type='text' name='euro' onChange={this.handleChange}>
                            </input>
                        </label>
                        <button type='submit' name='calculate' onClick={this.handleTransaction }> Calculate</button>
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
                            <h3>{this.state.transactionName}</h3>
                            <li>Amount in Euro:<span>{this.state.euro}</span>
                                Amount in PLN: <span> {this.state.pln}</span>
                            </li>
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

// class AllTransactions extends Component {

// addTransaction = (transaction) =>{
//     let newTransactionList = [...this.state.transactionList, transaction]; /* podpinasz do guzika? */
//     this.setState({
//         transactionList: newTransactionList
//     })
// }

// handleCalculate = (e) => {
//     e.preventDefault();
//     const {calculate} = this.props;
//     if (typeof calculate === 'function'){
//         calculate()
//     }
// }

// render( ) {
//
//     return <section>
//     <ul>
//         <li></li>
//     </ul>
//     </section>
//
// }
// }

// class SingleTransaction extends Component{ //jesli to bedzie w rodzicu to przekazac chyba mozesz {}
//
//    handleTransaction = (e) =>{
//        e.preventDefault();
//        const {addTransaction, value} = this.props /*co przyjmuje jako 2gie?? jak wpisac euro i pln? */
//        if(typeof addTransaction === 'function'){
//            addTransaction(value);
//        }
//    }
//
//     render(props){
//         return <tr>
//             <td>{this.props.state.euro}</td>
//             <td>{this.state.pln}</td>
//         </tr>
//     }
// }
// class SingleTransaction extends Component {
//     const
//
// render (){
//     return null;
// }
//
// }


class App extends Component {
    render() {
        return <>
            <CurrencyConverter/>
            {/*<AllTransactions/>*/}
            {/*<SingleTransaction/>*/}
        </>
    }
}


ReactDOM.render( <App/>, document.getElementById( "app" ) );