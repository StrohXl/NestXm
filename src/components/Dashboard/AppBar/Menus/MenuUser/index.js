import { useSelector } from "react-redux";

import MenuGlobal from "../MenuGlobal";
import IconMenuUser from "./IconMenuUser";
import MenuContentUser from "./MenuContentUser";

const MenuUser = () => {
  const openMenuUser = useSelector((state) => state.components.menuUser);
  return (
    <>
      <IconMenuUser />
      <MenuGlobal openMenu={openMenuUser}>
        <MenuContentUser />
      </MenuGlobal>
    </>
  );
};
export default MenuUser;
