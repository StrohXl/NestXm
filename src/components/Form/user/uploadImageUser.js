import { getUser } from "@/app/store/features/dataUser";
import { updateLoading1 } from "@/app/store/features/propertyButtonSlice";
import closeModal from "@/components/Modal/closeModal";
import { FindOne, Update } from "@/services/user";
import { useSelector } from "react-redux";

const UploadImageUser = async (dispatch, image) => {
  const form = new FormData();
  form.append("image", image);
  dispatch(updateLoading1(true));
  const res = await Update(dispatch, form);
  dispatch(updateLoading1(false));
  if (res) {
    FindOne(dispatch);
    closeModal(dispatch);
  }
};
export default UploadImageUser;
