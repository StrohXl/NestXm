import { createSlice } from "@reduxjs/toolkit";
export const dataUser = createSlice({
  name: "user",
  initialState: {
    user: [],
  },
  reducers: {
    getUser: (state, actions) => {
      state.user = actions.payload;
    },
  },
});
export const { getUser } = dataUser.actions;

export default dataUser.reducer;
