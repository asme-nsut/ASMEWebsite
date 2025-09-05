import "./App.css";
import Home from "./components/home/home";
import About from "./components/about/about";
import Gallery from "./components/gallery/gallery";
import Nav from "./components/home/navbar";
import Footer from "./components/home/footer";
import Contact from "./components/contact/contact";
import Events from "./components/events/event";
import Alumni from "./components/alumni/alumni";
import Competitions from "./components/competitions/competitions";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/competitions" element={<Competitions />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
