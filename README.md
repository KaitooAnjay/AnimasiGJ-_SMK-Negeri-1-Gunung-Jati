# HIMASANTIKA UMC

Website profil dan dokumentasi kegiatan Himpunan Mahasiswa Jurusan Teknik Informatika Universitas Muhammadiyah Cirebon.

## Konsep Desain

Website menggunakan konsep visual organisasi mahasiswa yang modern, informatif, dan mudah dipindai:

- Hero section memakai foto kegiatan `Mengenal Organisasi Teknik Informatika 2025` sebagai pengenalan utama organisasi.
- Identitas HIMASANTIKA dan PERMIKOMNAS ditampilkan pada area hero serta logo HIMASANTIKA digunakan pada navigation bar.
- Palet warna mengikuti identitas HIMASANTIKA: biru tua `#101869`, merah bata `#C3503B`, putih `#F9F9FB`, dan charcoal `#1A1A24`.
- Section dibuat berurutan untuk memperkenalkan organisasi, tujuan, dokumentasi kegiatan, divisi/lembaga, dan kontak.
- Card divisi dapat diklik untuk menampilkan detail tugas setiap divisi dengan animasi expand/collapse.
- Dokumentasi kegiatan menggunakan grid responsif, filter kategori, dan lightbox untuk melihat foto dalam ukuran lebih besar.
- Animasi page-load, hover, focus, filter, dan lightbox dibuat halus serta memiliki dukungan `prefers-reduced-motion` untuk kenyamanan aksesibilitas.

## Teknologi yang Digunakan

- **HTML5** untuk struktur halaman, navigasi, section, card, galeri, dan elemen aksesibilitas.
- **CSS3** untuk layout responsif, CSS variables, palet warna, animasi, transisi, grid, dan media query.
- **JavaScript vanilla** untuk hamburger menu, expand/collapse card divisi, filter galeri, lightbox, navigasi foto, dan keyboard interaction.
- **Google Fonts** menggunakan keluarga font Inter.
- **Format aset** PNG untuk logo dan JPG untuk foto dokumentasi.

Website ini tidak menggunakan framework JavaScript atau library eksternal, sehingga tidak membutuhkan `npm install` maupun `package.json`.

## Menjalankan Secara Lokal

### Prasyarat

- Git, jika ingin mengambil project dari GitHub.
- Browser modern seperti Chrome, Edge, atau Firefox.
- Python 3 atau VS Code Live Server untuk menjalankan server lokal.

### Dengan Git dan Python

1. Clone repository:

	```bash
	git clone https://github.com/KaitooAnjay/AnimasiGJ-_SMK-Negeri-1-Gunung-Jati.git
	```

2. Masuk ke folder project:

	```bash
	cd AnimasiGJ-_SMK-Negeri-1-Gunung-Jati
	```

3. Jalankan server lokal:

	```bash
	python -m http.server 8000
	```

4. Buka alamat berikut di browser:

	```text
	http://localhost:8000
	```

5. Hentikan server dengan menekan `Ctrl + C` pada terminal.

### Dengan VS Code Live Server

1. Buka folder project di VS Code.
2. Pasang extension **Live Server** jika belum tersedia.
3. Klik kanan file `index.html`.
4. Pilih **Open with Live Server**.
5. Website akan terbuka otomatis pada browser.

## Struktur Utama

```text
index.html              Struktur halaman dan konten website
style.css               Styling, responsive layout, dan animasi
script.js               Interaksi menu, card, galeri, dan lightbox
Assets/                 Logo divisi dan foto kegiatan
HIMASANTIKA/            Logo utama, logo PERMIKOMNAS, dan dokumen profil
```
