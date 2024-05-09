"use client"
import { TextField } from "@mui/material";

export default function Register() {
  return (
    <>
      <h2>Register</h2>
      <TextField
      id="email"
      label="Email"
      type="email"
      variant="outlined"
      fullWidth
      helperText="Ingrese un email valido"
      />
    </>
  );
}
