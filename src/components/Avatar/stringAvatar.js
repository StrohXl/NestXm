import { useSelector } from "react-redux";

import { Avatar } from "@mui/material";

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: "#fff",
      color: "#9c27b0",
      fontSize: "28px",
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
const StringAvatar = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <Avatar
      style={{
        textTransform: "uppercase",
        width: "80px",
        height: "80px",
        border: "3px solid #9c27b0",
      }}
      {...stringAvatar(!user ? "" : `${user.firstName} ${user.lastName}`)}
    />
  );
};
export default StringAvatar;
