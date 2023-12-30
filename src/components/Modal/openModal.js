import { updateModal } from "@/app/store/features/openComponents";
const openModal = (dispatch) => {
  dispatch(updateModal(true));
};
export default openModal;
