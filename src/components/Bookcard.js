import React from "react";
import {Link} from "react-router-dom"

export default function Bookcard({ icerik }) {
  return (
    <div className="bookCard">
      {icerik.volumeInfo.imageLinks ? (
        <img
          src={icerik.volumeInfo.imageLinks.thumbnail}
          alt="#"
          height="200px"
        />
      ) : (
        <div className="noImage">No Image</div>
      )}
      <div className="bookDetails">
        <div className="bookName">
          <h2>
            {icerik.volumeInfo.title}
            {icerik.volumeInfo.subtitle
              ? `: ${icerik.volumeInfo.subtitle}`
              : ""}
          </h2>
          <button>
            <img src="./assets/favoriteIcon.svg" alt="favorite" />
          </button>
        </div>
        <span className="authorName">
          {icerik.volumeInfo.authors
            ? icerik.volumeInfo.authors.map((yazar, key) => (
                <span key={key}>{yazar}</span>
              ))
            : "No Author"}
        </span>
      </div>
      <div className="bookButtons">
        <a
          className="secondary"
          href={icerik.volumeInfo.previewLink}
          target="_blank"
          rel="noreferrer"
        >
          Preview
        </a>
        <Link className="primary" to={`./book/${icerik.id}`}>See Details</Link>
      </div>
    </div>
  );
}
