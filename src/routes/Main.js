import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/bookSlice";
import { changeSearchIndex } from "../redux/bookSlice";
import Bookcard from "../components/Bookcard";

export default function Main() {
  const loading = useSelector((state) => state.book.loading);
  const gotError = useSelector((state) => state.book.gotError);
  const books = useSelector((state) => state.book.books);
  const searchTerm = useSelector((state) => state.book.searchTerm);
  const searchIndex = useSelector((state) => state.book.searchIndex);
  const dispatch = useDispatch();
  return (
    <main>
      <div id="mainTop">
        <div id="pagination">
          <button
            disabled={searchIndex > 0 ? false : true}
            onClick={() => {
              dispatch(fetchData([searchTerm, searchIndex - 12]));
              dispatch(changeSearchIndex(searchIndex - 12));
            }}
          >
            Previous Page
          </button>
          <button
            disabled={books.length < 12 ? true : false}
            onClick={() => {
              dispatch(fetchData([searchTerm, searchIndex + 12]));
              dispatch(changeSearchIndex(searchIndex + 12));
            }}
          >
            Next Page
          </button>
        </div>
        <div id="mySocials">
          <a
            href="https://www.github.com/doganfurkan"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          <a
            href="https://www.instagram.com/1furkandogan1"
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram
          </a>
          <a
            href="https://www.linkedin.com/in/furkan-doğan"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
          <a
            href="https://www.frontendmentor.io/profile/doganfurkan"
            target="_blank"
            rel="noopener noreferrer"
          >
            frontendmentor
          </a>
        </div>
      </div>
      <div id="mainGrid">
        {loading
          ? "Loading..."
          : gotError
          ? "An error occured"
          : books.map((element, key) => {
              return <Bookcard key={key} icerik={element} />;
            })}
      </div>
    </main>
  );
}
