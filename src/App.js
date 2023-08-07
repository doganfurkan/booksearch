import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {Outlet} from "react-router-dom"
import { useDispatch } from "react-redux";
import { addFavorite, setLocalStoragePermission } from "./redux/bookSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if(localStorage.getItem("favoriteBooks"))JSON.parse(localStorage.getItem("favoriteBooks")).map(item => dispatch(addFavorite(item)))
    if(localStorage.getItem("favoriteBooks"))dispatch(setLocalStoragePermission(true))
  })

  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
