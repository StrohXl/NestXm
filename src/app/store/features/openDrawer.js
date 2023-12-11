import { createSlice } from "@reduxjs/toolkit";
export const openDrawer = createSlice({
  name: "user",
  initialState: {
    openDrawer: false,
    openDrawerMobile: false,
  },
  reducers: {
    updatedDrawer(state, { payload }) {
      state.openDrawer = payload;
    },
    updatedDrawerMobile(state, { payload }) {
      state.openDrawerMobile = payload;
    },
  },
});
export const { updatedDrawer, updatedDrawerMobile } = openDrawer.actions;

export default openDrawer.reducer;
