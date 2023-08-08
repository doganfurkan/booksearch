import { useEffect, useCallback } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite, setLocalStoragePermission } from "./redux/bookSlice";
import { fetchData, changeSearchTerm } from "./redux/bookSlice";

function App() {
  const dispatch = useDispatch();

  const watchScroll = useCallback(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100
        ? document.getElementById("goTop").classList.remove("hidden")
        : document.getElementById("goTop").classList.add("hidden");
    });
  }, []);

  useEffect(() => {
    if (localStorage.getItem("favoriteBooks"))
      JSON.parse(localStorage.getItem("favoriteBooks")).map((item) =>
        dispatch(addFavorite(item))
      );
    if (localStorage.getItem("favoriteBooks"))
      dispatch(setLocalStoragePermission(true));
    dispatch(fetchData([`nutuk`, 0]));
    dispatch(changeSearchTerm("nutuk"))
    watchScroll();
  });

  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <button
        id="goTop"
        className="hidden"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
              }}      >
        Go Top
      </button>
    </div>
  );
}

export default App;
