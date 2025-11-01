import { createContext, useContext, useState, useEffect } from "react";


const CartContext = createContext()


export const CartProvider = ({children}) => {

const signedInUser = localStorage.getItem("SignedInUser"); // get stored email (string)
const cartKey = signedInUser ? `cart_${signedInUser}` : "cart_guest";

// load cart from storage
const [cartItems, setCartItems] = useState(() => {
  const stored = localStorage.getItem(cartKey);
  return stored ? JSON.parse(stored) : [];
});

// save cart to storage whenever it changes
useEffect(() => {
  localStorage.setItem(cartKey, JSON.stringify(cartItems));
}, [cartItems, cartKey]);

const clearCart = () => {
  setCartItems([]); 
};




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
        <CartContext.Provider value={{cartItems, addToCart, removeItem, updateQuantity, clearCart}} >{children}</CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);
