// URL Google Spreadsheet dalam format CSV
const spreadsheetUrl = "https://docs.google.com/spreadsheets/d/12lMzDGZ0f3ZNCRuGxPjCU4d51nAj9T8t2qkkrgnYUik/pub?output=csv";

// Fungsi untuk mengambil data dari Google Spreadsheet
async function fetchDataFromSpreadsheet() {
    try {
        const response = await fetch(spreadsheetUrl);
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
        throw error;
    }
}

// Fungsi untuk memperbarui bagian Executive Summary
function updateExecutiveSummary(summaryData) {
    const summarySection = document.getElementById("executiveSummary");
    summarySection.innerHTML = `
        <h3 class="text-md font-medium text-gray-700 mb-2">📅 <strong>Periode:</strong> ${summaryData["Periode"]}</h3>
        <p><strong>💰 Total Revenue:</strong> Rp${parseInt(summaryData["Total Revenue"]).toLocaleString("id-ID")}</p>
        <p><strong>🧾 Total Transaksi:</strong> ${summaryData["Total Transaksi"]} transaksi</p>
        <p><strong>📈 Rata-rata Revenue:</strong> Rp${parseInt(summaryData["Rata-rata Revenue"]).toLocaleString("id-ID")}</p>
        <p><strong>📊 Rata-rata Transaksi:</strong> ${parseFloat(summaryData["Rata-rata Transaksi"]).toFixed(2)}</p>
        <p><strong>🔼 Max Revenue:</strong> Rp${parseInt(summaryData["Max Revenue"]).toLocaleString("id-ID")}</p>
        <p><strong>🔽 Min Revenue:</strong> Rp${parseInt(summaryData["Min Revenue"]).toLocaleString("id-ID")}</p>
        <p><strong>🧮 Prediksi Revenue Hari Ke-8:</strong> Rp${parseInt(summaryData["Prediksi Revenue Hari Ke-8"]).toLocaleString("id-ID")}</p>
        <p><strong>📉 Trend Revenue:</strong> ${summaryData["Trend Revenue"]}</p>
        <p><strong>📉 Trend Transaksi:</strong> ${summaryData["Trend Transaksi"]}</p>
    `;
}

// Fungsi untuk memperbarui bagian Detail Harian
function updateDailyDetails(dailyData) {
    const dailyList = document.getElementById("dailyList");
    dailyList.innerHTML = ""; // Kosongkan daftar sebelum menambahkan item baru

    dailyData.forEach(day => {
        const listItem = document.createElement("li");
        listItem.className = "border-b pb-4";
        listItem.innerHTML = `
            <strong>📆 ${day.Date}</strong><br>
            💵 Revenue: Rp${parseInt(day.Revenue.replace(/\./g, "")).toLocaleString("id-ID")}<br>
            📈 Perubahan Revenue: ${day["Perubahan Revenue"]}<br>
            🧾 Transaksi: ${day.Transaksi}<br>
            📉 Perubahan Transaksi: ${day["Perubahan Transaksi"]}<br>
            📊 Health Score: ${day["Health Score"]}<br>
            📝 Catatan: ${day.Catatan}<br>
            🔍 Insight: ${day.Insight}
        `;
        dailyList.appendChild(listItem);
    });
}

// Fungsi untuk memperbarui dashboard
async function updateDashboard() {
    try {
        const data = await fetchDataFromSpreadsheet();

        // Pisahkan data menjadi summary dan detail harian
        const summaryData = data.find(row => row["Periode"]); // Baris yang memiliki Periode
        const dailyData = data.filter(row => row.Date); // Baris yang memiliki tanggal (harian)

        // Update Executive Summary
        if (summaryData) updateExecutiveSummary(summaryData);

        // Update Detail Harian
        if (dailyData.length > 0) updateDailyDetails(dailyData);

        console.log("Dashboard berhasil diperbarui!");
    } catch (error) {
        console.error("Gagal memperbarui dashboard:", error);
    }
}

// Panggil fungsi untuk memperbarui dashboard saat halaman dimuat
document.addEventListener("DOMContentLoaded", updateDashboard);
