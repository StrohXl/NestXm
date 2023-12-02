import dataUser from "@/app/store/features/dataUser";
import { configureStore } from "@reduxjs/toolkit";

import alertSlice from "./features/alertSlice";
import propertyButton from "./features/propertyButtonSlice";

export default configureStore({
  reducer: {
    user: dataUser,
    alert: alertSlice,
    button: propertyButton,
  },
});
