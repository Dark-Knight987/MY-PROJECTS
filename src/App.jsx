import React, { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Add_Task from "./components/Add_Task";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";

const App = () => {
  return(
    <>
    <Header/>
    <Tasks/>
    <Footer/>
    </>
  )
}

export default App;