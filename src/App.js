import "./App.css";
import "./components/style.css";
import "./components/Responsive/Dresp.css";
import "./components/Responsive/Lresp.css";
import "./components/Responsive/Tresp.css";
import "./components/Responsive/Mresp.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
// import Spinner from "./components/Spinner";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/skill" element={<Skills/>}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          {/* <Route exact path="/spinner" element={<Spinner />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
