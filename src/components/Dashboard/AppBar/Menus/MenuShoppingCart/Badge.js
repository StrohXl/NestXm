"use client";
import { useDispatch, useSelector } from "react-redux";

import {
  updateAnchorEl,
  updateMenuShopping,
} from "@/app/store/features/openComponents";
import { ShoppingCart } from "@mui/icons-material";
import { Avatar, Badge, styled } from "@mui/material";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: 2,
    top: 4,
  },
}));

const BadgeShoppingCart = () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const handleClick = (event) => {
    dispatch(updateMenuShopping(Boolean(event.currentTarget)));
    dispatch(updateAnchorEl(event.currentTarget));
  };
  return (
    <StyledBadge
      onClick={handleClick}
      badgeContent={shoppingCart.length}
      sx={{ ".MuiBadge-badge": { background: "#7b1fa2" } }}
      id="basic-button"
    >
      <Avatar
        sx={{
          background: "#fff",
          cursor: "pointer",
          height: { xs: 35, md: 37.5, "2xl": 40 },
          width: { xs: 35, md: 37.5, "2xl": 40 },
        }}
      >
        <ShoppingCart
          color="primary"
          sx={{
            fontSize: { xs: 20, md: 22.5, "2xl": 25 },
          }}
        />
      </Avatar>
    </StyledBadge>
  );
};
export default BadgeShoppingCart;
