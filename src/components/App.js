import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import ListingForm from "./ListingForm";

function App() {
  const [listings, setListings] = useState([]);

  // useEffect(() => {
  //   fetchListings();
  // }, [])

  // const fetchListings = () => {
  //   // Fetch listings from the backend and update the state
  // };

  const addListing = (newListing) => {
    // Send a POST request to the backend to create a new listing
    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newListing),
    })
      .then((response) => response.json())
      .then((createdListing) => {
        // Add the new listing to the state
        setListings([...listings, createdListing]);
      })
      .catch((error) => console.error("Error creating a listing:", error));
  };

  return (
    <div className="app">
      <Header />
      <ListingsContainer />
      <ListingForm onAddListing={addListing} />
    </div>
  );
}

export default App;
