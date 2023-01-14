import "./App.css";
import Home from "./components/home/home";
import About from "./components/about/about";
import Gallery from "./components/gallery/gallery";
import Nav from "./components/home/navbar";
import Footer from "./components/home/footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/gallery" element={<Gallery></Gallery>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;