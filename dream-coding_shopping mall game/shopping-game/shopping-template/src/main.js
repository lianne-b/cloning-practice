"use strict";

// Data should be stored separately from codes (In this case: in the data folder, stored in JSON format)

// Fetch the items from the JSON file
function loadItems() {
    return fetch("data/data.json") // fetch data
    .then(response => response.json()) // convert data to json
    .then(json => json.items); // return items from json
}

// Update the list with the given items into HTML
function displayItems(items) {
    const container = document.querySelector(".items");
    container.innerHTML = items.map(item => creatHTMLString(item)).join("");
}

// Creat HTML list from the given data item
function creatHTMLString(items) {
    return `
    <li class="item">
        <img src="${items.image}" alt="${items.type}" class="item__thumbnail" />
        <span class="item__description">${items.gender}, ${items.size}</span>
    </li>
    `;
} 


function setEventListeners(items) {
    const logo = document.querySelector(".logo");
    const buttons = document.querySelector(".buttons");
    logo.addEventListener("click", () => displayItems(items));
    buttons.addEventListener("click", event => onButtonClick(event, items));
}

// Handle button click
function onButtonClick(event, items) {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;

    if (key == null || value == null) {
        return; // end the function when no data is inside
    }

    const filtered = items.filter(item => item[key] === value);
    displayItems(filtered);
}

// main function
loadItems()
.then(items => {
    displayItems(items);
    setEventListeners(items);
})
.catch(console.log);