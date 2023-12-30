"use client";
import {
  updateAnchorEl,
  updateMenuShopping,
} from "@/app/store/features/openComponents";
import { ShoppingCart } from "@mui/icons-material";
import { Avatar, Badge, styled } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
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
      color="info"
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
