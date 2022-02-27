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

function handleClick() {
    // grab the datetime value from the filter input
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // check if date was entered and filter accordingly
    if (date) {
        // apply 'filter' to the table to only keep rows where 'datetime' matches
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // rebuild the table with the filtered data
    // @NOTE: if no date was entered, filteredData will be original tableData
    buildTable(filteredData);
}

// applies filter when the filter-btn HTML component is clicked
d3.selectAll("#filter-btn").on("click", handleClick);

// builds table when website is first loaded
buildTable(tableData);