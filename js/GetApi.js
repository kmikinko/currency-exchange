import React, {Component} from "react";




class GetApi extends Component{
    constructor() {
        super();
        this.state = {
            currencies: []
        }
    }
    
    componentDidMount() {
        fetch("https://api.exchangerate-api.com/v4/latest/USD").then(r => r.json())
            .then(results => {
                this.setState({
                    data: data
                });
            });
    }
    
    
    render() {
        return <>

        </>
    }
}
export default GetApi;

