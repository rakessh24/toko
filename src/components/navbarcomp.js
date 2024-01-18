import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Navbarcomp1 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSuccess, setisSuccess] = useState(false);
  const [isError, setisError] = useState(false);

  const navigate = useNavigate();

  // Fungsi untuk memeriksa status login dari server
  const checkLoginStatus = async () => {
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'GET',
        credentials: 'include', // Gunakan ini jika Anda menggunakan cookie untuk otentikasi
        headers: {
          'Content-Type': 'application/json',
          // Mungkin Anda perlu menambahkan header lain sesuai kebutuhan
        },
      });

      if (response.ok) {
        const data = await response.json();
        // Update state isLoggedIn berdasarkan status login dari server
        setIsLoggedIn(data.isLoggedIn);
      } else {
        // Tangani kasus ketika respons tidak berhasil (misalnya, koneksi terputus, kesalahan server, dll.)
        console.error('Gagal memeriksa status login dari server');
      }
    } catch (error) {
      // Tangani kesalahan jika terjadi
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    // Panggil fungsi untuk memeriksa status login ketika komponen dimuat
    checkLoginStatus();
  }, []);

  const handleLogin = async (payload) => {
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setisSuccess(true);
        // Panggil fungsi untuk memeriksa status login setelah login berhasil
        checkLoginStatus();
        // Navigasi ke halaman beranda jika login berhasil
        navigate('/Home');
      } else {
        const errorResponse = await response.json();
        console.error('Error logging in:', errorResponse.error);
        setisError(true);
      }
    } catch (error) {
      console.error('Error logging user:', error);
      setisError(true);
    }
  };

  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="home"><strong>MEROS</strong></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="roster">Roster</Nav.Link>
            <Nav.Link href="bata">Bata</Nav.Link>
            <Nav.Link href="listbeton">List Beton</Nav.Link>
          </Nav>
          <Form className="d-flex" style={{ width: '300px' }}>
            <FormControl type="text" placeholder="Search" className="mr-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
          <Nav className="ml-auto">
            {isLoggedIn ? (
              // Render tombol profil untuk status sudah login
              <Button variant="light" onClick={() => navigate('/Profile')}>
                Profil
              </Button>
            ) : (
              // Render link login dan sign up
              <>
                <Nav.Link href="LogIn">LogIn</Nav.Link>
                <Nav.Link href="SignUp">Sign Up</Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbarcomp1;
