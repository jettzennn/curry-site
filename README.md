# Curry Site

Landing page bertema Stephen Curry (Golden State Warriors), dibuat dengan HTML, CSS, dan JavaScript murni. Tanpa framework dan tanpa build tool, jadi bisa diedit dan dijalankan langsung di HP lewat Acode.

Terinspirasi dari tren "HTML tanpa CSS" (before/after), dengan desain dark cinematic.

## Fitur

- Hero dengan judul "CURRY" raksasa dan foto cutout Curry di depannya (layering)
- Navbar pill efek kaca (glassmorphism)
- Galeri 2 baris foto (14 foto) dengan efek glow dan marquee
- Section "Tiga Sisi Curry": 3 kartu (The Shooter, The Champion, The Playmaker)
- Animasi blur-in saat halaman dibuka dan saat scroll
- Responsive: mobile, tablet, desktop
- Seluruh teks berbahasa Indonesia

## Struktur Folder

```
curry-site/
├── index.html
├── README.md
├── css/
│   ├── variables.css
│   ├── base.css
│   ├── navbar.css
│   ├── hero.css
│   ├── gallery.css
│   ├── cards.css
│   └── footer.css
├── js/
│   └── main.js
└── images/
    ├── hero-bg.jpg
    ├── curry-cutout.png
    ├── gallery/
    │   └── g1.jpg ... g14.jpg
    └── cards/
        └── c1.jpg, c2.jpg, c3.jpg
```

## Daftar Gambar

Nama file harus persis sama (huruf kecil, tanpa spasi), karena kode memanggil nama ini.

| File | Format | Ukuran ideal | Keterangan |
|---|---|---|---|
| `images/hero-bg.jpg` | JPG | 1920x1080 | Background hero (arena/penonton, gelap) |
| `images/curry-cutout.png` | PNG | tinggi 1500px ke atas | Foto Curry tanpa background |
| `images/gallery/g1.jpg` - `g14.jpg` | JPG | sekitar 600x800 (3:4) | Foto galeri, potret |
| `images/cards/c1.jpg` - `c3.jpg` | JPG | sekitar 800x600 (4:3) | Foto kartu sisi, landscape |

Ukuran tidak harus persis. Gambar otomatis dipotong dengan `object-fit: cover`. Jangan hanya mengganti ekstensi file; convert dulu ke format yang benar.

### Susunan Galeri

| File | Isi |
|---|---|
| `g1` | Tembakan samping, full body, biru |
| `g2` | Dribble, full body, biru |
| `g3` | Selebrasi, setengah badan, putih |
| `g4` | Angkat trofi, setengah badan, biru |
| `g5` | Medali Olimpiade, setengah badan, Team USA |
| `g6` | Layup/drive, full body, putih |
| `g7` | Close-up wajah saat menembak, biru |
| `g8` | Umpan, full body, biru |
| `g9` | Tos bareng rekan, setengah badan, putih |
| `g10` | Tunnel walk, full body, santai |
| `g11` | Selebrasi bareng penonton, City Edition |
| `g12` | Tembakan sudut miring, hitam/biru |
| `g13` | Masa Davidson, jersey merah nomor 30 |
| `g14` | Foto malam, lampu arena, biru |

### Kartu Sisi

| File | Sisi | Pose |
|---|---|---|
| `c1` | The Shooter | Tembakan tiga angka dari jauh |
| `c2` | The Champion | Angkat trofi / konfeti juara |
| `c3` | The Playmaker | Dribble atau umpan, kepala tegak |

## Cara Menjalankan di HP

1. Buka aplikasi **Acode**.
2. Buka folder `curry-site` (Internal storage).
3. Buka `index.html`, lalu tekan tombol **Preview** (ikon play).
4. Edit file CSS atau JS, simpan, lalu refresh preview.

Kalau gambar tidak muncul, cek nama file dan folder. Kartu yang gambarnya belum ada tetap tampil dengan gradient biru sebagai cadangan.

## Design Tokens

| Variabel | Nilai | Dipakai untuk |
|---|---|---|
| `--bg` | `#0b1020` | Background halaman |
| `--surface` | `#121a33` | Background kartu |
| `--blue` | `#1D428A` | Warna utama |
| `--yellow` | `#FFC72C` | Aksen (hover, border) |
| `--text` | `#ffffff` | Teks utama |
| `--muted` | `#b8c0d9` | Teks sekunder |

Font: Poppins (Google Fonts), weight 400, 600, 700, 800.

## Troubleshooting

**Animasi hero tidak terlihat.**
Animasi masuk hero hanya berjalan sekali saat halaman dibuka. Tekan refresh dan lihat layar langsung. Cek juga mode hemat baterai atau pengaturan "remove animations" di Android.

**Tampilan di HP berbeda dari laptop.**
Layar HP berbentuk portrait, sehingga judul dan cutout Curry jaraknya berjauhan. Ini normal. Bisa disesuaikan dengan media query khusus layar portrait di `css/hero.css`.

**Wajah terpotong di kartu.**
Tambahkan `object-position: center 20%` pada gambar di `css/gallery.css` dan `css/cards.css`.

**Gambar tidak muncul.**
Pastikan nama file persis sama, huruf kecil, dan ekstensinya sesuai (`.jpg`, kecuali cutout yang `.png`).

## Catatan Hak Cipta

Foto pemain NBA adalah milik fotografer atau media yang bersangkutan. Proyek ini dibuat untuk latihan dan portofolio pribadi. Jika akan dipublikasikan atau dipakai komersial, gunakan foto berlisensi (misalnya Wikimedia Commons dengan lisensi CC, dengan mencantumkan kredit) atau ilustrasi buatan sendiri. Periksa kembali keakuratan semua keterangan (gelar, rekor, tahun) sebelum dipublikasikan.

## Tech Stack

- HTML5
- CSS3 (dipisah per section)
- JavaScript vanilla (IntersectionObserver untuk scroll reveal)
- Google Fonts (Poppins)
