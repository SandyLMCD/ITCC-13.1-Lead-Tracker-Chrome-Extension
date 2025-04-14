let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]; // Array to store leads
const inputEl = document.getElementById("input"); // Input element
const inputbtn = document.getElementById("input-btn"); // Button element
const ulEl = document.getElementById("ul-el"); // Unordered list element

inputbtn.addEventListener("click", function() {
    myLeads.push(inputEl.value); // Add a new lead to the array
    console.log(myLeads); // Log the array to the console
})

let listItems = ""; // Variable to store list items

for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>"; // Append each lead to the unordered list
}

ulEl.innerHTML = listItems; // Set the inner HTML of the unordered list to the list items

//timestamp: 5:24:02 