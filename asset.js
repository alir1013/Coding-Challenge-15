//Task 1:Create the Asset Module
//exporting an array of assets
export const assets = [
    { id: 1, name: "UberEats", price: 1200, quantity:35,type:stock},
    { id: 2, name: "Uber", price: 1500,vquantity:50, type:stock},
    { id: 2, name: "Amazon", price: 1800,vquantity:20, type:bond},
    { id: 2, name: "Geico", price: 1700,vquantity:40, type:bond},
];

//Returns asset details
export function getProductById(id) {
    return assets.find(asset => asset.id === id);
}