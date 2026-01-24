📝 Tugas Hari 22: The Magic Theme Switcher 🌗
Kita akan membuat aplikasi yang bisa ganti tema (Dark/Light) di seluruh halaman tanpa oper props manual.

Skenario:

Setup Context: Buat file context/ThemeContext.js.

Parent: Di App.jsx, sediakan state theme ("light" atau "dark") dan fungsi untuk mengubahnya. Bungkus isi App dengan Provider.

Consumer 1 (Card): Buat komponen Card.jsx.

Ambil data theme pakai useContext.

Jika theme "dark", background kartu jadi hitam, teks putih.

Jika theme "light", background putih, teks hitam.

Consumer 2 (Button): Buat komponen ThemeToggle.jsx.

Ambil fungsi setTheme.

Buat tombol yang kalau diklik mengubah "light" jadi "dark" dan sebaliknya.

Tantangan: Pastikan Card dan ThemeToggle TIDAK menerima props apapun dari App. Mereka harus mandiri mengambil data dari "Udara" (Context).

Silakan dirakit! Ini pondasi penting sebelum besok kita belajar Reducer. 🚀