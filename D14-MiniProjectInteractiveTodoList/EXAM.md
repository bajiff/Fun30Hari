📅 Hari 14: Mini Project #2 - Interactive Todo List
Selamat datang di akhir Minggu ke-2! 🎉 Hari ini kita akan menggabungkan SEMUA yang sudah kamu pelajari:

Array State (CRUD)

Event Handling

Controlled Form (Input)

Conditional Rendering (Coret yang sudah selesai)

Misi Hari Ini: Buatlah aplikasi "Catatan Belanja / Todo List" yang berfungsi penuh.

Fitur Wajib:

Input Data: Ada form input teks dan tombol "Tambah".

Menampilkan List: Data yang diinput muncul di bawahnya.

Hapus Data: Tiap item punya tombol hapus (X).

Fitur Ceklis (Selesai):

Tiap item bisa diklik / ada checkbox.

Jika diklik, teksnya jadi dicoret (line-through) dan warnanya memudar, tapi TIDAK DIHAPUS.

Clue State: Data todolist harus berupa object: { id: 1, text: "Beli Telur", completed: false }.

Info: Tampilkan jumlah tugas yang belum selesai (Misal: "Sisa tugas: 3").

Bocoran Logic "Coret / Toggle Completed": Sama seperti fitur hapus, kita pakai .map untuk update data.

JavaScript

const toggleTodo = (id) => {
  setTodos(todos.map(todo => 
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  ));
};
Silakan kerjakan di satu file TodoList.jsx. Tunjukkan padaku bahwa kamu layak masuk ke Minggu 3 (Data Fetching & API)! 🔥

Semangat coding! 🚀