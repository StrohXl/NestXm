import { updateImage } from "@/app/store/features/formIngredient";
import { getOneIngredient } from "@/services/ingredients";
async function GetIngredient(idQuery, router, dispatch, setValue) {
  const data = await getOneIngredient(dispatch, idQuery);
  if (!data) {
    router.push("/ingredients");
  } else {
    setValue("name", data.name);
    setValue("description", data.description);
    setValue("price", data.price);
    dispatch(updateImage(data.imageUrl));
  }
}
export default GetIngredient;
