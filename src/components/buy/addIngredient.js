import { updateAlert } from "@/app/store/features/alertSlice";
import { addProduct } from "@/app/store/features/shoppingCart";
const AddIngredient = (dispatch, id, cant) => {
  dispatch(addProduct({ id, cant }));
  dispatch(
    updateAlert({
      open: true,
      children: "Se ha Agregado un ingrediente al carrito",
    }),
  );
};
export default AddIngredient;
