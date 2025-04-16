let myLeads = []; // Array to store leads
const inputEl = document.getElementById("input"); // Input element
const inputbtn = document.getElementById("input-btn"); // Button element
const ulEl = document.getElementById("ul-el"); // Unordered list element

inputbtn.addEventListener("click", function () {
  myLeads.push(inputEl.value); // Add a new lead to the array
  inputEl.value = ""; // Clear the input field
  renderLeads();
});

function renderLeads() {
  let listItems = ""; // Variable to store list items

  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
      <li>
        <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
      </li>
    `;
  }

  ulEl.innerHTML = listItems; // Set the inner HTML of the unordered list to the list items
}
