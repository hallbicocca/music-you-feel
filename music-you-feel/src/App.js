import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/custom.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarMusicYouFeel from "./ui-components/Navbar";

function App() {
  return (
    <Router>
      <NavbarMusicYouFeel />
      <Routes>
        <Route path='/' element={<> </>} />
      </Routes>
    </Router>
  );
}

export default App;
