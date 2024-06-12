import styled from "@emotion/styled";
import { outlinedInputClasses, TextField } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const TextFieldWrapper = styled(TextField)(({}) => ({
  [`& .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "primary",
  },
  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "primary",
  },
  "&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "primary",
  },
  "&.Mui-focused .MuiInputLabel-root": {
    color: "primary",
  },
  fontSize: "18px",
}));
