import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import Login from "./components/Login";
import Registration from "./components/Registration";
import AppLayout from "./layout/appLayout";
import IndexEntity from "./pages/entity";
import CabangEntity from "./pages/entity/cabang";
import KarywanEntity from "./pages/entity/karyawan";
import Index from "./pages/home";
import LoginPage from "./pages/login";
import DetailPesanan from "./pages/pembelian/detailPesanan";
import DetailTagihan from "./pages/pembelian/detailTagihan";
import Laporan from "./pages/pembelian/laporan";
import Pesanan from "./pages/pembelian/pesanan";
import Tagihan from "./pages/pembelian/tagihan";
import TambahPesanan from "./pages/pembelian/tambahPesanan";
import IndexPembelian from "./pages/penjualan";
import DetailPesananPenjualan from "./pages/penjualan/detailPesanan";
import LaporanPenjualan from "./pages/penjualan/laporan";
import PesananPenjualan from "./pages/penjualan/pesanan";
import TambahPesananPenjualan from "./pages/penjualan/tambahPesanan";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <div className="App" style={{ padding: '0 !important' }}>
      <Routes>
        <Route path="/" element={<LoginPage/>}>
          <Route path="/login" element={<Login/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/registration" element={<Registration/>} />
        </Route>
        <Route path="/" element={
          <ProtectedRoute>
            <AppLayout/>
          </ProtectedRoute>
        }>
            <Route index element={<Index/>} />
            <Route path='pembelian/laporan' element={<Laporan/>} />
            <Route path='pembelian/pesanan' element={<Pesanan/>} />
            <Route path='pembelian/pesanan/detail/:id' element={<DetailPesanan/>} />
            <Route path='pembelian/pesanan/tambah' element={<TambahPesanan/>} />
            <Route path='pembelian/tagihan' element={<Tagihan/>} />
            <Route path='pembelian/tagihan/detail/:id' element={<DetailTagihan/>} />
            <Route path='penjualan' element={<IndexPembelian/>} >
              <Route path="laporan" element={<LaporanPenjualan/>} />
              <Route path="pesanan" element={<PesananPenjualan/>} />
              <Route path="pesanan/tambah" element={<TambahPesananPenjualan/>} />
              <Route path='pesanan/detail/:id' element={<DetailPesananPenjualan/>}  />
            </Route>
            <Route path='entity' element={<IndexEntity/>} >
              <Route path='karyawan' element={<KarywanEntity/>} />
              <Route path='cabang' element={<CabangEntity/>} />
            </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
