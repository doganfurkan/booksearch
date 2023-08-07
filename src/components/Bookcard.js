import React from "react";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom"
import { addFavorite, removeFavorite } from "../redux/bookSlice";
import { useSelector } from "react-redux";

export default function Bookcard({ icerik }) {
  const dispatch = useDispatch();
  const yourFavorites = useSelector((state) => state.book.favoriteBooks);

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
          <button className={yourFavorites.find(item => item.id === icerik.id) ? "active" : ""} onClick={(e) => {
            yourFavorites.find(item => item.id === icerik.id) ? dispatch(removeFavorite(icerik)) : dispatch(addFavorite(icerik))
          }}>
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
