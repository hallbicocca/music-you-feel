import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/custom.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import NavbarMusicYouFeel from "./ui-components/Navbar";
import MainPage from "./pages/MainPage";
import ResultPage from "./pages/ResultsPage";

function App() {
  return (
    <Router>
      <NavbarMusicYouFeel />
      <Routes>
        <Route
          path='/'
          element={
            <Container
              fluid
              className='justify-content-center d-flex w-100 h-100'>
              <MainPage />{" "}
            </Container>
          }
        />

        <Route
          path='/result/:res'
          element={
            <Container
              fluid
              className='justify-content-center d-flex w-100 h-100'>
              <ResultPage />{" "}
            </Container>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
