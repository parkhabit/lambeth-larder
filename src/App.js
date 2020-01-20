import React from "react";
import emergencyFood from "./assets/emergency-food.png";
import Map from "./components/map/map.jsx";
import List from "./components/list/list.jsx";
import Airtable from "airtable";
import "./App.css";
const base = new Airtable({ apiKey: "key1adK3zCJlksaUq" }).base(
  "appiS0nCpeGPbRrIK"
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: []
    };
  }
  componentDidMount() {
    base("Times and Venues")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        this.setState({ records });
        fetchNextPage();
      });
  }
  render() {
    const {records} = this.state;
    return (
      <div className="App">
        <header className="navbar">
          <ul>
            <img src={emergencyFood} alt="lambeth larder icon" />
          </ul>
          <ul>
            <li>Home</li>
            <li>Emergency Food</li>
            <li>Advice & support</li>
            <li>Money saving ideas</li>
            <li>Mental health</li>
            <li>Blog</li>
            <li>About us</li>
          </ul>
        </header>
        <div className="hero">Emergency Food</div>

        <main>
          {this.state.records.length > 0 ? (
            <>
              <Map />
              <List results={records}/>
            </>
          ) : (
            <div>
              Loading...
            </div>
          )}
        </main>
      </div>
    );
  }
}

export default App;
