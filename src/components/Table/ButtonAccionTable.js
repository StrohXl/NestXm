import { useDispatch } from "react-redux";

import Link from "next/link";

import { deleteIngredient } from "@/services/ingredients";
import { Delete, Edit } from "@mui/icons-material";
import { ButtonGroup, IconButton } from "@mui/material";
const ButtonAccionTable = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <ButtonGroup
      sx={{
        gap: { xs: .5 },
      }}
      size="small"
      variant="text"
    >
      <Link
        href={`/ingredients/edit-ingredient?id=${id}`}
        onClick={(event) => event.stopPropagation()}
      >
        <IconButton size="small">
          <Edit sx={{ fontSize: { xs: 20, md: 25, "2xl": 30 } }} />
        </IconButton>
      </Link>
      <IconButton
        onClick={(event) => {
          event.stopPropagation(), deleteIngredient(dispatch, id);
        }}
        size="small"
      >
        <Delete sx={{ fontSize: { xs: 20, md: 25, "2xl": 30 } }} />
      </IconButton>
    </ButtonGroup>
  );
};
export default ButtonAccionTable;
