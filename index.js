let myLeads = []; // Array to store leads
let oldLeads = []; // Array to store old leads
const inputEl = document.getElementById("input"); // Input element
const inputbtn = document.getElementById("input-btn"); // Button element
const ulEl = document.getElementById("ul-el"); // Unordered list element
const deleteBtn = document.getElementById("delete-btn"); // Delete button element
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")); // Retrieve leads from local storage
const tabBtn = document.getElementById("save-btn"); // Tab button element

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage; // If leads exist in local storage, assign them to myLeads
  renderLeads(myLeads); // Render the leads
}

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url); // Add the URL of the first tab to myLeads
    localStorage.setItem("myLeads", JSON.stringify(myLeads)); // Store the leads in local storage
    renderLeads(myLeads); // Render the leads
  });
});

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear(); // Clear local storage
  myLeads = []; // Clear the myLeads array
  renderLeads(myLeads); // Render the leads again
});

inputbtn.addEventListener("click", function () {
  myLeads.push(inputEl.value); // Add a new lead to the array
  inputEl.value = ""; // Clear the input field

  localStorage.setItem("myLeads", JSON.stringify(myLeads)); // Store the leads in local storage

  renderLeads(myLeads);
});

function renderLeads(leads) {
  let listItems = ""; // Variable to store list items

  for (let i = 0; i < leads.length; i++) {
    listItems += `
      <li>
        <a target='_blank' href='${leads[i]}'>${leads[i]}</a>
      </li>
    `;
  }

  ulEl.innerHTML = listItems; // Set the inner HTML of the unordered list to the list items
}
