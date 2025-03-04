document.getElementById('load-btn').addEventListener('click', function() {
    const fileInput = document.getElementById('csv-file');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(event) {
            const contents = event.target.result;
            parseCSV(contents);
        };

        reader.readAsText(file);
    } else {
        alert("Please select a CSV file.");
    }
});

function parseCSV(csvData) {
    const rows = csvData.split('\n');
    const tableBody = document.querySelector('#health-table tbody');

    // Clear existing table rows
    tableBody.innerHTML = '';

    rows.forEach((row, index) => {
        if (index === 0) return;  // Skip header row

        const cells = row.split(',');
        const Health_Status = cells[0];
        const Temperature = cells[1];
        const BPM = cells[2];
        const SpO2 = cells[3];

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${Health_Status}</td>
            <td>${Temperature}</td>
            <td>${BPM}</td>
            <td>${SpO2}</td>
        `;
        tableBody.appendChild(tr);
    });
}
