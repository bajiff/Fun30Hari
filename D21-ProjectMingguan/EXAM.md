📅 Hari 20: React Router (Pindah Halaman) 🚦
Selamat datang di Hari 20. Aplikasi kita sejauh ini cuma satu halaman (Single Page dalam arti harfiah). Padahal SPA (Single Page Application) itu maksudnya satu file HTML, tapi isinya seolah-olah banyak halaman.

Kita butuh React Router.

Bayangkan skenario ini:

Kamu buka /users -> Muncul User List.

Kamu klik nama "Leanne Graham".

URL berubah jadi /users/1 -> Muncul Detail User tersebut.

React tidak punya fitur ini secara bawaan. Kita harus install library standar industri: react-router-dom.

🛠️ Tugas Hari 20: Setup Routing
Langkah 1: Install Library Matikan server dulu (Ctrl + C), lalu ketik di terminal:

Bash

npm install react-router-dom
Lalu jalankan lagi npm run dev.

Langkah 2: Setup Router di main.jsx (Bukan App.jsx) Kita harus membungkus seluruh aplikasi kita dengan BrowserRouter.

JavaScript

// main.jsx
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
Langkah 3: Bikin Navigasi di App.jsx Kita akan belajar 3 komponen utama:

Routes & Route: Penunjuk jalan.

Link: Pengganti tag <a> (biar gak refresh halaman).

Tugas Coding: Ubah App.jsx kamu menjadi seperti ini (silakan ketik manual biar paham):

Buat komponen halaman sederhana (Home & About) di file terpisah atau di atas App.

Gunakan Routes dan Route untuk mengatur:

/ menampilkan halaman Home.

/users menampilkan UserList (yang sudah kamu buat).

/about menampilkan halaman About (tulisan bebas).

Buat Navbar sederhana di atasnya pakai <Link to="...">.

Jangan pakai <a href="..."> ya!

Contoh Struktur App.jsx:

JavaScript

import { Routes, Route, Link } from "react-router-dom";
import UserList from "./components/UserList"; // Import komponenmu

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/users">Users</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Ini Home</h1>} />
        <Route path="/users" element={<UserList />} />
        {/* Tambah route About sendiri */}
      </Routes>
    </>
  )
}

Silakan rakit navigasimu! Kalau berhasil, kamu bisa pindah-pindah halaman User ke Home tanpa loading putih (kedip). 🚀
