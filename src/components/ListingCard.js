import React, { useState } from "react";

function ListingCard({listing, onDelete}) {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited)
  }

  const handleDelete = () => {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
      .then(() => {
    onDelete(listing.di)
      })
  .catch((e)=> console.error("Error deleting", e))
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={"https://via.placeholder.com/300x300"} alt={"description"} />
      </div>
      <div className="details">
          <button className="emoji-button favorite active" onClick={toggleFavorite}> {isFavorited ? "★": "☆"} </button>
        <strong>{"description"}</strong>
        <span> · {"location"}</span>
        <button className="emoji-button delete" onClick={handleDelete} >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
