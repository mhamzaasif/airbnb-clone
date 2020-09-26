import React from "react";
import { Button } from "@material-ui/core";
import "./SearchPage.css";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 Stays, 26 August to 30 August, 2 guest</p>
        <h1> Stays nearby</h1>
        <Button variant="outlined"> Cancelation Facility </Button>
        <Button variant="outlined"> Type of Place </Button>
        <Button variant="outlined"> Price </Button>
        <Button variant="outlined"> Rooms and Beds </Button>
        <Button variant="outlined"> Other Filters </Button>
      </div>
    </div>
  );
}

export default SearchPage;
