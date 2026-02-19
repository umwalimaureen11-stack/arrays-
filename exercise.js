// exercise :task 1
const products = [
    { id: 1, name: "laptop", price: 1200 },
    { id: 2, name: "mouse", price: 25 },
    { id: 3, name: "desk", price: 300 },
    { id: 4, name: "chair", price: 150 }
];

const warehouse = [
    [1, 2, 3],
    [4, 1, 2],
    [3, 4, 1]
];

function analyzeWarehouse(products, warehouse) {

    const flatWarehouse = warehouse.flat();

    let totalItems = 0;
    let totalInventoryValue = 0;
    const frequency = {};

    for (let i = 0; i < warehouse.length; i++) {
        for (let j = 0; j < warehouse[i].length; j++) {
            const productId = warehouse[i][j];
            totalItems++;

            frequency[productId] = (frequency[productId] || 0) + 1;

            for (let k = 0; k < products.length; k++) {
                if (products[k].id === productId) {
                    totalInventoryValue += products[k].price;
                    break;
                }
            }
        }
    }

    let mostStoredProductId = null;
    let maxCount = 0;

    for (let id in frequency) {
        if (frequency[id] > maxCount) {
            maxCount = frequency[id];
            mostStoredProductId = parseInt(id);
        }
    }

    const mostStoredProduct = products.find(p => p.id === mostStoredProductId);

    const productDescriptions = products.map(p => p.name + " costs $" + p.price);

    const convertedPrices = products.map(p => ({
        id: p.id,
        name: p.name,
        price: p.price * 1.2
    }));

    const sortedAscending = [...products].sort((a, b) => a.price - b.price);
    const sortedDescending = [...products].sort((a, b) => b.price - a.price);
    const reversedAscending = [...sortedAscending].reverse();

    const above200 = products.filter(p => p.price > 200);

    const totalValueAllProducts = products.reduce((sum, p) => sum + p.price, 0);

    return {
        flatWarehouse,
        totalItems,
        totalInventoryValue,
        frequency,
        mostStoredProduct,
        productDescriptions,
        convertedPrices,
        sortedAscending,
        sortedDescending,
        reversedAscending,
        above200,
        totalValueAllProducts
    };
}

// Example call
console.log(analyzeWarehouse(products, warehouse));
