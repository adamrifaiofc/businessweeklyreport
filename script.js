document.addEventListener("DOMContentLoaded", async () => {
    const spreadsheetUrl = "https://docs.google.com/spreadsheets/d/12lMzDGZ0f3ZNCRuGxPjCU4d51nAj9T8t2qkkrgnYUik/pub?output=csv";

    async function fetchData() {
        const response = await fetch(spreadsheetUrl);
        const text = await response.text();
        return new Promise((resolve, reject) => {
            Papa.parse(text, {
                header: true,
                skipEmptyLines: true,
                complete: (results) => resolve(results.data),
                error: (err) => reject(err),
            });
        });
    }

    async function updateDashboard() {
        try {
            const data = await fetchData();
            const summary = data[0]; // Example: Update from first row
            document.getElementById("totalRevenue").textContent = `Rp${summary["Total Revenue"] || 0}`;
            document.getElementById("totalTransactions").textContent = summary["Total Transaksi"] || 0;
            document.getElementById("avgRevenue").textContent = `Rp${summary["Rata-rata Revenue"] || 0}`;
            document.getElementById("avgHealthScore").textContent = summary["Health Score"] || 0;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    await updateDashboard();
});
