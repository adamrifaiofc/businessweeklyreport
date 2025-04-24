// URL Google Spreadsheet dalam format CSV
const spreadsheetUrl = "https://docs.google.com/spreadsheets/d/12lMzDGZ0f3ZNCRuGxPjCU4d51nAj9T8t2qkkrgnYUik/pub?output=csv";

// Fungsi untuk mengambil data dari Google Spreadsheet
async function fetchDataFromSpreadsheet() {
    try {
        console.log("Fetching data from Google Spreadsheet...");
        const response = await fetch(spreadsheetUrl);

        // Periksa jika respons gagal
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const csvText = await response.text();

        return new Promise((resolve, reject) => {
            Papa.parse(csvText, {
                header: true,
                skipEmptyLines: true,
                complete: (result) => resolve(result.data),
                error: (error) => reject(error),
            });
        });
    } catch (error) {
        console.error("Gagal mengambil data dari Google Spreadsheet:", error);
        alert("Gagal memuat data. Periksa koneksi internet atau pengaturan spreadsheet.");
        throw error;
    }
}

// Fungsi untuk memperbarui dashboard
async function updateDashboard() {
    try {
        const data = await fetchDataFromSpreadsheet();

        // Pisahkan data menjadi summary dan detail harian
        const summaryData = data.find(row => row["Periode"]); // Baris summary
        const dailyData = data.filter(row => row.Date); // Baris harian

        // Update bagian Executive Summary
        if (summaryData) updateExecutiveSummary(summaryData);

        // Update bagian Detail Harian
        if (dailyData.length > 0) updateDailyDetails(dailyData);

        console.log("Dashboard berhasil diperbarui!");
    } catch (error) {
        console.error("Gagal memperbarui dashboard:", error);
    }
}

// Panggil fungsi untuk memperbarui dashboard saat halaman dimuat
document.addEventListener("DOMContentLoaded", updateDashboard);
