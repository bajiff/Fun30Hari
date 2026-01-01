📅 Hari 8: Event Handling (Interaksi Dasar)
Di HTML biasa, mungkin kamu terbiasa menulis: <button onclick="klikSaya()">Klik</button>

Di React, caranya mirip tapi ada 3 Perbedaan Vital yang kalau salah sedikit saja, aplikasimu bisa error atau looping tak terbatas.

📜 3 Hukum Interaksi React
1. CamelCase is King Semua event di React menggunakan format camelCase.

HTML: onclick, onchange, onsubmit

React: onClick, onChange, onSubmit

2. Pass Function, Don't Call It (Hukum Paling Sering Dilanggar ⚠️) Ini adalah jebakan nomor 1 bagi pemula.

❌ SALAH: onClick={handleClick()}

Kenapa? Tanda kurung () artinya "Jalankan fungsi ini SEKARANG JUGA saat halaman dimuat". Akibatnya, fungsi jalan sebelum tombol diklik.

✅ BENAR: onClick={handleClick}

Kenapa? Kita cuma memberikan "referensi" (alamat) fungsinya. "Nih React, pegang alamat ini. Nanti kalau diklik, baru jalankan ya."

3. Bungkus dengan Arrow Function (Jika butuh Parameter) Bagaimana kalau fungsinya butuh data? Misal hapusData(id). Kalau kita tulis onClick={hapusData(1)}, dia akan melanggar hukum no 2 (jalan duluan).

Solusinya: Bungkus dengan "Fungsi Pelindung" (Arrow Function).

✅ BENAR: onClick={() => hapusData(1)}

Artinya: "Saat diklik, jalankan fungsi anonim ini, lalu di dalamnya baru jalankan hapusData(1)."

🧪 Event Object (e)
Sering lihat kode (e) => ...? e (atau event) adalah objek "laporan kejadian". React otomatis mengirimkan ini ke fungsimu.

Paling sering dipakai di Input form:

JavaScript

const handleKetik = (e) => {
  // e.target = elemen inputnya
  // e.target.value = tulisan yang diketik user
  console.log(e.target.value);
}
📝 Tugas Hari 8: The Button Master
Kita belum main useState (itu besok). Hari ini fokus cuma ke Trigger (Pemicu) saja.

Tugas: Buat komponen baru bernama EventPractice.jsx. Di dalamnya harus ada:

Tombol Sapa:

Buat fungsi const sapa = () => alert("Halo Bang!").

Pasang di tombol: <button>Sapa Saya</button>.

Tombol Sapa Nama (Parameter):

Buat fungsi const sapaNama = (nama) => alert("Halo " + nama).

Pasang di tombol: <button>Sapa Budi</button>. (Hati-hati, ingat hukum no 3!).

Input Spy (Mata-mata):

Buat input text biasa.

Pasang event onChange.

Setiap user mengetik, tampilkan teksnya di Console Browser (Inspect Element -> Console).

Pasang komponen EventPractice ini di App.jsx kamu.

Goal:

Klik tombol 1 muncul alert.

Klik tombol 2 muncul alert dengan nama spesifik.

Ketik di input, muncul log di console browser.

Silakan kerjakan! Jangan lupa kirim kodenya ke sini kalau sudah jalan. 🚀
