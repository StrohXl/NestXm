"use client";
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
  variant,
  required,
  placeholder,
  defaultValue,
  ...props
}) => {
  const [isInputFocused, setInputFocused] = useState(false);
  const handleInputFocus = () => {
    setInputFocused(true);
  };
  const handleInputBlur = () => {
    setInputFocused(false);
  };
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, value } }) => (
        <TextField
          placeholder={placeholder}
          sx={{ mt: 2 }}
          name={name}
          required={required}
          fullWidth
          value={value}
          onChange={onChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          error={errors}
          id={name}
          label={label}
          type={type}
          variant={variant}
          helperText={errors && errors.message}
          InputLabelProps={{
            shrink: Boolean(value) || isInputFocused,
          }}
          {...props}
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
