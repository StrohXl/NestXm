import { createSlice } from "@reduxjs/toolkit";
export const openComponents = createSlice({
  name: "user",
  initialState: {
    openBackdrop: true,
    openModal: false,
    menuShopping: null,
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
    updateMenuShopping(state, { payload }) {
      state.menuShopping = payload;
    },
    updateMenuUser(state, { payload }) {
      state.menuUser = payload;
    },
    updateAnchorEl(state, { payload }) {
      state.anchorEl = payload;
    },
  },
});
export const {
  updateBackdrop,
  updateModal,
  updateMenuUser,
  updateMenuShopping,
  updateAnchorEl,
} = openComponents.actions;

export default openComponents.reducer;
