import dataUser from "@/app/store/features/dataUser";
import { configureStore } from "@reduxjs/toolkit";

import alertSlice from "./features/alertSlice";
import formIngredient from "./features/formIngredient";
import openComponents from "./features/openComponents";
import openDrawer from "./features/openDrawer";
import propertyButton from "./features/propertyButtonSlice";
import shoppingCart from "./features/shoppingCart";

export default configureStore({
  reducer: {
    user: dataUser,
    alert: alertSlice,
    button: propertyButton,
    drawer: openDrawer,
    components: openComponents,
    ingredient: formIngredient,
    shoppingCart: shoppingCart,
  },
});
