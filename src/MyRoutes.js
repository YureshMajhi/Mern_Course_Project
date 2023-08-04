import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layouts from "./components/Layouts";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Register from "./pages/Register";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route path="products" element={<Products />} />
          <Route index element={<HomePage />} />
          <Route path="productdetails/:productId" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoutes;
