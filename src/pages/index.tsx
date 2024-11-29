import { Route, Routes } from "react-router";

import Home from "./home";
import Cart from "./cart";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
