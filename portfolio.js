//Task 2:Create the Portfolio Module
// Import named exports
import { asset, getAssetById } from './asset.js';

console.log('Asset List:', asset);
console.log('Asset with ID 1:', getAssetById(1));

//Exporting a function that sums the total value of the portfolio
export function calculatePortfolioValue(){
    return asset.reduce((total,asset)=> total + asset.price * asset.quantity, 0); 
}

//Exporting a function that calculates the percentage allocation of each asset in the portfolio
export function getPortfolioAllocation(){
    const totalAssets = calculatePortfolioValue(); 
    return asset.map(asset => {
        const assetValue = asset.price * asset.quantity;
        const allocationPercentage = totalAssets? (assetValue / totalAssets) * 100 : 0;
        return {
            name: asset.name,
            type: asset.type,
            value: assetValue,
            allocationPercentage: allocationPercentage.toFixed(2) + '%'
        };
    });
};

