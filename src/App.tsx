import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home";
import SingIn from "./pages/signIn";
import SingUp from "./pages/signUp";
import "./scss/app.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SingIn />} />
        <Route path="/register" element={<SingUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
