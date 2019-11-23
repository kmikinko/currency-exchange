import React, {Component} from "react";
import ReactDOM from "react-dom";

let valuesToCalculate = [
    {from: "EUR", to: "USD", rate: 1.1226, value: 200},
    {from: "PLN", to: "USD", rate: 3.88, value: 200},
    {from: "PLN", to: "EUR", rate: 4.33, value: 200},
];

class CurrencyConverter extends Component {
    render() {
        return (
            <section>
                <div>EURO RATE: 4.30 PLN</div>
                <form>
                    <label>EUR
                        <input type='text' name='euro'></input>
                    </label>
                    <span>=</span>
                    <label>PLN
                        <input type='text' name='pln'></input>
                    </label>
                </form>
            </section>
        )
    }
}

class App extends Component {
    render() {
        return <CurrencyConverter/>
    }
}


ReactDOM.render( <App/>, document.getElementById( "app" ) );