import React, {Component} from "react";

class GetApi extends Component{
    constructor() {
        super();
        this.state = {
            currencies: []
        }
    }
    
    componentDidMount() {
        fetch("https://api.exchangerate-api.com/v4/latest/EUR").then(r => r.json())
            .then(data => {
                // let currencies = data.results.map(currency => {
                //     return <div>Euro rate</div>
                // })
                this.setState({currencies: data.results});
            })
        fetch("https://api.exchangerate-api.com/v4/latest/PLN").then(r => r.json())
            .then(data => {
                // let currencies = data.results.map(currency => {
                //     return <div>Euro rate</div>
                // })
                this.setState({currencies: data.results});
            })
        
    }
    
    
    render() {
        return <>

        </>
    }
}
export default GetApi;

