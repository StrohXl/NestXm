import { updateImage } from "@/app/store/features/formIngredient";
import {
  updateModal,
  updateModalBuy,
} from "@/app/store/features/openComponents";
const closeModal = (dispatch) => {
  dispatch(updateModal(false));
  dispatch(updateModalBuy(false));
  dispatch(updateImage(null));
};
export default closeModal;
