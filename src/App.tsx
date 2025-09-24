import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Collection from "./pages/collection";
import Products from "./pages/products";
import Sustainability from "./pages/sustainability";
import Colorcards from "./pages/colorcard";
import Contacts from "./pages/contacts";
import Navbar from "./components/Navbar";   // <- match file name case
import Footer from "./components/Footer";   // <- match file name case

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collection />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/colorcards" element={<Colorcards />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
}
