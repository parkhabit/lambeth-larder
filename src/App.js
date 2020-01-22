import React from "react";
import LLLogo from "./assets/LL_Logo_Black.png";
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
    const { records } = this.state;
    return (
      <div className="App">
        <header className="navbar">
          <ul>
            <a href="http://www.lambethlarder.org/">
              <img src={LLLogo} alt="lambeth larder icon" className="ll_logo" />
            </a>
          </ul>
          <ul className='navLinksContainer'>
            <li>
              <a  className='linkItem' href="http://www.lambethlarder.org/">Home</a>
            </li>
            <li>
              <a href="http://www.lambethlarder.org/emergency-food.html">
                Emergency Food
              </a>
            </li>
            <li>
              <a href="http://www.lambethlarder.org/advice--support.html">
                Advice & support
              </a>
            </li>
            <li>
              <a href="http://www.lambethlarder.org/money-saving-ideas.html">
                Money saving ideas
              </a>
            </li>
            <li>
              <a href="http://www.lambethlarder.org/mental-health.html">
                Mental health
              </a>
            </li>
            <li>
              <a href="http://www.lambethlarder.org/food-growing.html">
                Food Growing
              </a>
            </li>
            <li>
              <a href="http://www.lambethlarder.org/blog">Blog</a>
            </li>
            <li>
              <a href="http://www.lambethlarder.org/about-us.html">About us</a>
            </li>
          </ul>
        </header>
        <div className="hero" />

        <main>
          {this.state.records.length > 0 ? (
            <>
              <Map />
              <List results={records} />
            </>
          ) : (
            <div>Loading...</div>
          )}
        </main>
      </div>
    );
  }
}

export default App;
