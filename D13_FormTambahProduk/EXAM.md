📝 Tugas Hari 13: Form Tambah Produk
Kita akan membuat fitur untuk menambah data ke tabel ProductList yang sudah kamu buat.

Tugas:

Buat komponen baru ProductForm.jsx.

Siapkan state untuk menampung inputan:

name (string)

price (number)

category (select/dropdown)

stock (number)

Two-Way Binding: Pastikan setiap input memiliki properti value={...} dan onChange={...}.

Validasi Sederhana:

Tombol "Submit" Disabled (Mati) jika nama kosong ATAU harga <= 0.

Submit Handler:

Saat disubmit, cegah refresh (e.preventDefault()).

Untuk sekarang, cukup console.log dulu object data barunya. Besok baru kita gabung ke tabel.

Clue untuk Dropdown (Select): Sama saja seperti input, pakai value dan onChange.

JavaScript

<select value={category} onChange={e => setCategory(e.target.value)}>
  <option value="Electronics">Elektronik</option>
  <option value="Food">Makanan</option>
</select>
Coba buat formnya dulu. Fokus ke State yang mengendalikan Input. Silakan coding! 📝ile:///home/bajilinux/Documents/Learning/Croding/Javascript/Fun30Hari/D12_ConditionalRendering(SeniMenyembunyikan)