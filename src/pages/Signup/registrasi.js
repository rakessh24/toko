import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Avatar, Box, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import AlertMessages from '../../components/AlertMessage/AlertMessage';
import Buttons from '../../components/Button/Button';
import InputTextMessage from '../../components/TextField/InputTextField';
import { useNavigate } from 'react-router-dom';

function Signup(params) {
  const [isShowPassword, setisShowPassword] = useState(false);
  const [isSuccess, setisSuccess] = useState(false);
  const [isError, setisError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const data = new FormData(event.currentTarget);
    const username = data.get("username");
    const nama = data.get("nama");
    const email = data.get("email");
    const notelp = data.get("notelp");
    const alamat = data.get("Alamat");
    // const password = data.get("password");
    // const confirmPassword = data.get("confirmpassword");
    const password = data.get("password");
    const confirmPassword = data.get("confirmPassword");

  
    // Menyatukan pengambilan nilai dan pengiriman data
    const payload = {
      username: username,
      nama: nama,
      email: email,
      notelp: notelp,
      Alamat: alamat,
      password: password,
      confirmPassword: confirmPassword,
    };
  
    try {
      const response = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        setisSuccess(true);
        navigate('/Login');
      } else {
        setisError(true);
      }
    } catch (error) {
      console.error('Error registering user:', error);
      setisError(true);
    }
  };
  

  const handleClose = () => {
    setisSuccess(false);
    setisError(false);
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          alignItems: "center",
          flexDirection: 'column',
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        <Avatar sx={{ bgcolor: "primary.main" }}></Avatar>
        <Typography component={"h1"} variant="h5">
          Sign Up
        </Typography>
        <InputTextMessage
          id="Username"
          label="Username"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          autoFocus
          name="username"
          type="text"
        />
        <InputTextMessage
          id="Nama"
          label="Nama"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          autoFocus
          name="nama"
          type="text"
        />
        <InputTextMessage
          id="Email"
          label="Email Address"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          autoFocus
          name="email"
          type="text"
        />
        <InputTextMessage
          id="No Telp"
          label="No Telp"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          autoFocus
          name="notelp"
          type="number"
        />
        <InputTextMessage
          id="Alamat"
          label="Alamat"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          autoFocus
          name="Alamat"
          type="text"
        />
        <div style={{ position: "relative" }}>
          <InputTextMessage
            id="Password"
            label="Password"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            autoFocus
            name="password"
            type={isShowPassword ? "text" : "password"}
          />
          <div
            style={{
              position: "absolute",
              right: 15,
              top: 33,
              cursor: "pointer",
            }}
            onClick={() => setisShowPassword(!isShowPassword)}
          >
            {isShowPassword ? (
              <VisibilityOff fontSize="small" />
            ) : (
              <Visibility fontSize="small" />
            )}
          </div>

          <InputTextMessage
  id="Confirm Password"
  label="Confirm Password"
  variant="outlined"
  fullWidth
  required
  margin="normal"
  autoFocus
  name="confirmPassword"  // Ganti name menjadi "confirmPassword"
  type={isShowPassword ? "text" : "password"}
/>
          <div
            style={{
              position: "absolute",
              right: 15,
              bottom: 25,
              cursor: "pointer",
            }}
            onClick={() => setisShowPassword(!isShowPassword)}
          >
            {isShowPassword ? (
              <VisibilityOff fontSize="small" />
            ) : (
              <Visibility fontSize="small" />
            )}
          </div>
        </div>
        <Buttons
          type="submit"
          variant="contained"
          fullWidth
          label="Sign Up"
        />

        <AlertMessages
          label="Berhasil Sign Up"
          open={isSuccess}
          severity="success"
          onClose={handleClose}
        />

        <AlertMessages
          label="Confirm Password is Wrong!"
          open={isError}
          severity="error"
          onClose={handleClose}
        />
      </Box>
    </Container>
  );
}

export default Signup;
