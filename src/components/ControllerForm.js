import { useState } from "react";
import { Controller } from "react-hook-form";

import { Checkbox, FormControlLabel, TextField } from "@mui/material";

export const TextFieldControl = ({
  control,
  name,
  rules,
  errors,
  label,
  type,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <TextField
          sx={{ mt: 2 }}
          name={name}
          required
          fullWidth
          value={value}
          onChange={onChange}
          error={errors}
          id={name}
          label={label}
          type={type}
          helperText={errors && errors.message}
          autoFocus
        />
      )}
    />
  );
};

export const ConfirmText = ({
  control,
  name,
  rules,
  errors,
  label,
  inputRef,
  onKeyDown,
}) => {
  const [inputValue, setInputValue] = useState("");
  const handleKeyDown = (event) => {
    if (event.key.length === 1) {
      // Permitir solo la entrada de un solo carácter válido
      onKeyDown();
      setInputValue(event.key);
    } else {
      event.preventDefault(); // Bloquear otros caracteres
    }
  };
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange } }) => (
        <TextField
          inputRef={inputRef}
          name={name}
          required
          sx={{ textTransform: "uppercase", width: "45px" }}
          value={inputValue}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          error={errors}
          id={name}
          label={label}
          helperText={errors && errors.message}
          autoFocus
        />
      )}
    />
  );
};

export const CheckboxController = ({ control, name, rules, label }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <FormControlLabel
          sx={{ mt: 2 }}
          onChange={onChange}
          control={<Checkbox value={value} color="primary" />}
          label={label}
        />
      )}
    />
  );
};
