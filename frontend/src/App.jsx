import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Home from "./pages/Home";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Cart />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
