📅 Hari 18: UX Improvement (Handling Loading & Error State)
Hari ini kita santai sedikit tapi fokus ke detail. Kemarin kamu cuma menampilkan teks: Sabar Lagi Loading....

Di aplikasi modern, user menuntut lebih. Mereka mau lihat Skeleton Loading (kerangka abu-abu yang kedip-kedip) atau Error Message yang ada tombol "Coba Lagi".

Misi Hari 18: Mempercantik User Experience
Gunakan kode UserList.jsx kemarin, kita upgrade tampilannya.

Tugas:

Skeleton Loading:

Hapus teks "Sabar Lagi Loading...".

Jika loading bernilai true, tampilkan 3 kotak abu-abu kosong yang berjejer ke bawah (pura-puranya baris tabel).

Tips CSS Tailwind: animate-pulse bg-gray-300 h-10 w-full mb-2 rounded.

Error dengan Retry:

Jika error, jangan cuma teks. Tampilkan kotak merah berisi pesan error DAN tombol "Coba Lagi".

Saat tombol diklik, dia harus memanggil ulang fungsi fetch data tadi.

Clue: Keluarkan fungsi getAPI dari dalam useEffect atau bungkus dengan useCallback (atau cara paling simpel: definisikan di luar useEffect tapi di dalam komponen).

Tantangan Logic: Bagaimana caranya agar tombol "Coba Lagi" bisa memicu ulang fetch data? Clue: Ingat Dependency Array di useEffect? Atau panggil fungsi fetchnya saat onClick?

Silakan poles kodemu biar user betah! 💅✨