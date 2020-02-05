import React from "react";
import LLLogo from "./assets/LL_Logo_Black.png";
import MapContainer from "./components/map/map.jsx";
import List from "./components/list/list.jsx";
import Airtable from "airtable";
import getLocation from './utils/location';
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

      const date = new Date();
      const weekday = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";
  
      const today = weekday[date.getDay()];
      const time = `${date.getHours()}:${date.getMinutes()}`;

      this.setState({
        time_day: {day: today, hour:time}
      })
  }
  render() {
    const { records, time_day} = this.state;
 
    console.log(getLocation);
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
              <MapContainer />
              <List results={records} today={time_day} />
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
