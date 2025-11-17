# Mini Project Web : Sistem Manajemen Produk

Nama: Siti Triyana  
NIM: 24090098

## Link Project

GitHub Repository: https://github.com/sttryanaa/uts-sititriyana-24090098/

GitHub Pages (Live Preview):  https://sttryanaa.github.io/uts-sititriyana-24090098/

## Struktur Folder Project

uts-web/ 
├── index.html -> halaman login          
├── dashboard.html -> halaman dashboard
├── products.html -> halaman daftar produk      
├── css/ 
│   └── style.css 
├── js/ 
│   └── script.js 
├── img/ 
│   └── login.jpg 
└── README.md 


## Deskripsi Project

Project ini merupakan aplikasi web sederhana untuk menampilkan data produk menggunakan HTML, CSS, dan JavaScript DOM Manipulation. Sistem ini terdiri dari 3 halaman utama:


## 1. Login Page — 'index.html'
- Memasukkan Email & Password (NIM)
- Validasi input (tidak boleh kosong)
- Jika valid -> redirect ke Dashboard
- Dibuat sederhana tanpa backend (dummy validation)


## 2. Dashboard Page — 'dashboard.html'
- Menampilkan ringkasan data produk:
  - Total Produk
  - Total Penjualan
  - Total Pendapatan
- Data diisi via JavaScript (dummy data)
- Card 'Total Products' bisa diklik menuju daftar produk


## 3. Product Page — 'products.html'
- Menampilkan tabel daftar produk
- Data dimunculkan menggunakan JavaScript (DOM)
- Tersedia tombol:
  - Edit -> menampilkan alert info edit
  - Delete -> menghapus baris produk
- Tidak ada backend (data tidak tersimpan permanen)


## Technologie yang Digunakan
- HTML5
- CSS3 (responsive layout)
- JavaScript (DOM Manipulation)
- Google Material Symbols


## Cara Menjalankan
1. Buka file GitHub Pages
2. Halaman akan langsung terbuka di index.html
2. Masukkan email dan password
3. Klik Login -> masuk dashboard
4. Klik Total Products -> menuju daftar produk
5. Coba tombol Edit & Delete di tabel


## Fitur DOM yang Ditunjukkan
- addEventListener()
- textContent
- innerHTML
- appendChild()
- remove()
- prompt() dan alert()
