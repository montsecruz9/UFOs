// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Building our table of UFO sightings
function buildTable(data) {
    tbody.html("");
  // Loop through each object (UFO sighting) in the array. 
  // Append a row to the HTML table.
  // Add each value from the object into a cell.
  data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
    }
    );
  });
}