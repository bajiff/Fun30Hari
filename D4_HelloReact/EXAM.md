**Luar biasa\! 🌟**

Kamu benar-benar mengerjakan tugasnya dengan sangat baik. Bahkan kamu sudah "mencuri start" dengan menulis sintaks `useState` dan komponen React fungsional (`App` dan `Button`). Itu semangat yang saya cari\!

Analisis kodinganmu:

1.  **Spread Array:** `[...cart, "Mangga", "Pisang"]` -\> **Benar 100%**.
2.  **Spread Object:** `{...user, name: "..."}` -\> **Benar 100%**. Kamu berhasil menimpa (override) properti `name` lama dengan yang baru.
3.  **Modules:** Kamu sudah paham bedanya `export { ... }` (Named) dan `export default` (Default). Ini krusial karena di React kita pakai keduanya terus-menerus.

-----

### 💡 Sedikit Tambahan Penting (Pro Tip)

Satu hal tentang **Spread Operator** pada Object yang wajib diingat karena sering bikin bug: **URUTAN ITU PENTING.**

Di Javascript, properti yang ditulis **belakangan** akan menang.

```javascript
const defaults = { theme: "light", admin: false };

// ✅ BENAR (Override):
// Kita mau ganti theme jadi dark.
const settings = { ...defaults, theme: "dark" };
// Hasil: { theme: "dark", admin: false } -> Theme berubah karena ditulis SETELAH spread.

// ❌ SALAH (Tertimpa Balik):
const salah = { theme: "dark", ...defaults };
// Hasil: { theme: "light", admin: false }
// Kenapa? Karena "dark" ditulis duluan, lalu ditimpa oleh isi "defaults" (yang isinya light).
```

*Intinya: Kalau mau update data, taruh `...dataLama` di depan, baru data baru di belakangnya.*

-----

### 📅 Hari 4: Hello React (Setup Environment)

Fundamental JS kamu sudah **LULUS**. Sekarang saatnya kita tinggalkan teori dan masuk ke "Dapur Rekaman". Kita akan instalasi React di komputermu.

Dulu, orang pakai `create-react-app`. Itu berat dan lambat.
Sekarang, standar industri menggunakan **Vite** (baca: *veet*, bahasa Prancis artinya "Cepat").

#### 🛠️ Tugas Hari 4: Instalasi & Bedah Folder

**Langkah 1: Pastikan punya Node.js**
Buka terminal/cmd kamu, ketik:

```bash
node -v
```

Kalau muncul angka (misal `v18.x.x` atau `v20.x.x`), lanjut. Kalau error, download dan install Node.js (LTS version) dulu dari websitenya.

**Langkah 2: Membuat Project React dengan Vite**

1.  Buka terminal di folder tempat kamu mau menyimpan project.
2.  Ketik perintah ini (ketik manual ya):
    ```bash
    npm create vite@latest
    ```
3.  Ikuti instruksinya:
      * Project name: `belajar-react-1`
      * Select framework: **React** (Gunakan panah keyboard)
      * Select variant: **JavaScript** (Kita belum pakai TypeScript dulu biar fokus logika React).

**Langkah 3: Jalankan\!**
Masuk ke foldernya dan nyalakan mesinnya:

```bash
cd belajar-react-1
npm install
npm run dev
```

Nanti akan muncul link `http://localhost:5173`. Buka di browser. Kalau muncul logo React muter-muter, **SELAMAT\! Kamu resmi jadi React Developer.**

**Langkah 4: Tugas Bedah Kode (Wajib)**
Buka folder project itu di VS Code.

1.  Hapus semua isi file `src/App.jsx`.
2.  Hapus semua isi file `src/App.css`.
3.  Tulis kode ini di `src/App.jsx` (Ketik manual\!):

<!-- end list -->

```javascript
// src/App.jsx
import { useState } from 'react'

function App() {
  const [nama, setNama] = useState("Asisten Javascript")

  return (
    <div style={{ padding: '20px' }}>
      <h1>Halo React!</h1>
      <p>Perkenalkan, saya {nama}</p>
      <button onClick={() => setNama("Calon Senior Dev")}>
        Ubah Nama
      </button>
    </div>
  )
}

export default App
```

4.  Jalankan di browser, klik tombolnya.

**Laporan Tugas:**
Jika berhasil, cukup jawab: **"Done\! Tombol berfungsi dan nama berubah."**
Jika ada error merah, copas errornya ke sini, kita fix bareng-bareng.

Siap menyalakan mesin?
