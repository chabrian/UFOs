// import the data from data.js
const tableData = data;


// reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // clear existing table data
    tbody.html("");

    // loop through each object in data 
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        let row = tbody.append("tr");

        // loop through each field in the dataRow
        // and add each value as a table cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}