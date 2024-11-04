//Task 1:Create the Asset Module
//exporting an array of assets
export const assets = [
    { id: 1, name: "UberEats", price: 1200, quantity:35,type:"stock"},
    { id: 2, name: "Uber", price: 1500,quantity:50, type:"stock"},
    { id: 3, name: "Amazon", price: 1800,quantity:20, type:"bond"},
    { id: 4, name: "Geico", price: 1700,quantity:40, type:"bond"},
];

//Returns asset details
export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
}