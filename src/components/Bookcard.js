import React from "react";

export default function Bookcard() {
  return (
    <div className="bookCard">
      <img src="https://picsum.photos/148/210" alt="#" height="200px" />
      <div className="bookDetails">
        <div className="bookName">
          <h2>Book Name</h2>
          <button><img src="./assets/favoriteIcon.svg" alt="favorite" /></button>
        </div>
        <span className="authorName">Author Name</span>
      </div>
      <div className="bookButtons">
        <button className="secondary">Preview</button>
        <button className="primary">See Details</button>
      </div>
    </div>
  );
}
