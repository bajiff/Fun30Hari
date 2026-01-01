📅 Hari 10: State vs Props & "Lifting State Up"
Ini adalah konsep yang membedakan "Junior React Dev" dengan "Intermediate React Dev".

Masalahnya:
Bayangkan kamu punya struktur seperti ini:

Rumah (Parent)

Kamar Adik (Child A)

Kamar Kakak (Child B)

Bagaimana caranya kalau Adik tekan tombol di kamarnya, tapi lampu di kamar Kakak yang menyala? Ingat: Data di React mengalir ke BAWAH (satu arah). Kakak tidak bisa minta data langsung ke Adik (karena mereka sejajar/sibling).

Solusinya: "Lifting State Up" (Angkat State ke Atas)
Karena Adik dan Kakak tidak bisa ngobrol langsung, kita pindahkan State-nya (Saklar Lampu) ke Orang Tua (Rumah).

State ditaruh di Rumah.

Rumah memberi Props Data ke Kakak ("Nih status lampunya").

Rumah memberi Props Fungsi ke Adik ("Nih remote control, kalau ditekan lapor ke Ayah ya").

📝 Tugas Hari 10: Sistem Saklar Rumah
Kita akan simulasikan kasus di atas. Jangan buat semuanya dalam satu file/satu komponen. Kita belajar komunikasi antar komponen.

Instruksi:

Buat file Rumah.jsx (Parent).

Buat file Lampu.jsx (Child 1 - Penampil).

Buat file Saklar.jsx (Child 2 - Pengontrol).

Skenario:

Di Rumah.jsx:

Buat state isNyala (boolean false/true).

Render <Lampu /> dan <Saklar />.

Di Lampu.jsx:

Terima props nyala.

Jika true, tampilkan kotak warna Kuning (atau tulisan "Lampu Nyala").

Jika false, tampilkan kotak warna Abu-abu (atau tulisan "Lampu Mati").

Di Saklar.jsx:

Terima props action.

Isinya cuma satu tombol "Tekan Saya".

Saat diklik, panggil props action tadi.

Tantangan Logic: Tombol di Saklar harus bisa Toggle (Hidup -> Mati -> Hidup). Clue di Parent: setNyala(!isNyala) (Tanda seru artinya "kebalikannya").

Coba rakit 3 file ini. Kalau berhasil, kamu sudah paham arsitektur React yang sebenarnya!

Silakan coding! 🏠💡