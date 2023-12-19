import { createSlice } from "@reduxjs/toolkit";
export const formIngredient = createSlice({
  name: "formIngredient",
  initialState: {
    ingredient: {},
    image: "",
    idIngredient: null,
    errorImage: false,
    onChangeInImage: false,
  },
  reducers: {
    updateIngredient(state, { payload }) {
      state.ingredient = payload;
    },
    updateImage(state, { payload }) {
      state.image = payload;
    },
    updateIdIngredient(state, { payload }) {
      state.idIngredient = payload;
    },
    updateErrorImage(state, { payload }) {
      state.errorImage = payload;
    },
    updateOnChangeInImage(state, { payload }) {
      state.onChangeInImage = payload;
    },
  },
});
export const {
  updateIngredient,
  updateErrorImage,
  updateImage,
  updateIdIngredient,
  updateOnChangeInImage,
} = formIngredient.actions;

export default formIngredient.reducer;
