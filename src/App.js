import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  // const removeBodyClasses =()=> {
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-danger');
  // }

  const toggleMode = () => {
  
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")

      // changing title dynamically
      // setInterval(() => {

      //   document.title = "TextUtils IS AMAZING APP"
      // }, 2000);
      // setInterval(() => {

      //   document.title = "Install TextUtils now"
      // }, 1500);
    } else {

      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      // document.title = "TextUtils - Light Mode"
    }
  }

  // with color palete code for themes
  // const toggleMode = (cls) => {
  //   console.log(cls);
  //   removeBodyClasses();
  //   document.body.classList.add("bg-"+cls);
  //   if (mode === 'light') {
  //     setMode('dark')
  //     document.body.style.backgroundColor = '#042743';
  //     showAlert("Dark mode has been enabled", "success")

  //     // changing title dynamically
  //     // setInterval(() => {

  //     //   document.title = "TextUtils IS AMAZING APP"
  //     // }, 2000);
  //     // setInterval(() => {

  //     //   document.title = "Install TextUtils now"
  //     // }, 1500);
  //   } else {

  //     setMode('light')
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Light mode has been enabled", "success")
  //     // document.title = "TextUtils - Light Mode"
  //   }
  // }

  return (
    <>
      <Router>

        {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
        {/* <Navbar /> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Try TextUtils - Word counter, Character counter, Lowercase to Uppercase" mode={mode} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About mode={mode}  />} />

          </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
