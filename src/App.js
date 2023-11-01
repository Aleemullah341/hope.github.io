import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";
import React, { useState } from "react";
import Alert from "./Components/Alert.js";
// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  let [mode, setMode] = useState("light");

  let [alert, setAlert] = useState(null);

  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#050316";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
        <div className="App">
          <Navbar
            name="TextUtils"
            home="Home"
            socialLinks="About"
            mode={mode}
            toggleMode={toggleMode}
          />
        </div>
        <Alert alert={alert} />
        {/* <Routes> */}
          {/* <Route path="/About" element= /> */}
          {/* {<About mode={mode}/>} */}
          {<TextForm
              heading="Enter the text below"
              mode={mode}
              alert={alert}
              showAlert={showAlert}
            />}
          			{/* <Route path="/TextForm" element= />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
