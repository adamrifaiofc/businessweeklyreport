# Business Weekly Report

**Business Weekly Report** adalah sebuah dashboard berbasis web yang dirancang untuk menganalisis performa bisnis mingguan. Aplikasi ini memanfaatkan data dari Google Spreadsheet untuk menampilkan berbagai metrik penting seperti total revenue, rata-rata transaksi, tren bisnis, serta detail harian.

---

## 🚀 Fitur Utama

1. **Executive Summary**:
   - Menampilkan ringkasan laporan mingguan, termasuk total revenue, rata-rata transaksi, prediksi revenue hari ke-8, dan tren bisnis.

2. **Detail Harian**:
   - Menyediakan detail data harian seperti revenue, jumlah transaksi, health score, insight, dan catatan.

3. **Integrasi Google Spreadsheet**:
   - Data diambil langsung dari Google Spreadsheet dalam format CSV untuk kemudahan pembaruan data.

4. **Live Server**:
   - Mendukung live reload menggunakan Visual Studio Code dan ekstensi Live Server untuk mengembangkan dan men-debug secara real-time.

---

## 📂 Struktur Proyek

```
businessweeklyreport-main/
├── index.html      # Halaman utama dashboard
├── script.js       # Logika untuk fetching data dan rendering ke halaman
├── style.css       # Styling untuk tampilan dashboard
├── assets/         # Folder opsional untuk menyimpan gambar atau file tambahan
```

---

## 🛠️ Cara Instalasi dan Penggunaan

### 1. **Clone Repository**
Unduh repository ini ke komputer lokal Anda menggunakan perintah berikut:
```bash
git clone https://github.com/adamrifaiofc/businessweeklyreport.git
```

### 2. **Buka Proyek di VS Code**
1. Jalankan Visual Studio Code.
2. Pilih **File > Open Folder** dan pilih folder `businessweeklyreport-main`.

### 3. **Jalankan Live Server**
1. Pastikan Anda telah menginstal ekstensi **Live Server** di Visual Studio Code.
2. Klik kanan pada file `index.html` dan pilih **Open with Live Server**.
3. Browser akan terbuka secara otomatis di URL seperti:
   ```
   http://127.0.0.1:5500
   ```

---

## 🌐 Integrasi Google Spreadsheet

### Langkah-Langkah:
1. **Buka Google Spreadsheet**:
   - Pastikan data Anda berada di Google Spreadsheet.
2. **Bagikan Spreadsheet Secara Publik**:
   - Klik tombol **Share** di kanan atas.
   - Pilih **Anyone with the link** dan atur izin ke **Viewer**.
3. **Salin URL Spreadsheet**:
   - Pastikan URL mengikuti format berikut:
     ```
     https://docs.google.com/spreadsheets/d/<SPREADSHEET_ID>/pub?output=csv
     ```
4. **Update URL di `script.js`**:
   - Buka file `script.js` dan temukan variabel `spreadsheetUrl`:
     ```javascript
     const spreadsheetUrl = "https://docs.google.com/spreadsheets/d/<SPREADSHEET_ID>/pub?output=csv";
     ```
   - Ganti `<SPREADSHEET_ID>` dengan ID Spreadsheet Anda.

---

## 🐞 Debugging

### 1. **Periksa Konsol Browser**
- Tekan `F12` di browser untuk membuka Developer Tools.
- Pergi ke tab **Console** untuk melihat log debugging, seperti:
  ```javascript
  console.log("Data fetched:", data);
  ```

### 2. **Pastikan URL Spreadsheet Valid**
- Buka URL Spreadsheet di browser untuk memastikan dapat diakses tanpa login.

### 3. **Periksa File di Folder**
- Pastikan semua file (`index.html`, `script.js`, `style.css`) berada di folder yang benar.

---

## 📈 Contoh Data Google Spreadsheet

Berikut adalah contoh struktur data yang digunakan:
| Date       | Revenue   | Transaksi | Health Score | Insight        | Catatan       |
|------------|-----------|-----------|--------------|----------------|---------------|
| 2025-04-01 | 5000000   | 50        | 85%          | Positif        | Penjualan baik|
| 2025-04-02 | 4500000   | 45        | 80%          | Negatif        | Cuaca buruk   |

---

## 🤝 Kontribusi

Kami menyambut kontribusi dari siapa pun! Untuk berkontribusi:
1. Fork repository ini.
2. Buat branch baru untuk fitur/bugfix Anda:
   ```bash
   git checkout -b feature-name
   ```
3. Commit perubahan Anda:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push branch Anda:
   ```bash
   git push origin feature-name
   ```
5. Buat Pull Request di GitHub.

---

## 📜 Lisensi

Proyek ini menggunakan lisensi **MIT License**. Anda dapat membaca detail lisensinya di file `LICENSE`.

---

## 📧 Kontak

Jika Anda memiliki pertanyaan, saran, atau masalah, silakan hubungi:
- **Email**: adamrifaiofc@example.com
- **GitHub**: [adamrifaiofc](https://github.com/adamrifaiofc)
