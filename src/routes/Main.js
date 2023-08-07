import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/bookSlice";
import { changeSearchIndex } from "../redux/bookSlice";
import Bookcard from "../components/Bookcard";
import MySocials from "../components/MySocials";

export default function Main() {
  const loading = useSelector((state) => state.book.loading);
  const gotError = useSelector((state) => state.book.gotError);
  const books = useSelector((state) => state.book.books);
  const searchTerm = useSelector((state) => state.book.searchTerm);
  const searchIndex = useSelector((state) => state.book.searchIndex);
  const dispatch = useDispatch();
  return (
    <main>
      <div className="mainTop">
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
        <MySocials/>
      </div>
      <div id="mainGrid">
        {loading
          ? "Loading..."
          : gotError
          ? "An error occured"
          : books.length > 0 ? books.map((element, key) => {
              return <Bookcard key={key} icerik={element} />;
            }) : "Make a search to view books"}
      </div>
    </main>
  );
}
