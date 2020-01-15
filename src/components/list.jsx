import React from "react";
import Card from "./card.jsx";
import placeholder from "../assets/emergency-food.png";
import "./list.css";

function List() {
  const results = [
    {
      title: "meow",
      description: "some words",
      miles: 4.5,
      open: false,
      hours: {
        mon: "12:00",
        tue: "2pm",
        wed: "9am"
      },
      voucherRequired: false,
      town: "Bermondsey",
      address: "address",
      phone: "07490388078",
      email: "ememe@gmail.clom",
      website: "www.httks,sks.com"
    },
    {
      title: "Manna Center",
      description: "some words",
      miles: 4.5,
      open: false,
      hours: {
        mon: "12:00",
        tue: "2pm",
        wed: "9am"
      },
      voucherRequired: false,
      town: "Bermondsey",
      address: "address",
      phone: "07490388078",
      email: "ememe@gmail.clom",
      website: "www.httks,sks.com"
    },
    {
      title: "Another place",
      description: "some words",
      miles: 4.5,
      open: false,
      hours: {
        mon: "12:00",
        tue: "2pm",
        wed: "9am"
      },
      voucherRequired: false,
      town: "Bermondsey",
      address: "address",
      phone: "07490388078",
      email: "ememe@gmail.clom",
      website: "www.httks,sks.com"
    }
  ];

  // const results = null;
  return (
    <div className="list-container">
      <h3>Find a foodbank</h3>
      <p>See advice centers</p>

      <form>
        <label>Town, city, or postcode</label>
        <input></input>
        <button type="submit">Search</button>
      </form>
      {!results && <img src={placeholder} alt="placeholder img" />}
      {results && results.map(result => <Card data={result} />)}
    </div>
  );
}

export default List;
