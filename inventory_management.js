// Task 1: Create an Inventory Array of Product Objects

const inventory = [

{ name: 'Necklace', price: 1200, quantity: 10, lowStockLevel: 3 },
    
{ name: 'Earrings', price: 800, quantity: 5, lowStockLevel: 2 },
    
{ name: 'Ring', price: 400, quantity: 7, lowStockLevel: 1 },

{ name: 'Bracelet', price: 100, quantity: 15, lowStockLevel: 5 },
    
{ name: 'Anklet', price: 250, quantity: 3, lowStockLevel: 1 }

]

// Results
console.log(inventory);

// Task 2: Create a Function to Display Product Details

function displayProductDetails (product) {
    console.log (`Product Name: ${product.name}`);
    console.log (`Price: $${product.price}`);
    console.log (`Quantity in Stock: ${product.quantity}`);

// Check stock status with tenary operator

let stockStatus = product.quantity <= product.lowStockLevel ? "Low Stock" : "In Stock";
console.log(`Stock Status: ${stockStatus}`);

}
// Results
displayProductDetails(inventory[0]);

// Task 3: Create a Function to Update Product Stock After Sales

function updateStock (productName, unitsSold) {
    // Find product by name using find()
    let product = inventory.find(item => item.name === productName);

    // Check if product exists
    if (!product) {
        console.log (`Product "${productName}" not found.`);
        return;
    }

    // Selling more units than avaliable in stock
    if (unitsSold > product.quantity) {
        console.log (`Cannot sell ${unitsSold} units of ${productName}. Only ${product.quantity} units in stock.`);
        return;
    }
    // Subtract the sold units from current stock
    product.quantity -= unitsSold;

    // Check stock level
    if (product.quantity === 0) {
        console.log (`${product.name} is now out of stock`);
    } else if (product.quantity <= product.lowStockLevel) {
        console.log (`${product.name} is now low stock. Only ${product.quantity} left.`);
    } else {
        console.log (`${product.name} updated. ${product.quantity} units remaining.`);
    }
}
// Example:
updateStock('Necklace', 4);  // Sell 4 units of Necklace
updateStock('Earrings', 6);  // Attempt to sell more than in stock
updateStock('Ring', 2);      // Sell 2 units of Ring
updateStock('NonExistent', 2);  // Attempt to update a non-existent product

// Task 4: Create a Function to Check Low Stock Products

function checkLowStock() {
    inventory.forEach(product => {
        if (product.quantity <= product.lowStockLevel) {
            console.log(`${product.name} is low in stock. Only ${product.quantity} left.`);
        }
    });
}
// Example:
checkLowStock();