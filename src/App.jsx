import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./components/CartContext";
import Footer from "./components/Footer";
import Opening from "./components/Opening";


const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="/products" element={<ItemListContainer />} />
        <Route path="/category/:idCategory" element={<ItemListContainer />} />
        <Route path="/item/:idItem" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;
