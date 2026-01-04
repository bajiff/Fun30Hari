📝 Tugas Hari 15: The Lifecycle Lab
Kita akan buktikan teori di atas dengan mata kepala sendiri. Kita buat simulasi "Chat Room".

Instruksi:

Buat file LifecyclePractice.jsx.

Di dalamnya, buat komponen ChatRoom (Child).

Punya state pesan (string).

Mounting: Saat muncul, console.log("📡 Connected to Server").

Updating: Saat ngetik pesan, update judul tab browser (document.title = pesan).

Unmounting: Saat komponen hilang, console.log("❌ Disconnected from Server").

Di komponen utama (LifecyclePractice - Parent):

Buat tombol "Buka Chat" / "Tutup Chat".

Gunakan Conditional Rendering (showChat && <ChatRoom />) untuk memunculkan/menghilangkan komponen anak.

Tujuan: Buka Console Browser (F12).

Klik "Buka Chat" -> Harus muncul log "Connected".

Ketik sesuatu -> Judul tab browser harus berubah.

Klik "Tutup Chat" -> Harus muncul log "Disconnected".

⚠️ Catatan Penting: Di mode development (npm run dev), React 18 menjalankan useEffect 2 KALI untuk testing (Strict Mode). Jadi kalau log "Connected" muncul 2x, itu normal. Abaikan saja.

Silakan bereksperimen! Saya tunggu hasil lab-nya. 🧪👨‍🔬