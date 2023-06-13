import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Views/Home";
import Meditations from "./Components/Views/Meditations";
import Login from "./Components/Views/Login";
import DateContextProvider from "./Context/DateContext";
import Signup from "./Components/Views/Signup";
import Favorite from "./Components/Views/Favorite";
import React, { useState } from "react";
import UploadMeditation from "./Components/Views/UploadMeditation";
import Journal from "./Components/Views/Journal";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const handleLogin = () => {
    setIsAuthorized(true);
  };

  const handleLogout = () => {
    setIsAuthorized(false);
  };
  return (
    <div className="App">
      {isAuthorized ? (
        <DateContextProvider>
          <Header handleLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/guided" element={<Meditations />} />
            <Route exact path="/Uploadform" element={<UploadMeditation />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/favorite" element={<Favorite />} />
            {/* <Route
              path="/login"
              element={<Login handleLogin={handleLogin} />}
            /> */}
            <Route
              path="*"
              element={<p>I don't know this page. There was a 404 error</p>}
            />
          </Routes>
        </DateContextProvider>
      ) : (
        <DateContextProvider>
          <Routes>
            <Route
              path="/signup"
              element={<Signup handleLogin={handleLogin} />}
            />
            <Route path="/" element={<Login handleLogin={handleLogin} />} />
          </Routes>
        </DateContextProvider>
      )}
    </div>
  );
}

export default App;
