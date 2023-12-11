import { useSelector } from "react-redux";

import { Avatar } from "@mui/material";

function stringAvatar(name) {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
const StringAvatar = ({ props }) => {
  const user = useSelector((state) => state.user.user);
  return (
    <Avatar
      sx={props}
      style={{
        textTransform: "uppercase",
      }}
      {...stringAvatar(!user ? "" : `${user.firstName} ${user.lastName}`)}
    />
  );
};
export default StringAvatar;
