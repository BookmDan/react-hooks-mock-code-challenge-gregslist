import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import Search from "./Search"

function ListingsContainer() {
  const [listings, setListings] = useState([])
  const [sortedListings, setSortedListings] = useState([])

  useEffect(() => {
    fetchData()

    const sorted = [...listings].sort((a, b) => 
      a.location.localeCompare(b.location)
    )
    setSortedListings(sorted)
  }, [listings])

  const fetchData = () => {
    fetch('http://localhost:6001/listings')
      .then(r => r.json())
      .then(data => setListings(data))
      .catch(err => console.error("error fetching data", err))
  }

  const handleSearch = (term) => {
    const filteredListings = listings.filter(
      (listing) => listing.description.toLowerCase().includes(term.toLowerCase())
      )
      setListings(filteredListings)
  }
  const handleDelete = (listingId) => {
    const updatedListings = listings.filter((listing) => listing.id !== listingId)
    setListings(updatedListings)
  }
  // <Search onSearch = {handleSearch}/>
  return (
    <main>
     
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} onDelete={handleDelete} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
