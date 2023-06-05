import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Views/Home";
import Meditations from "./Components/Views/Meditations";
import Login from "./Components/Views/Login";
import PlayList from "./Components/Views/PlayList";
import DateContextProvider from "./Context/DateContext";
import Signup from "./Components/Views/Signup";
import Favorite from "./Components/Views/Favorite";
import React, { useState } from "react";
import Profile from "./Components/Views/Profile";
import UploadMeditation from "./Components/Views/UploadMeditation";

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
            <Route path="/profile" element={<Profile />} />
            <Route path="/playList" element={<PlayList />} />
            <Route path="/favorite" element={<Favorite />} />
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
          </Routes>
          <Login handleLogin={handleLogin} />
        </DateContextProvider>
      )}
    </div>
  );
}

export default App;
