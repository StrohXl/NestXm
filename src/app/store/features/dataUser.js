import { createSlice } from "@reduxjs/toolkit";
export const dataUser = createSlice({
  name: "user",
  initialState: {
    user: [],
    userIngredient: [],
    userSolicitudes: [],
    table: {
      length: 0,
    },
  },
  reducers: {
    getUser: (state, actions) => {
      state.user = actions.payload;
    },
    updatedUserIngredient(state, { payload }) {
      state.userIngredient = payload;
    },
    updatedUserSolicitudes(state, { payload }) {
      state.userSolicitudes = payload;
    },
    updateTableLength(state, { payload }) {
      state.table.length = payload;
    },
  },
});
export const {
  getUser,
  updatedUserIngredient,
  updateTableLength,
  updateTablePage,
  updatedUserSolicitudes,
} = dataUser.actions;

export default dataUser.reducer;
