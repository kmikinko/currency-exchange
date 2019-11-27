import React, {Component} from "react";

class CurrencyRates extends Component {
    
    handleChange = (e)=>{
        this.props.setToCurrency(
            e.target.value
        )
    }
    
    render() {
        const {rates} = this.props;
        
        return <>
            <label>To:
                {/*<CurrencyValue setPln={this.setPln} setEuro={this.setEuro}/>*/}
                <select onChange={this.handleChange}>
                    <option>EUR
                    </option>
                    <option>PLN
                    </option>
                </select>
            </label>
        </>
    }
}


export default CurrencyRates;