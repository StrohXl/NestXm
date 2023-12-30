import { updateImage } from "@/app/store/features/formIngredient";

const cancelImage = (event, dispatch) => {
  event.stopPropagation();
  dispatch(updateImage(null));
};
export default cancelImage;
