// import logo from './logo.svg';
import React from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import GalleryApp from "./Gallery";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
    <Route path='/' component={Home} />
    <Route path='/gallery' component={GalleryApp} />

    </BrowserRouter>
  );
}

export default App;
