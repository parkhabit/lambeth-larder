import React, {Component} from "react";
import Card from "../card/card.jsx";
import Switch from 'react-switch';
import placeholder from "../../assets/emergency-food.png"
import results from "./results";
import "./list.css";

class List extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
   
  handleChange(checked) {
    this.setState({ checked });
  }
 
  render() {
      // const results = null;
    return (
      <div className="list-container">
        <div className="list-heading-container">
          <h3 className="title">Find a foodbank</h3>
  
          <label>
            <span>See advice centers</span>
            <Switch onChange={this.handleChange} checked={this.state.checked} uncheckedIcon={false} checkedIcon={false} onColor='#E87613' offColor='#dddddd' />
          </label>
          
        </div>
        <form className='list-form'>
          <label>Town, city, or postcode</label>
          <div>
            <input />
            <button type="submit">Search</button>
          </div>
        </form>
  
        {!results && <img src={placeholder} alt="placeholder img" />}
  
        {results && results.map(result => <Card data={result} />)}
      </div>
    );
  }


}

export default List;
