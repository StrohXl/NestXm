import { updateErrorImage } from "@/app/store/features/formIngredient";
import {
  updateDisabled1,
  updateLoading1,
} from "@/app/store/features/propertyButtonSlice";
import { createIngredient, updateIngredient } from "@/services/ingredients";

const onSubmitIngredient = async (
  form,
  dispatch,
  image,
  type,
  router,
  onChangeInImage,
  idIngredient,
) => {
  dispatch(updateErrorImage(false));
  const formData = new FormData();
  formData.append("name", form.name);
  if (form.description) {
    formData.append("description", form.description);
  }
  formData.append("price", form.price);
  if (!image) {
    dispatch(updateErrorImage(true));
  } else {
    if (type == "create") {
      formData.append("image", image);
      const data = formData;
      dispatch(updateLoading1(true));
      const res = await createIngredient(dispatch, data);
      dispatch(updateLoading1(false));
      if (res === true) {
        dispatch(updateDisabled1(true));
        setTimeout(() => {
          router.push("/ingredients");
          dispatch(updateDisabled1(false));
        }, 1000);
      }
    } else {
      if (onChangeInImage == true) {
        formData.append("image", image);
      }
      const data = formData;
      dispatch(updateLoading1(true));
      const res = await updateIngredient(dispatch, data, idIngredient);
      dispatch(updateLoading1(false));
      if (res === true) {
        dispatch(updateDisabled1(true));
        setTimeout(() => {
          router.push("/ingredients");
          dispatch(updateDisabled1(false));
        }, 1000);
      }
    }
  }
};
export default onSubmitIngredient;
