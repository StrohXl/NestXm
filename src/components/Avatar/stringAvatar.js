import { useSelector } from "react-redux";

import { Avatar } from "@mui/material";

function stringAvatar(name) {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
const StringAvatar = ({ props, editUser }) => {
  const user = useSelector((state) => state.user.user);
  const image = useSelector((state) => state.ingredient.image);
  if (editUser) {
    if (image) {
      return (
        <Avatar
          src={URL.createObjectURL(image)}
          sx={props}
          style={{
            textTransform: "uppercase",
          }}
          {...stringAvatar(!user ? "" : `${user.firstName} ${user.lastName}`)}
        />
      );
    } else {
      return (
        <Avatar
          src={user.image ? user.image : ""}
          sx={props}
          style={{
            textTransform: "uppercase",
          }}
          {...stringAvatar(!user ? "" : `${user.firstName} ${user.lastName}`)}
        />
      );
    }
  } else {
    return (
      <Avatar
        src={user.image ? user.image : ""}
        sx={props}
        style={{
          textTransform: "uppercase",
        }}
        {...stringAvatar(!user ? "" : `${user.firstName} ${user.lastName}`)}
      />
    );
  }
};
export default StringAvatar;
