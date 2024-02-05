import React from "react";
import { useSelector } from "react-redux";
import Bookcard from "../components/Bookcard";
import MySocials from "../components/MySocials";

export default function Favorites() {
  const yourFavorites = useSelector((state) => state.book.favoriteBooks);

  return (
    <main>
        <div className="mainTop">
            <MySocials/>
        </div>
      <div className="mainGrid">
        {
            yourFavorites.length > 0 ? yourFavorites.map((item, key) => {
                return <Bookcard icerik={item} key={key} />;
              }) : "You don't have any favorites yet"
        }
      </div>
    </main>
  );
}
