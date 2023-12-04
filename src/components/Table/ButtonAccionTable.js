import { useDispatch } from "react-redux";

import Link from "next/link";

import { deleteIngredient } from "@/services/ingredients";
import { Delete, Edit } from "@mui/icons-material";
import { ButtonGroup, IconButton } from "@mui/material";
const ButtonAccionTable = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <ButtonGroup
      sx={{ gap: 2 }}
      size="small"
      variant="text"
      aria-label="text button group"
    >
      <Link href={`/ingredients/edit-ingredient?id=${id}`}>
        <IconButton size="small">
          <Edit />
        </IconButton>
      </Link>
      <IconButton
        onClick={() => deleteIngredient(dispatch, id)}
        color="error"
        size="small"
      >
        <Delete />
      </IconButton>
    </ButtonGroup>
  );
};
export default ButtonAccionTable;
