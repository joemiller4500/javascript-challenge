// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");
var tbody = d3.select("tbody");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter(event) {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    // Print the value to the console
    console.log(inputValue);

    function filterDate(dataset) {
        return dataset.datetime === inputValue;
    }
    
    var filteredValues = data.filter(filterDate);
    var colDates = filteredValues.map(entry =>entry.datetime);

    // console.log(filteredValues);
    // console.log(colDates);

    filteredValues.forEach((dataPoint) => {
        var row = tbody.append("tr");
        Object.entries(dataPoint).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
