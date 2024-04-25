import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isProductExist = state.products.some(
        (p) => p.id === action.payload.id
      );
      if (!isProductExist) {
        state.products.push(action.payload);
        return;
      }
      alert("Alredy added to the Cart   ");
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { addToCart, removeFromCart } = productSlice.actions;

export default productSlice.reducer;
