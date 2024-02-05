import React from "react";
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Artworks from "./pages/Artworks";
import Artists from "./pages/Artists";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
            errorElement: <Page404/>
        },
        {
            path: "/artists",
            element: <Artists/>,
        },
        {
            path: "/artworks",
            element: <Artworks/>,
        },

    ]);

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;