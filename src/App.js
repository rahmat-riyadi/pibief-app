import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import Login from "./components/Login";
import Registration from "./components/Registration";
import AppLayout from "./layout/appLayout";
import Index from "./pages/home";
import LoginPage from "./pages/login";
import DetailPesanan from "./pages/pembelian/detailPesanan";
import DetailTagihan from "./pages/pembelian/detailTagihan";
import Laporan from "./pages/pembelian/laporan";
import Pesanan from "./pages/pembelian/pesanan";
import Tagihan from "./pages/pembelian/tagihan";
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
            <Route path='pembelian/tagihan' element={<Tagihan/>} />
            <Route path='pembelian/tagihan/detail/:id' element={<DetailTagihan/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
