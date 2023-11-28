import { createSlice } from "@reduxjs/toolkit";
export const propertyButton = createSlice({
  name: "button",
  initialState: {
    loading1: false,
    loading2: false,
    loading3: false,
    disabled1: false,
    disabled2: false,
    disabled3: false,
  },
  reducers: {
    updateLoading1: (state, { payload }) => {
      state.loading1 = !state.loading1;
    },
    updateLoading2: (state, { payload }) => {
      state.loading2 = !state.loading2;
    },
    updateLoading3: (state, { payload }) => {
      state.loading3 = !state.loading3;
    },
    updateDisabled1: (state, { payload }) => {
      state.disabled1 = !state.disabled1;
    },
    updateDisabled2: (state, { payload }) => {
      state.disabled2 = !state.disabled2;
    },
    updateDisabled3: (state, { payload }) => {
      state.disabled3 = !state.disabled3;
    },
  },
});
export const {
  updateLoading1,
  updateDisabled1,
  updateDisabled2,
  updateDisabled3,
  updateLoading2,
  updateLoading3,
} = propertyButton.actions;

export default propertyButton.reducer;
