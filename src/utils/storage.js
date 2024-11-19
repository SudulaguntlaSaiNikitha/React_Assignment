// src/utils/storage.js
export const getCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }));
  };
  
  export const saveCart = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  