import { updateImage } from "@/app/store/features/formIngredient";
import { updateModal } from "@/app/store/features/openComponents";
const closeModal = (dispatch) => {
  dispatch(updateModal(false));
  dispatch(updateImage(null));
};
export default closeModal;
