import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes,
} from "react-router-dom";
import {
  Landing,
  About,
  Rules,
  FAQ,
  Contact,
  SignUp,
  Login,
} from "./components/Pages";
// import {Protecte}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/home" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
