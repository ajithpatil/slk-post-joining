// step 1: sample menu items data
const menuItems = [
    { name: "Dosa", description: "Sour N Crepa", price: "$60" },
    { name: "IDLI", description: "Fermented Steam Riceball", price: "$45" },
    // Add more menu items as needed
];

//step 2: creating a Function to display menu items
function displayMenu() {
    const menuSection = document.getElementById("menu");
    menuItems.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.innerHTML = `
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <p>${item.price}</p>
            <button class="add-to-order">Add to Order</button>
        `;
        menuSection.appendChild(menuItem);
    })
}

// Step 3: Call the function to display menu items
displayMenu();