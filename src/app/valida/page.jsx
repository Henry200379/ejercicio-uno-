"use client";
//import Register from "../components/Formulario";
import * as React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Counter from '../components/Ejemplo'

export default function valida() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",
  });
  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
   
   
    
    if (validateEmail(email)) {
      setError({
        error: false,
        message: "email correcto",
        
      });
      
      console.log(email);
    } else {
      setError({
        error: true,
        message: "Formato de email incorrecto",
      });
    }

  };

 
  return (
    
    <>
      <Box component="form" onSubmit={handleSubmit} id="formul">
        
        <Typography mt={5} variant="h5" sx={{ color: "grey" }}>
          Registro
        </Typography>
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          required
          error={error.error}
          helperText={error.message}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mt: 1 }}
          
        />
        

        <Button type="submit" variant="outlined" sx={{ marginTop: 1 }}>
          Registrarme
        </Button>
        
      </Box>

  <Counter/>
      
    </>
    
  );
  
}
