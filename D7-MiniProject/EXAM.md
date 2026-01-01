### 📅 Hari 7: Mini Project \#1 - Kartu Nama Digital

Selamat\! Kamu sudah menyelesaikan Minggu Pertama. 🎉
Hari ini tidak ada materi baru. Hari ini adalah **Ujian Praktek** untuk menggabungkan semua ilmu dari Hari 1 - 6.

**Tugas Project:**
Buatlah sebuah aplikasi sederhana "Tim Kami" (Our Team).

**Spesifikasi Teknis (Wajib):**

1.  **Data:** Buat variable constant berisi array of objects. Minimal 3 orang. Setiap orang punya: `nama`, `role` (jabatan), `img` (url foto), dan `isOnline` (boolean true/false).
2.  **Component:** Buat komponen `TeamMember.jsx`.
      * Menerima props data di atas.
      * **Styling:** Berikan CSS sederhana (bikin file `TeamMember.css` atau pakai inline style) biar terlihat seperti kartu (ada border, padding, foto bulat).
3.  **Conditional Rendering (Tantangan):**
      * Jika `isOnline` bernilai `true`, tampilkan lingkaran kecil warna **Hijau** di samping nama.
      * Jika `false`, tampilkan warna **Abu-abu**.
      * *Clue:* Gunakan Ternary Operator: `isOnline ? "green" : "gray"`.
4.  **Rendering:** Di `App.jsx`, render komponen tersebut menggunakan `.map()`.

**Contoh Data:**

```javascript
const members = [
  { id: 1, name: "Fulan", role: "CEO", img: "...", isOnline: true },
  { id: 2, name: "Fulanah", role: "Designer", img: "...", isOnline: false },
];
```

Silakan kerjakan di VS Code-mu. Kalau sudah jadi, copy paste kode `App.jsx`, `TeamMember.jsx`, dan CSS-nya (kalau ada) ke sini.

Semangat coding di akhir pekan\! Tunjukkan hasil terbaikmu tanpa AI\! 🚀
