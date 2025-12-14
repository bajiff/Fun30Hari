**Mantap jiwa\! 💯**

Kamu bukan cuma memperbaiki errornya, tapi kamu juga **meng-upgrade** kodenya pakai `useState`. Inisiatif yang sangat bagus\! Itu mental developer yang saya suka.

Mari kita checklist perbaikanmu:

  * ✅ `class` sudah jadi `className`.
  * ✅ `onclick` sudah jadi `onClick` (camelCase).
  * ✅ `for` sudah jadi `htmlFor`.
  * ✅ Tag `img`, `br`, `input` sudah ditutup semua (`/>`).
  * ✅ **Inline Style:** Kamu berhasil memecahkan teka-teki style\! Kamu pakai object `{{ color: "red" }}` dan variabel object `statusFontStyles`. Ini biasanya bagian yang paling sering salah bagi pemula, tapi kamu langsung paham.

Kode ini sudah **Valid** dan **Production Ready**.

-----

### 📅 Hari 6: Components & Props

Fundamental JSX sudah aman. Sekarang kita masuk ke konsep paling inti di React: **Komponen & Props.**

Bayangkan React itu seperti main LEGO.

  * **Component:** Adalah satu balok LEGO (misal: satu tombol, satu kartu profil, satu navbar).
  * **App:** Adalah hasil rakitan dari banyak balok LEGO tersebut.

#### Apa itu Props?

Props (singkatan dari *Properties*) adalah cara **Parent Component** (Induk) mengirim data ke **Child Component** (Anak).

**Analogi:**

  * **Parent:** Bos.
  * **Child:** Karyawan.
  * **Props:** Kertas instruksi yang dikasih Bos ke Karyawan ("Tolong buat laporan atas nama Budi").
  * **Aturan Penting:** Karyawan **TIDAK BOLEH** mencoret-coret kertas instruksi itu (Props itu *Read-Only* / Immutable). Kalau mau ubah data, pakai State, jangan ubah Props.

#### Cara Pakai (Ingat Destructuring Hari 1\!)

**1. Di sisi Parent (Yang Mengirim):**
Mirip seperti nulis atribut HTML biasa.

```javascript
// App.jsx (Parent)
import Card from './Card';

function App() {
  return (
    <>
      <Card nama="Budi" role="Admin" />
      <Card nama="Siti" role="User" />
    </>
  )
}
```

**2. Di sisi Child (Yang Menerima):**
Kita tangkap pakai parameter fungsi.

```javascript
// Card.jsx (Child)
// Cara Kuno (Jangan dipakai):
// const Card = (props) => <h2>Halo {props.nama}</h2>

// Cara Modern (Langsung Destructuring):
const Card = ({ nama, role }) => {
  return (
    <div className="card">
      <h2>Halo, {nama}</h2>
      <p>Role kamu: {role}</p>
    </div>
  )
}
```

-----

### 📝 Tugas Hari 6 (Komponen yang Reusable)

Kita akan memecah kodemu yang tadi agar bisa dipakai ulang berkali-kali.

**Skenario:**
Kita butuh menampilkan 3 kartu user yang berbeda (Budi, Siti, Joko). Tidak mungkin kita copy-paste kode `UserProfile` 3 kali di satu file, kan? Kode jadi panjang dan kotor.

**Tugas:**

1.  Buat file baru (secara imajiner atau di VS Code-mu) bernama `UserCard.jsx`. Pindahkan kode tampilan kartu user ke sana.
2.  Ubah `UserCard` agar menerima `props`: **`username`**, **`avatar`**, dan **`status`**. (Jangan pakai `useState` di dalam Card dulu, biarkan dia jadi komponen "bodoh" yang cuma menampilkan data dari props).
3.  Buat komponen `App` (Parent). Di dalamnya, panggil `<UserCard />` sebanyak **3 kali** dengan data yang berbeda-beda.
      * User 1: Budi (Active)
      * User 2: Siti (Inactive)
      * User 3: Joko (Pending)

Coba tulis kode `App` dan `UserCard`-nya di sini. Saya ingin lihat bagaimana kamu mengirim dan menerima datanya.

*Clue: Fokus ke Destructuring di parameter `UserCard`.*
