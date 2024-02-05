import React, { useEffect } from "react";
import MySocials from "../components/MySocials";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/bookSlice";
import { fetchDetail } from "../redux/bookSlice";
import { useParams } from "react-router-dom";

export default function Book() {
  const thisBook = useSelector((state) => state.book.detailBook);
  const detailLoading = useSelector((state) => state.book.detailLoading);
  const yourFavorites = useSelector((state) => state.book.favoriteBooks);
  const dispatch = useDispatch();
  const {bookId} = useParams();

  useEffect(() => {
    dispatch(fetchDetail(bookId))
  },[bookId, dispatch])

  return (
    <main>
      <div className="mainTop">
        <MySocials />
      </div>
      <div className="mainGrid">
        {detailLoading ? (
          "Loading..."
        ) : (
          <div id="bookDiv">
            <div id="bookImage">
              {thisBook.volumeInfo.imageLinks ? (
                <img src={thisBook.volumeInfo.imageLinks.thumbnail} alt="" />
              ) : (
                <div id="noImage">No Image</div>
              )}
            </div>
            <div id="bookDetails">
              <div id="titleAndAuthor">
                <h1>
                  {thisBook.volumeInfo.title ? thisBook.volumeInfo.title : "No Title"}
                  {thisBook.volumeInfo.subtitle ? (
                    <span>: {thisBook.volumeInfo.subtitle}</span>
                  ) : (
                    ""
                  )}
                </h1>
                <h2>
                  {thisBook.volumeInfo.authors ? thisBook.volumeInfo.authors.map((item, key) => (
                    <span key={key}>{item}</span>
                  )) : "No Author"}
                </h2>
              </div>
              <div id="bookInfos">
                <span className="secondary">
                  {thisBook.volumeInfo.pageCount ? thisBook.volumeInfo.pageCount : "Unknown"} pages
                </span>
                <span className="secondary">
                  Language: {thisBook.volumeInfo.language ? thisBook.volumeInfo.language.toUpperCase() : "Unknown"}
                </span>
              </div>
              {thisBook.volumeInfo.description ? (
                <div dangerouslySetInnerHTML={{__html: thisBook.volumeInfo.description}}></div>
              ) : (
                <p id="noDesc">No description</p>
              )}
              <div id="bookButtons">
                <a
                  href={thisBook.volumeInfo.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary"
                >
                  Preview
                </a>
                <button
                  className={
                    yourFavorites.find((item) => item.id === thisBook.id)
                      ? "active"
                      : ""
                  }
                  onClick={(e) => {
                    yourFavorites.find((item) => item.id === thisBook.id)
                      ? dispatch(removeFavorite(thisBook))
                      : dispatch(addFavorite(thisBook));
                  }}
                  title="Add to your favorites"
                >
                  <img src="../assets/favoriteIcon.svg" alt="favorite" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
