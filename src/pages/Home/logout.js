import React from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import Navbarcomp from '../../components/navbarcomp';
import Gambar from '../../image/BannerHome.png';

const Logout = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      description: 'Description for Product 1',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 150,
      description: 'Description for Product 2',
      image: 'https://via.placeholder.com/150',
    },
    // Add more products as needed
  ];

  return (
    <Container>
      <Navbarcomp />
      <Typography component={"h2"} variant="h4" gutterBottom>
        Welcome to Our Online Store
      </Typography>
      <div>
      <img src={Gambar} alt="Deskripsi Gambar" width="100%" height="none" />
    </div>
    </Container>
  );
};

export default Logout;
