import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/home';
import Roster from './pages/Roster/roster';
import Bata from './pages/Bata/bata';
import Listbeton from './pages/Listbeton/listbeton';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/registrasi';
import Riwayat from './pages/Riwayat/riwayat';
import Keranjang from './pages/Keranjang/keranjang';
import Profil from './pages/Profil/profil';
import DetailProduk from './pages/Detail Produk/detailproduk';
import Cek from './pages/Cek/cek';
import Logout from './pages/Home/logout';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Logout />} />
          <Route path="/home" element={<Home />} />
          <Route path="/roster" element={<Roster />} />
          <Route path="/bata" element={<Bata />} />
          <Route path="/listbeton" element={<Listbeton />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/riwayat" element={<Riwayat />} />
          <Route path="/keranjang" element={<Keranjang />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/detailproduk" element={<DetailProduk />} />
          <Route path="/cek" element={<Cek />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
    </Router>
  );
}

export default App;
