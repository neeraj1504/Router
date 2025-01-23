import React from "react";
import {  NavLink, Route, Routes } from "react-router-dom";
import Photo11 from "./Photo11";
import Photo2 from "./Photo2";
import Photo3 from "./Photo3";
import Photo4 from "./Photo4";
const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/Photo11" >first</NavLink>
          </li>
          <li>
            <NavLink to="/Photo2">second</NavLink>
          </li>
          <li>
            <NavLink to="/Photo3">third</NavLink>
          </li>
          <li>
            <NavLink to="/Photo4">fourth</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/photo11" element={<Photo11 />}></Route>
        <Route path="/photo2" element={<Photo2 />}></Route>
        <Route path="/photo3" element={<Photo3 />}></Route>
        <Route path="/photo4" element={<Photo4 />}></Route>
      </Routes>
    </div>
  );
};

export default Home;
