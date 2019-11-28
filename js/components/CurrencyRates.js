import React, {Component} from "react";

class CurrencyRates extends Component {
    
    handleChange = (e)=>{
        this.props.setToCurrency(
            e.target.value
        )
    }
    
    componentDidMount() {
        this.props.setToCurrency('PLN')
    }
    
    render() {
        const {rates} = this.props;
        
        return <>
            <label>
                <select onChange={this.handleChange}>
                    <option>PLN
                    </option>
                    <option>EUR
                    </option>
                    
                </select>
            </label>
        </>
    }
}


export default CurrencyRates;