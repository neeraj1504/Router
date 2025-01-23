import "./App.css";
import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Photo11 from "./Components/Photo11";
import Photo2 from "./Components/Photo2";
import Photo3 from "./Components/Photo3";
import Photo4 from "./Components/Photo4";
import Hooks from "./Components/Hooks";
const App = () => {
  return (
    <div className="flex flex-col">
      <nav className="justify-center items-center text-center ">
        <ul>
          <li>
            <NavLink to="/Photo11">First</NavLink>
          </li>
          <li>
            <NavLink to="/Photo2">Second</NavLink>
          </li>
          <li>
            <NavLink to="/Photo3">Third</NavLink>
          </li>
          <li>
            <NavLink to="/Photo4">Fourth</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/photo11" element={<Photo11 />}></Route>
        <Route path="/photo2" element={<Photo2 />}></Route>
        <Route path="/photo3" element={<Photo3 />}></Route>
        <Route path="/photo4" element={<Photo4 />}></Route>
      </Routes>
    <div>
      <Hooks/>
    </div>
    </div>
  );
};

export default App;
