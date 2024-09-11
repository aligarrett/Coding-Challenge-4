// Task 1: Create an Inventory Array of Product Objects

let Inventory = [
    {
        name: "Necklace",
        price: 250.00,
        quantity: 30,
        lowStockLevel: 10
    },
    {
        name: "Ring",
        price: 50.00,
        quantity: 25,
        lowStockLevel: 10
    },
    {
        name: "Earrings",
        price: 100.00,
        quantity: 20,
        lowStockLevel: 10
    },
    {
        name: "Bracelet",
        price: 125.00,
        quantity: 15,
        lowStockLevel: 5
    },
    {
        name: "Anklet",
        price: 75.00,
        quantity: 10,
        lowStockLevel: 5
    }
]

// Results
console.log(Inventory);

// Task 2: Create a Function to Display Product Details

function displayProductDetails (product) {
    console.log (`Product Name: ${product.name}`);
    console.log (`Price: $${product.price}`);
    console.log (`Quanitity in Stock: ${product.quantity}`);

// Check stock status with tenary operator

let stockStatus = product.quantity <= product.lowStockLevel ? "Low Stock" : "In Stock";
console.log(`Stock Status: ${stockStatus}`);

}
// Results
displayProductDetails(Inventory[0]);