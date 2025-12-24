**Nice try\!** Logic kamu sudah benar, flow `useState`-nya juga sudah tepat.

Tapi... ada satu **"Jebakan Batman"** yang kamu injak di sini. Ini kesalahan paling umum saat programmer JS pindah ke React.

### 🔍 Koreksi: Template Literals vs JSX

Coba lihat baris ini di kodemu:

```javascript
<h1>Hello dek saya adalah seorang ${name}</h1>
```

Kalau kamu jalankan di browser, hasilnya di layar akan tertulis mentah-mentah:
**"Hello dek saya adalah seorang ${name}"** (Namanya tidak muncul).

**Kenapa?**

  * `${name}` itu sintaks untuk **Template Literals** (String yang pakai backtick `` `...` ``).
  * Di **JSX** (bahasa markup React), kita tidak pakai backtick untuk teks biasa.
  * Untuk memanggil variabel JS di dalam JSX, kita CUKUP pakai **Kurung Kurawal `{}`**.

**Perbaikan:**

```javascript
// ❌ Salah (ini dianggap teks biasa):
<h1>Hello dek saya adalah seorang ${name}</h1>

// ✅ Benar (React Style):
<h1>Hello dek saya adalah seorang {name}</h1>
```

*Ingat: Di dalam JSX, kurung kurawal `{}` adalah portal magis untuk kembali ke dunia Javascript.*

-----

### ✅ Status Check Hari 4

Apakah kamu sudah berhasil menjalankan perintah `npm create vite@latest` dan melihat hasilnya di browser (localhost)?

Kalau kodemu sudah jalan di browser (dengan perbaikan `{name}` tadi), berarti instalasi sukses. Kita bisa lanjut.

-----

### 📅 Hari 5: JSX Anatomy (Bedah Jantung React)

Hari ini kita akan membedah **JSX**. Banyak yang bilang JSX itu HTML, padahal **BUKAN**.
JSX = *JavaScript XML*. Itu adalah JavaScript yang menyamar jadi HTML.

Karena dia JavaScript, ada aturan ketat yang tidak ada di HTML biasa. Kalau melanggar, aplikasimu error (layar putih/blank).

#### 📜 3 Hukum Utama JSX

**1. The Root Element (Hukum Satu Bungkus)**
Di HTML biasa, kamu bisa nulis begini:

```html
<h1>Judul</h1>
<p>Paragraf</p>
```

Di React (JSX), fungsi **HARUS** mengembalikan **SATU** elemen pembungkus.
**❌ Salah:**

```javascript
return (
  <h1>Judul</h1>
  <p>Paragraf</p>
)
```

**✅ Benar (Dibungkus `div`):**

```javascript
return (
  <div>
    <h1>Judul</h1>
    <p>Paragraf</p>
  </div>
)
```

**✅ Benar (Dibungkus Fragment - Lebih Clean):**
Kalau kamu tidak mau nambah `div` sampah di DOM, pakai Fragment kosong `<> ... </>`.

```javascript
return (
  <>
    <h1>Judul</h1>
    <p>Paragraf</p>
  </>
)
```

**2. CamelCase Attributes (Hukum Penamaan)**
Ingat, ini JS, bukan HTML.

  * `class` (HTML) ➡️ ganti jadi **`className`** (JSX). (Karena `class` itu keyword bikin Class di JS).
  * `onclick` (HTML) ➡️ ganti jadi **`onClick`** (Huruf besar di kata kedua).
  * `for` (Label HTML) ➡️ ganti jadi **`htmlFor`**.

**3. Close Every Tag (Hukum Menutup Diri)**
Di HTML, tag `<br>` atau `<img>` atau `<input>` sering dibiarkan terbuka.
Di JSX, **HARAM** hukumnya tag terbuka. Semua harus ditutup.

  * ❌ `<img src="...">`
  * ✅ `<img src="..." />` (Self-closing tag).
  * ✅ `<br />`

-----

### 📝 Tugas Hari 5 (Fix the Broken Code)

Saya punya kode komponen yang **RUSAK PARAH** (Banyak error). Tugasmu adalah memperbaikinya agar bisa jalan di React.

Tulis ulang kode di bawah ini agar memenuhi **3 Hukum Utama JSX**:

```javascript
function UserProfile() {
  const username = "Budi Doremi";
  const avatar = "https://i.pravatar.cc/150";

  return (
    <div class="card">
      <img src={avatar} class="photo">

      <div class="info">
        <h2 style="color: red;">Profile: {username}</h2>
        <br>
        <p>Status: <b>Active</b></p>

        <label for="input-bio">Bio:</label>
        <input id="input-bio" type="text" placeholder="Tulis bio...">
      </div>

      <button onclick={() => alert('Saved!')}>Simpan</button>
    </div>
  )
}
```

**Clue Perbaikan:**

1.  Cek atribut `class`.
2.  Cek tag `img`, `br`, dan `input` (apakah sudah ditutup?).
3.  Cek atribut `onclick` dan `for`.
4.  Cek `style` (ini tricky, di React `style` butuh object, bukan string `"color: red;"`). *Coba cari tahu caranya: "React inline style syntax".*

Silakan perbaiki kodenya dan kirim ke sini\! 🛠️
