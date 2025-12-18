📅 Hari 12: Conditional Rendering (Seni Menyembunyikan)
Hari ini kita belajar membuat UI yang dinamis. "Kalau A terjadi, tampilkan B. Kalau tidak, tampilkan C."

Di React, kita tidak pakai if-else block di dalam JSX (HTML). Kita pakai 3 jurus ninja:

1. Ternary Operator (? :)
Dipakai untuk memilih antara Dua Opsi.

JavaScript

{isLoggedIn ? <UserDashboard /> : <LoginButton />}
2. Logical AND (&&)
Dipakai jika Hanya Satu Opsi (Kalau true muncul, kalau false hilang).

JavaScript

{isAdmin && <button>Delete User</button>}
Artinya: Jika isAdmin true, tombol muncul. Jika false, React mengabaikannya (null).

3. Early Return (Pencegahan)
Dipakai jika satu halaman penuh tidak boleh muncul (misal lagi loading).

JavaScript

if (isLoading) {
  return <div>Sabar ya, lagi loading...</div>;
}
// Kode di bawah ini gak bakal jalan kalau loading
return <div>Website Utama</div>
📝 Tugas Hari 12: Stok Gudang Pintar
Gunakan file ProductList.jsx yang tadi (yang datanya banyak itu). Kita akan modifikasi tampilannya berdasarkan kondisi data.

Tugas:

Low Stock Warning (Ternary / Logic Style):

Lihat kolom Stock.

Jika stock di bawah 10, warnai angkanya jadi MERAH dan tebal.

Jika stock aman (>= 10), biarkan warna hitam biasa.

Out of Stock Logic (Ternary Text):

Jika stock 0, jangan tampilkan angka 0. Tampilkan teks "Habis!" dengan background merah.

Diskon Sultan (Logical AND &&):

Lihat kolom Price.

Jika harga di atas Rp 5.000, tampilkan icon/teks 🤑 (atau tulisan "Mahal") di samping harganya.

Fitur Toggle Table (Conditional Rendering Component):

Di atas tabel, buat tombol: "Sembunyikan Tabel" / "Tampilkan Tabel".

Pakai state showTable (boolean).

Gunakan Logical AND && untuk menyembunyikan/menampilkan seluruh tabel berdasarkan tombol itu.

Coba mainkan logikanya. Ini skill penting untuk dashboard admin! Silakan coding! 🕵️‍♂️