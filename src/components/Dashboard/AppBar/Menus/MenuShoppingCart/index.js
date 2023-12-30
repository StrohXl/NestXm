import { useSelector } from "react-redux";
import MenuGlobal from "../MenuGlobal";
import BadgeShoppingCart from "./Badge";
import MenuContentShopping from "./MenuContentShopping";

const MenuShoppingCart = () => {
  const openMenuShopping = useSelector(
    (state) => state.components.menuShopping
  );

  return (
    <>
      <BadgeShoppingCart />
      <MenuGlobal type={'shopping'} openMenu={openMenuShopping}>
        <MenuContentShopping />
      </MenuGlobal>
    </>
  );
};
export default MenuShoppingCart;
