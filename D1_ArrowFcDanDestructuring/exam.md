Hari 1: Modern JS Part I: Arrow Function & Destructuring (Agar kodemu ringkas).
Your Code
```js
// * declarative function 
function sama(nama) {
  console.log(`Halo ${nama}`)
};

// * Arrow Function
const greeting = (name) => {
  console.log(`Halo ${name}`)
}

const settings = {
  "theme":"dark",
  "fontSize":"14px",
  "sidebar":true
};

const {theme,fontSize,sidebar} = settings;
// console.log(`Theme: ${theme} Fontsize: ${fontSize} Sidebar: ${sidebar}`)

const getTheme = (settings) => {
  const data = `Theme ${settings.theme} FontSize: ${settings.fontSize} Sidebar: ${sidebar}`
  console.log(data);
  return data;
};
getTheme(settings);


apakah seperti itu? tolong berikan arahan tapi jangan beresin kodenya sebelum saya menyerah
```

1. Tantangan Scope (Lingkup Variabel) ⚠️
Coba perhatikan fungsi getTheme kamu di baris ini:

JavaScript

const data = `Theme ${settings.theme} ... Sidebar: ${sidebar}`
Kamu memanggil sidebar langsung. Pertanyaannya: Dari mana variabel sidebar itu datang?

Jawabannya: Dia mengambil dari const {sidebar} = settings di baris 17 (di luar fungsi).

Masalahnya: Kalau baris const {theme,fontSize,sidebar} dihapus, fungsimu ERROR.

Clean Code: Fungsi yang baik itu mandiri (pure). Dia harusnya cuma peduli sama apa yang dikirim lewat parameter (settings), jangan ngambil dari luar.

Tugas: Pastikan sidebar juga diambil dari parameter settings, bukan dari variabel global.

1. Destructuring di Parameter (React Style) 💡
Di soal nomor 3, saya minta: "lakukan destructuring di parameter". Saat ini kamu melakukan:

JavaScript

const getTheme = (settings) => { ... }
Kamu masih menerima paket utuh bernama settings, baru "dibongkar" manual pakai settings.theme.

Petunjuk: Di Javascript ES6, kita bisa membongkar paketnya langsung di dalam kurung (). Jadi, daripada (settings), kita bisa langsung tulis kurung kurawal { ... } di situ.

Clue: Coba cari referensi tentang "Destructuring inside function arguments". Tujuannya agar di dalam fungsi, kamu tidak perlu lagi nulis settings.theme, tapi cukup theme.

3. Implicit Return (Seni Satu Baris) ✨
Lihat fungsi pertamamu:

JavaScript

const greeting = (name) => {
  console.log(`Halo ${name}`)
}
Ini benar. Tapi Arrow Function punya fitur sakti: Kalau isinya cuma satu baris, kurung kurawal {} boleh dibuang. Kalau {} dibuang, dia otomatis me-return nilai tersebut (disebut Implicit Return).

🔥 Tantangan Perbaikan (Revisi)
Coba perbaiki kode getTheme kamu dengan aturan ini:

Hapus variabel global (baris 17).

Ubah parameter fungsi getTheme. Jangan pakai kata settings di dalam kurung, tapi langsung bongkar object-nya di situ.

Di dalam console.log atau return, kamu harusnya tidak perlu lagi mengetik settings.blabla. Langsung nama propertinya saja.

Silakan dicoba lagi! Kalau mentok, bilang "nyerah" ya, nanti saya kasih contoh sintaksnya. Semangat!
