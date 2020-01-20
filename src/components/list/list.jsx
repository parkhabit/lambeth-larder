import React, {Component} from "react";
import Card from "../card/card.jsx";
import Switch from 'react-switch';
import placeholder from "../../assets/emergency-food.png"
// import results from "./results";
import "./list.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false, inputValue: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
   
  handleChange(checked) {
    this.setState({ checked });
  }

  handleInputChange(e) {
    this.setState({inputValue: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
  }
 
  render() {
    const {results} = this.props;
    console.log(results);
    return (
      <div className="list-container">
        <div className="list-heading-container">
          <h3 className="title">Find a foodbank</h3>
  
          <label>
            <span>See advice centers</span>
            <Switch onChange={this.handleChange} checked={this.state.checked} uncheckedIcon={false} checkedIcon={false} onColor='#E87613' offColor='#dddddd' />
          </label>
          
        </div>
        <form className='list-form' onSubmit={this.handleSubmit}>
          <label>Town, city, or postcode</label>
          <div>
            <input value={this.state.inputValue} onChange={this.handleInputChange}/>
            <button type="submit" onClick={this.handleSubmit}>Search</button>
          </div>
        </form>
  
        {!results && <img src={placeholder} alt="no results img" />}
  
        {results && results.map((result, index) => <Card data={result.fields} key={index} />)}
      </div>
    );
  }


}

export default List;
