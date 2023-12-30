import { addProduct } from "@/app/store/features/shoppingCart";
import { updateAlert } from "@/app/store/features/alertSlice";
const AddIngredient = (dispatch, id, cant) => {
  dispatch(addProduct({ id, cant }));
  dispatch(
    updateAlert({
      open: true,
      children: "Se ha Agregado un ingrediente al carrito",
    })
  );
};
export default AddIngredient;
