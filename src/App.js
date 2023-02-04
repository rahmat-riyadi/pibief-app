import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import Login from "./components/Login";
import Registration from "./components/Registration";
import AppLayout from "./layout/appLayout";
import Index from "./pages/home";
import LoginPage from "./pages/login";
import Laporan from "./pages/pembelian/laporan/laporan";
import MenungguPembayaran from "./pages/pembelian/laporan/menungguPembayaran";
import DetailTagihan from "./pages/pembelian/tagihan/detail";

import ProtectedRoute from "./utils/ProtectedRoute";

// =================> Pembelian 
import Pesanan from "./pages/pembelian/pesanan";
import DetailPesanan from "./pages/pembelian/pesanan/detail";
import TambahPesanan from "./pages/pembelian/pesanan/tambah";
import JatuhTempo from "./pages/pembelian/laporan/jatuhTempo";
import Tagihan from "./pages/pembelian/tagihan/index";
import TambahTagihan from "./pages/pembelian/tagihan/tambah";



// =================> Penjualan 

import LaporanPenjualan from "./pages/penjualan/laporan/laporan";

import PesananPenjualan from "./pages/penjualan/pesanan/index";
import DetailPesananPenjualan from "./pages/penjualan/pesanan/detail";
import TambahPesananPenjualan from "./pages/penjualan/pesanan/tambah";

import TagihanPenjualan from "./pages/penjualan/tagihan";
import DetailTagihanPenjualan from "./pages/penjualan/tagihan/detail";
import TambahTagihanPenjualan from "./pages/penjualan/tagihan/tambah";
import PengirimanPenjualan from "./pages/penjualan/pengiriman";

// =================> Penjualan 

import EntryProduk from "./pages/persediaan/entryProduk";
import TambahEntryProduk from "./pages/persediaan/entryProduk/tambah";
import DetailEntryProduk from "./pages/persediaan/entryProduk/detail";
import StokPersedian from "./pages/persediaan/stok";
import DetailStok from "./pages/persediaan/stok/detail";
import TambahStok from "./pages/persediaan/stok/tambah";

// =================> Entity 

import VendorEntity from "./pages/entity/vendor";

import CabangEntity from "./pages/entity/cabang";
import TambahCabang from "./pages/entity/cabang/tambah";
import TambahKaryawan from "./pages/entity/karyawan/tambah";
import TambahVendor from "./pages/entity/vendor/tambah";
import KaryawanEntity from "./pages/entity/karyawan";

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
            <Route path='pembelian'>
              <Route path='laporan'  >
                <Route index element={<Laporan/>}/>
                <Route path='menunggu-pembayaran' element={<MenungguPembayaran/>}/>
                <Route path='jatuh-tempo' element={<JatuhTempo/>}/>
              </Route>
              <Route path='pesanan' >
                <Route index element={<Pesanan/>} />
                <Route path='detail/:id' element={<DetailPesanan/>} />
                <Route path='tambah' element={<TambahPesanan/>} />
              </Route>
              <Route path='tagihan' >
                <Route index element={<Tagihan/>} />
                <Route path='detail/:id' element={<DetailTagihan/>} />
                <Route path='tambah' element={<TambahTagihan/>} />
              </Route>
            </Route>
            {/* <Route path='penjualan' element={<IndexPembelian/>} > */}
            <Route path='penjualan' >
              <Route path='laporan' >
                <Route index element={<LaporanPenjualan/>}/>
                <Route path='menunggu-pembayaran' element={<MenungguPembayaran/>}/>
                <Route path='jatuh-tempo' element={<JatuhTempo/>}/>
              </Route>
              <Route path="pesanan" >
                <Route index element={<PesananPenjualan/>}/>
                <Route path="detail/:status" element={<DetailPesananPenjualan/>}/>
                <Route path="tambah" element={<TambahPesananPenjualan/>}/>
              </Route>
              <Route path='tagihan' >
                <Route index element={<TagihanPenjualan/>} />
                <Route path='detail/:id' element={<DetailTagihanPenjualan/>} />
                <Route path='tambah' element={<TambahTagihanPenjualan/>} />
              </Route>
              <Route path="pengiriman" >
                <Route index element={<PengirimanPenjualan/>} />
              </Route>
            </Route>
            <Route path="persediaan" >
              <Route path="entry-produk">
                <Route index element={<EntryProduk/>} />
                <Route path="tambah" element={<TambahEntryProduk/>} />
                <Route path="detail/:id" element={<DetailEntryProduk/>} />
              </Route>
              <Route path="stok" >
              <Route index element={<StokPersedian/>} />
              <Route path="detail/:id" element={<DetailStok/>} />
              <Route path="tambah" element={<TambahStok/>} />
              </Route>
            </Route>
            <Route path='entity' >
              <Route path='vendor' >
                <Route index element={<VendorEntity/>} />
                <Route path='tambah' element={<TambahVendor/>} />
              </Route>
              <Route path='cabang' >
                <Route index element={<CabangEntity/>} />
                <Route path='tambah' element={<TambahCabang/>} />
              </Route>
              <Route path='karyawan' >
                <Route index element={<KaryawanEntity/>} />
                <Route path='tambah' element={<TambahKaryawan/>} />
              </Route>
              {/* <Route path='cabang' element={<CabangEntity/>} />
              <Route path='cabang/tambah' element={<TambahCabang/>} /> */}
              
            </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
