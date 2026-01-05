📝 Tugas Hari 17: Daftar User dari API
Kita akan pakai API gratisan dari JSONPlaceholder.

Tugas: Buat komponen UserList.jsx.

Fetching:

Ambil data dari URL: https://jsonplaceholder.typicode.com/users

Gunakan pola async/await di dalam useEffect.

Handling Loading:

Selama data belum muncul, tampilkan tulisan "Sedang memuat data..." (atau spinner kalau bisa CSS-nya).

Handling Error:

Coba sesekali putuskan koneksi internetmu atau ganti URL jadi ngawur (misal .../usersngawur).

Pastikan muncul tulisan error (misal: "Gagal mengambil data").

Tampilkan Data:

Jika sukses, tampilkan list nama user dan emailnya.

Gunakan .map() seperti biasa.

Struktur Data API-nya nanti seperti ini:

JSON

[
  { "id": 1, "name": "Leanne Graham", "email": "Sincere@april.biz", ... },
  ...
]
Silakan hubungkan React-mu dengan internet! Jangan lupa import UserList ke parent utama ya. 📡