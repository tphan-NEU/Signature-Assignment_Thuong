// Target Element
const dateElement = document.getElementById('current-date');

// Populate Current Date
const currentDate = new Date();

// Date)
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString(undefined, options);

// Display the date
dateElement.textContent = formattedDate;