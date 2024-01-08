import { createSlice } from "@reduxjs/toolkit";
export const openComponents = createSlice({
  name: "user",
  initialState: {
    openBackdrop: true,
    openModal: false,
    openModalBuyProduct: false,
    menuShopping: null,
    menuMoreShopping: null,
    menuUser: null,
    anchorEl: null,
  },
  reducers: {
    updateBackdrop(state, { payload }) {
      state.openBackdrop = payload;
    },
    updateModal(state, { payload }) {
      state.openModal = payload;
    },
    updateModalBuy(state, { payload }) {
      state.openModalBuyProduct = payload;
    },
    updateMenuShopping(state, { payload }) {
      state.menuShopping = payload;
    },
    updateMenuUser(state, { payload }) {
      state.menuUser = payload;
    },
    updateMoreShopping(state, { payload }) {
      state.menuMoreShopping = payload;
    },
    updateAnchorEl(state, { payload }) {
      state.anchorEl = payload;
    },
  },
});
export const {
  updateBackdrop,
  updateModal,
  updateModalBuy,
  updateMenuUser,
  updateMenuShopping,
  updateMoreShopping,
  updateAnchorEl,
} = openComponents.actions;

export default openComponents.reducer;
