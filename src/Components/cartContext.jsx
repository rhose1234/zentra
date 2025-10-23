import { createContext, useContext, useState } from "react";


const CartContext = createContext()


export const CartProvider = ({children}) => {


const [cartItems, setCartItems] = useState([])

   const addToCart = (product, quantity = 1) => {
  setCartItems((prev) => {
    const existingItem = prev.find((item) => item.product.id === product.id);

    

    if (existingItem) {

      // If the product already exists, update its quantity
      return prev.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      // Otherwise, add it as a new product
      return [...prev, { product, quantity }];
    }
  });
};


const updateQuantity = (id, action) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.product.id === id) {
          let newQuantity = item.quantity;
          if (action === "increase") newQuantity += 1;
          if (action === "decrease" && newQuantity > 1) newQuantity -= 1;
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };
  
const removeItem = (id) => {
  setCartItems((prev) => prev.filter((item) => item.product.id !== id));
};

    return(
        <CartContext.Provider value={{cartItems, addToCart, removeItem, updateQuantity}} >{children}</CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);
