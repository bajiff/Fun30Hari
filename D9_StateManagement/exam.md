### 📅 Hari 9: State Management (Jantungnya React)

Fundamental kamu sudah cukup kuat. Sekarang kita masuk ke materi paling krusial di React. Tanpa ini, aplikasimu cuma cangkang kosong.

Kita akan berkenalan dengan **`useState`**.

#### Konsep: Variable Biasa vs State

Di JS biasa:

```javascript
let angka = 0;
function tambah() {
  angka = angka + 1;
  console.log(angka); // Di console berubah jadi 1, 2, 3...
  // TAPI DI LAYAR TIDAK BERUBAH!
}
```

Kenapa? Karena React tidak tahu kalau variable `angka` berubah, jadi React tidak me-render ulang tampilannya.

Untuk itu kita butuh **`useState`**.
`useState` adalah cara kita bilang ke React: *"Tolong pantau variabel ini. Kalau isinya berubah, update tampilan di layar otomatis\!"*

#### Sintaks `useState`

```javascript
import { useState } from 'react';

// [namaVariabel, fungsiPengubah] = useState(nilaiAwal);
const [count, setCount] = useState(0);

// Cara ubah:
// JANGAN: count = 5; (Haram!)
// HARUS: setCount(5);
```

-----

### 📝 Tugas Hari 9: Counter App (Tapi ada twist-nya)

Buat file baru `Counter.jsx`. Kita akan buat penghitung angka.

**Spesifikasi:**

1.  Tampilkan angka `0` di tengah layar (ukuran font besar).
2.  Buat 3 Tombol:
      * **Tambah (+):** Menambah angka 1.
      * **Kurang (-):** Mengurangi angka 1.
      * **Reset:** Mengembalikan angka ke 0.
3.  **Logic Twist (Tantangan):**
      * Angka **TIDAK BOLEH** minus (negatif). Kalau sudah 0, tombol Kurang tidak ngefek (atau hilang).
      * Tampilkan teks "Ganjil" atau "Genap" di bawah angkanya, sesuai dengan nilai saat ini.

Pasang `Counter` di `App.jsx` dan coba mainkan.

Silakan berkreasi\! Kalau bingung logikanya, tanya saja. Semangat\! 🚀