import { createSlice } from "@reduxjs/toolkit";
export const shoppingCart = createSlice({
  name: "shoppingCart",
  initialState: [],
  reducers: {
    addProduct: (state, { payload }) => {
      const ingredient = state.find((i) => i.id == payload.id);
      if (ingredient) {
        ingredient.cant = payload.cant;
      } else {
        state.push({ id: payload.id, cant: payload.cant });
      }
    },
    deleteProduct: (state, { payload }) => {
      const index = state.findIndex((i) => i.id == payload);
      state.splice(index, 1);
    },
    deleteAllProducts: (state) => {
      console.log(state);
      state.splice(0, state.length);
    },
  },
});
export const { addProduct, deleteAllProducts, deleteProduct } =
  shoppingCart.actions;

export default shoppingCart.reducer;
