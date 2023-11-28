import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    children: "",
    horizontal: "right",
    open: false,
    vertical: "bottom",
    type: "success",
    time: 3000,
  },
  reducers: {
    updateAlert(state, { payload }) {
      if (payload.children) {
        state.children = payload.children;
      }
      if (payload.horizontal) {
        state.horizontal = payload.horizontal;
      }
      if (payload.open) {
        state.open = true;
      }
      if (payload.vertical) {
        state.vertical = payload.vertical;
      }
      if (payload.type) {
        state.type = payload.type;
      }
      if (payload.time) {
        state.time = payload.time;
      }
    },
    closeAlert(state,{payload}){
        state.open = payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { updateAlert,closeAlert } = alertSlice.actions;

export default alertSlice.reducer;
