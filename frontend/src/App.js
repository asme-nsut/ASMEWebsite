import "./App.css";
import Home from "./components/home/home";
import About from "./components/about/about";
import Gallery from "./components/gallery/gallery";
import Nav from "./components/home/navbar";
import Footer from "./components/home/footer";
import Contact from "./components/contact/contact";
import Events from "./components/events/event"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/competitions" element={<Events></Events>}></Route>
          <Route path="/gallery" element={<Gallery></Gallery>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;