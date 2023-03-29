import { Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation';
import Rating from './components/Rating';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Hardwood from './pages/Hardwood';
import Laminate from './pages/Laminate';
import Vinyl from './pages/Vinyl';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import './styles/App.css';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Rating />
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/products/hardwood" element={<Hardwood />}/>
          <Route path="/products/laminate" element={<Laminate />}/>
          <Route path="/products/vinyl" element={<Vinyl />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/gallery" element={<Gallery />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;