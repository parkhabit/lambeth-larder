import React, { Component } from "react";
import Card from "../card/card.jsx";
import Switch from "react-switch";
import placeholder from "../../assets/emergency-food.png";
// import results from "./results";
import Airtable from "airtable";
import "./list.css";
const base = new Airtable({ apiKey: "key1adK3zCJlksaUq" }).base(
  "appiS0nCpeGPbRrIK"
);

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      inputValue: "",
      records: [],
      postcode: { isLoaded: null, isPostcodeValid: null }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentDidMount() {
    base("Times and Venues")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        this.setState({ records });
        fetchNextPage();
      });
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  handleInputChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { inputValue } = this.state;
    // need to check here that they're entering in the correct postcode or town
    fetch(`https://api.postcodes.io/postcodes/${inputValue}/validate`)
      .then(res => res.json())
      .then(
        result => {
          console.log(result)
          this.setState({
            postcode: { isLoaded: true, isPostcodeValid: result.result }
          });
        },
        error => {
          console.log(error);
          this.setState({
            postcode: { isLoaded: true, isPostcodeValid: false }
          });
        }
      );
  }

  render() {
    const {
      records,
      postcode: { isLoaded, isPostcodeValid }
    } = this.state;
    // console.log(records);
    return (
      <div className="list-container">
        <div className="list-heading-container">
          <h3 className="title">Find a foodbank</h3>

          <label>
            <span>See advice centers</span>
            <Switch
              onChange={this.handleChange}
              checked={this.state.checked}
              uncheckedIcon={false}
              checkedIcon={false}
              onColor="#E87613"
              offColor="#dddddd"
            />
          </label>
        </div>
        <form className="list-form" onSubmit={this.handleSubmit}>
          <label>Postcode</label>
          <div>
            <input
              value={this.state.inputValue}
              onChange={this.handleInputChange}
            />
            <button type="submit" onClick={this.handleSubmit}>
              Search
            </button>
          </div>
          {isLoaded && !isPostcodeValid && <div>We can't seem to find that postcode, please try again</div>}
        </form>

        {!records && <img src={placeholder} alt="no records img" />}

        {records &&
          records.map((result, index) => (
            <Card data={result.fields} key={index} />
          ))}
      </div>
    );
  }
}

export default List;
