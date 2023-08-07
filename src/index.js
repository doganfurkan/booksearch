import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Main from "./routes/Main";
import Book from "./routes/Book";
import Favorites from "./routes/Favorites";
import About from "./routes/About";
import Errorpage from "./routes/Errorpage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage/>,
    children: [
      {
        index:true,
        element:<Main/>
      },
      {
        path:"/favorites",
        element: <Favorites/>
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/book/:bookId",
        element: <Book/>
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
