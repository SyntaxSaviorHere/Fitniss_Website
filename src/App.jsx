import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/header/navbar/Navbar";
import Navigation from "./components/header/navbar/Navigation";
import { CartPriceContextProvider } from "./context/CartPriceContext";
import ProductsPage from "./Pages/ProductsPage";
import ProductPage from "./Pages/ProductPage";
import Footer from "./components/footer/Footer";
import BloggingPage from "./Pages/BloggingPage";
import BlogPage from "./Pages/BlogPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <CartProvider>
      <CartPriceContextProvider>
        <BrowserRouter>
          <Navbar />
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/*" element={<ProductPage />} />
            <Route path="/blog" element={<BloggingPage />} />
            <Route path="/blog/*" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartPriceContextProvider>
    </CartProvider>
  );
}

export default App;
