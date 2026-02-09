📅 Hari 24: Mini Project #4 - Shopping Cart (Keranjang Belanja) 🛒
Selamat datang di Hari 24.
Karena kamu sudah menguasai Context + Reducer (ini kombinasi maut), tugas hari ini seharusnya "makanan empuk" buat kamu.

Kita akan bikin fitur paling umum di E-commerce: Keranjang Belanja.

Tugas:
Buat file CartReducer.jsx dan komponen pendukungnya.

Spesifikasi State:

JavaScript
const initialState = {
  cart: [], // Array of objects: { id, name, price, qty }
  total: 0
};
Fitur Reducer (Action):

ADD_TO_CART:

Menerima payload berupa barang { id: 1, name: "Baju", price: 50000 }.

Logic: Cek dulu di array cart.

Kalau barang sudah ada: Update qty-nya (+1).

Kalau barang belum ada: Push barang baru dengan qty: 1.

REMOVE_FROM_CART:

Menerima payload id.

Hapus barang dari array (pakai .filter).

DECREASE_QTY:

Menerima payload id.

Kurangi qty.

Logic: Jika qty sisa 1 dan dikurang, maka HAPUS barangnya.

Tampilan UI:

Product List: Daftar barang (Hardcode aja) dengan tombol "Beli".

Cart: Tampilkan daftar barang yang sudah dibeli + Total Harga di bawah.

Clue:
Ini logika update qty yang agak tricky (Immutable update):

JavaScript
// Contoh update qty di dalam map
cart: state.cart.map(item => 
   item.id === action.payload.id 
     ? { ...item, qty: item.qty + 1 } 
     : item
)
Silakan tunjukkan taringmu, Baji! Kalau ini berhasil, kamu sudah siap melamar kerja sebagai Junior React Dev. 🔥