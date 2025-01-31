import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import "./styles/global.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
};

export default App;
