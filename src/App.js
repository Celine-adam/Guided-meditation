import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Components/Views/Home";
import OnlineGuidedSessions from "./Components/Views/OnlineGuidedSessions";
import Login from "./Components/Views/Login";
import PlayList from "./Components/Views/PlayList";

import DateContextProvider from "./Context/DateContext";

function App() {
  return (
    <div className="App">
      <DateContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/guided" element={<OnlineGuidedSessions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/playList" element={<PlayList />} />

          <Route
            path="*"
            element={<p>I don't know this page. There was a 404 error</p>}
          />
        </Routes>
      </DateContextProvider>
    </div>
  );
}

export default App;
