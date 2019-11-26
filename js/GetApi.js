import React, {Component} from "react";

class GetApi extends Component{
    constructor(props) {
        super(props);
        this.state = {
            currencies: [],
            eur: 0,
            pln: 0
        }
    }
    
    componentDidMount() {
        fetch("https://api.exchangerate-api.com/v4/latest/EUR" ).then(r => r.json())
            .then(data => {
                this.setState({pln: data.rates.EUR});
                this.props.setEuro(data.rates.EUR);
            })
        fetch("https://api.exchangerate-api.com/v4/latest/PLN").then(r => r.json())
            .then(data => {
                this.setState({eur: data.rates.PLN});
                this.props.setPln(data.rates.PLN);
            })
      }
    
    
    
    render() {
       
        return <>
        <div>xxxx{this.state.eur}</div>
            <div>{this.state.pln}</div>
        </>
    }
}
export default GetApi;

