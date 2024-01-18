import React, { useState } from 'react';
import { Container, AppBar, Toolbar, Drawer, List, ListItem, ListItemText, CssBaseline, Typography, Divider } from '@mui/material';

const AkunPage = () => {
  const [activeTab, setActiveTab] = useState('data-pengguna');

  const containerStyle = {
    display: 'flex',
    height: '100vh',
  };

  const contentStyle = {
    flex: '1',
    padding: '20px',
  };

  const dataPenggunaStyle = {
    textAlign: 'center',
  };

  const profileSectionStyle = {
    textAlign: 'center',
  };

  const imgStyle = {
    width: '5cm',
    height: '5cm',
    borderRadius: '50%',
  };

  const userInfoStyle = {
    textAlign: 'left',
    maxWidth: '400px',
    margin: '0 auto',
  };

  const userInfoPStyle = {
    margin: '10px 0',
  };

  const notificationStyle = {
    textAlign: 'center',
    fontSize: '30px',
    fontFamily: "'Times New Roman', Times, serif",
  };

  return (
    <Container style={containerStyle}>
      <Drawer
        variant="permanent"
        sx={{
          width: 250,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
            backgroundColor: '#333',
            color: 'white',
          },
        }}
      >
        <Toolbar />
        <Typography component={"h1"} variant={"h2"}> Akun Saya </Typography>
        <List>
          {['Data Pengguna', 'Notifikasi', 'Riwayat'].map((text, index) => (
            <ListItem button key={text} onClick={() => setActiveTab(text.toLowerCase().replace(' ', '-'))}>
              <ListItemText primary={text} style={{ color: activeTab === text.toLowerCase().replace(' ', '-') ? 'white' : 'inherit' }} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Container component="main" style={contentStyle}>
        <div id="data-pengguna" style={{ ...dataPenggunaStyle, display: activeTab === 'data-pengguna' ? 'block' : 'none' }}>
          <div style={profileSectionStyle}>
            <img src="/profil.png" alt="Profile Icon" style={imgStyle} />
            <Typography variant="h4">Mingaol</Typography>
          </div>
          <div style={userInfoStyle}>
            <p style={userInfoPStyle}><strong>Nama:</strong> Admin</p>
            <p style={userInfoPStyle}><strong>Email:</strong> Admin@gmail.com</p>
            <p style={userInfoPStyle}><strong>Alamat:</strong> Depok</p>
            <p style={userInfoPStyle}><strong>Nomor Handphone:</strong> +62 123 456 789</p>
          </div>
        </div>

        <div id="notifikasi" style={{ ...notificationStyle, display: activeTab === 'notifikasi' ? 'block' : 'none' }}>
          <Typography variant="h4">Notifikasi</Typography>
          <p>Tidak ada notifikasi untuk anda!</p>
        </div>

        <div id="riwayat" style={{ ...notificationStyle, display: activeTab === 'riwayat' ? 'block' : 'none' }}>
          <Typography variant="h4">Riwayat</Typography>
          <p>Anda belum pernah melakukan transaksi</p>
        </div>
      </Container>
    </Container>
  );
};

export default AkunPage;