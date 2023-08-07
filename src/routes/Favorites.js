import React from "react";
import { useSelector } from "react-redux";
import Bookcard from "../components/Bookcard";

export default function Favorites() {
  const yourFavorites = useSelector((state) => state.book.favoriteBooks);

  return (
    <main>
      <div className="mainGrid">
        {yourFavorites.map((item) => {
          return <Bookcard icerik={item} />;
        })}
      </div>
    </main>
  );
}
