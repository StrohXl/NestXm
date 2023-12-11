import { createSlice } from "@reduxjs/toolkit";
export const openComponents = createSlice({
  name: "user",
  initialState: {
    openBackdrop: true,
  },
  reducers: {
    updateBackdrop(state, { payload }) {
      state.openBackdrop = payload;
    },
  },
});
export const { updateBackdrop } = openComponents.actions;

export default openComponents.reducer;
