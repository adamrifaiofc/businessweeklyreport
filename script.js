// Fungsi untuk mengubah data menjadi format CSV
function convertToCSV(data) {
    // Ambil header dari kunci objek pertama
    const headers = Object.keys(data[0]).join(",");
    // Gabungkan header dengan setiap baris data
    const rows = data.map(row => Object.values(row).join(","));
    // Gabungkan header dan data menjadi string CSV
    return [headers, ...rows].join("\n");
}

// Fungsi untuk mengekspor data sebagai file CSV
function exportDataToCSV(data, filename = "business_weekly_report.csv") {
    const csvContent = convertToCSV(data); // Konversi data ke CSV
    const blob = new Blob([csvContent], { type: "text/csv" }); // Buat file Blob
    const url = URL.createObjectURL(blob); // Buat URL untuk file Blob

    // Buat elemen <a> untuk mengunduh file
    const link = document.createElement("a");
    link.href = url;
    link.download = filename; // Nama file yang diunduh
    link.click(); // Trigger klik untuk memulai unduhan

    // Bersihkan URL Blob setelah selesai
    URL.revokeObjectURL(url);
}

// Contoh data dummy untuk diunduh sebagai CSV
const sampleData = [
    { Date: "2024-01-01", Revenue: "Rp350.000", Transactions: 150, HealthScore: 50 },
    { Date: "2024-01-02", Revenue: "Rp425.000", Transactions: 75, HealthScore: 60 },
    { Date: "2024-01-03", Revenue: "Rp275.000", Transactions: 125, HealthScore: 30 },
    { Date: "2024-01-04", Revenue: "Rp430.000", Transactions: 115, HealthScore: 75 },
    { Date: "2024-01-05", Revenue: "Rp465.000", Transactions: 135, HealthScore: 50 },
    { Date: "2024-01-06", Revenue: "Rp355.000", Transactions: 145, HealthScore: 40 },
    { Date: "2024-01-07", Revenue: "Rp50.012.000", Transactions: 175, HealthScore: 90 },
];

// Tambahkan event listener ke tombol export
document.getElementById("exportBtn").addEventListener("click", () => {
    // Panggil fungsi export dengan data dan nama file
    exportDataToCSV(sampleData, "business_weekly_report.csv");
});
