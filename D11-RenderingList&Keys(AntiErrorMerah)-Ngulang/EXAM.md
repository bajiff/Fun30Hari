📅 Hari 11: Rendering List & Keys (Anti Error Merah)
Selamat datang di Hari 11. Kita akan kembali membahas .map(), tapi kali ini lebih dalam tentang masalah Key dan Manipulasi List.

Masalah: "Kenapa Harus Pakai Key?"
Kamu mungkin berpikir: "Ah, biar gak ada warning merah aja di console." Salah. Key itu adalah "KTP" atau identitas bagi React.

Bayangkan kamu punya list: [Budi, Siti, Joko]. Kalau kamu hapus "Budi", React perlu tahu: "Apakah aku harus hapus elemen pertama? Atau geser elemen kedua dan ketiga?"

Tanpa key yang unik, React bisa salah hapus DOM, inputan user bisa tertukar, atau animasi jadi aneh.

Aturan Key yang Baik:
Unik: Tidak boleh ada dua item dengan key sama di satu list.

Stabil: Jangan pakai Math.random(). Nanti setiap render itemnya dianggap baru terus (re-render massal = lambat).

JANGAN PAKAI INDEX ARRAY (Kecuali Terpaksa):

❌ map((item, index) => <li key={index}>...</li>)

Kenapa? Kalau listnya diurutkan ulang (sort) atau ada yang dihapus di tengah, indexnya berubah semua. React jadi bingung.

✅ Gunakan ID dari database: map(item => <li key={item.id}>...</li>)

📝 Tugas Hari 11: The Dynamic Shopping List
Kita akan buat aplikasi "Daftar Belanja" yang itemnya bisa dihapus.

Spesifikasi:

Data Awal: Buat state array berisi 3 barang awal.

JavaScript

const [items, setItems] = useState([
  { id: 1, nama: "Beras" },
  { id: 2, nama: "Telur" },
  { id: 3, nama: "Kecap" }
]);
Tampilkan: Render list tersebut menggunakan .map().

Fitur Hapus (Event Handling + State):

Di sebelah tiap nama barang, beri tombol "Hapus" (X).

Saat diklik, barang tersebut hilang dari layar.

Clue Logic: Gunakan .filter(). Kamu harus membuat array baru yang isinya adalah SEMUA item KECUALI yang ID-nya diklik.

Tantangan Logic: Jangan pakai splice. Gunakan filter untuk menjaga immutability.

JavaScript

// Pola hapus di React:
const hapusItem = (idYangDihapus) => {
   setItems(items.filter(item => item.id !== idYangDihapus));
}
Coba implementasikan ini dalam satu komponen ShoppingList.jsx. Saya mau lihat kamu menghubungkan onClick di tombol kecil ke fungsi hapus di parent.

Silakan beraksi! 🛒