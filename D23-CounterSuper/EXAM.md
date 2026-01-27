📅 Hari 23: useReducer (Kakaknya useState)
Selamat datang di Hari 23! Kamu sudah jago pakai useState dan Context.

Tapi, pernah gak kamu ngerasa useState jadi ribet kalau logic-nya banyak? Misal state "Cart Belanja":

Kalau tambah barang -> cek dulu ada gak? kalau ada quantity nambah, kalau gak ada push baru.

Kalau kurang barang -> cek quantity 1 atau bukan? kalau 1 hapus.

Kalau hapus barang -> filter array.

Kalau semua logic itu ditaruh di dalam App.jsx pakai useState, kodenya bakal panjang dan pusing.

Disinilah useReducer masuk.

Konsep: "Bos dan Karyawan"
Komponen (Bos): Dia cuma teriak perintah (Action). "Eh, TAMBAH_BARANG!", "Eh, HAPUS_BARANG!". Dia gak mau tau caranya gimana.

Reducer (Karyawan): Dia yang mikir logic-nya di belakang layar.

Rumus Dasar:

JavaScript
const [state, dispatch] = useReducer(reducerFunction, initialState);

// Cara Pakai:
dispatch({ type: "TAMBAH" }); // Teriak ke karyawan
📝 Tugas Hari 23: Counter Super (Simulasi Reducer)
Sebelum masuk ke Shopping Cart (besok), kita pahami sintaksnya dulu pakai Counter sederhana tapi pakai gaya Reducer.

Tugas: Buat file CounterReducer.jsx.

Buat fungsi reducer (di luar komponen):

Menerima 2 parameter: state dan action.

Gunakan switch(action.type).

Case "INCREMENT": state + 1.

Case "DECREMENT": state - 1.

Case "RESET": jadi 0.

Case "DOUBLE": state * 2 (Fitur tambahan).

Di dalam komponen:

Gunakan useReducer.

Buat tombol-tombol yang memanggil dispatch({ type: "..." }).

Tujuannya adalah membiasakan diri menulis dispatch dan memisahkan logic matematika dari UI.

Silakan dicoba! Ini adalah pintu gerbang menuju Redux nanti. 🚪🔑