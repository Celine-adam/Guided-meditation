import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Views/Home";
import Podcast from "./Components/Views/Podcast";
import Login from "./Components/Views/Login";
import DateContextProvider from "./Context/DateContext";
import Signup from "./Components/Views/Signup";
import Favorite from "./Components/Views/Favorite";
import React, { useState } from "react";
import UploadMeditation from "./Components/Views/UploadMeditation";
import Journal from "./Components/Views/Journal";
import CoverPage from "./Components/Views/CoverPage";

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
      <DateContextProvider>
        {isAuthorized ? (
          <>
            <Header handleLogout={handleLogout} />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/podcast" element={<Podcast />} />
              <Route path="/favorite" element={<Favorite />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/Uploadform" element={<UploadMeditation />} />
    
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<CoverPage />} />
            <Route
              path="/signup"
              element={<Signup handleLogin={handleLogin} />}
            />
            <Route
              path="/login"
              element={<Login handleLogin={handleLogin} />}
            />
          </Routes>
        )}
      </DateContextProvider>
    </div>
  );
}

export default App;
