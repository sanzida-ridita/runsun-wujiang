import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Collection from "./pages/collection";
import Products from "./pages/products";
import Sustainability from "./pages/sustainability";
 import Contacts from "./pages/contact";
import Navbar from "./components/Navbar";   // <- match file name case
import Footer from "./components/Footer";   // <- match file name case
import ColorCard from "./pages/colorcard";
 
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collection />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/color-cards" element={<ColorCard />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
      <Footer />
    </Router>
  );
}
