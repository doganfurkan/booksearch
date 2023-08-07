import React from "react";
import MySocials from "../components/MySocials";
import { useSelector } from "react-redux";

export default function Book() {
  const thisBook = useSelector((state) => state.book.detailBook);
  const detailLoading = useSelector((state) => state.book.detailLoading);

  return (
    <main>
      <div className="mainTop">
        <MySocials />
      </div>
      <div className="mainGrid">
        {detailLoading ? (
          "Loading..."
        ) : (
          <>
            {thisBook.volumeInfo.imageLinks ? (
              <img src={thisBook.volumeInfo.imageLinks.thumbnail} alt="" />
            ) : (
              ""
            )}
            {thisBook.volumeInfo.title} <br />
            {thisBook.volumeInfo.subtitle} <br />
            {thisBook.volumeInfo.description} <br />
            {thisBook.volumeInfo.authors.map((item) => item)} <br />
            {thisBook.volumeInfo.pageCount} pages <br />
            {thisBook.volumeInfo.language} <br />
            <a
              href={thisBook.volumeInfo.previewLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Preview
            </a>
          </>
        )}
      </div>
    </main>
  );
}
