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

// Creating a button for filtering data
function handleClick() {
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  };

  // Rebuild the table using the filtered data
  // NOTE: if no date was entered, then filteredData will just
  // be the original tableData.
  buildTable(filteredData);
};

// Linking our code to the filter button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the unfiltered table when the page loads
buildTable(tableData);