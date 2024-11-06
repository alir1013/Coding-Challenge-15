import { assets, getAssetById } from './asset.js';

console.log('Asset List:', assets);
console.log('Asset with ID 1:', getAssetById(1));

// Function that calculates the total portfolio value
export function calculatePortfolioValue() {
    return assets.reduce((total, asset) => total + asset.price * asset.quantity, 0); 
}

// Function that calculates the percentage allocation of each asset
export function getPortfolioAllocation() {
    const totalAssets = calculatePortfolioValue(); 
    return assets.map(asset => {
        const assetValue = asset.price * asset.quantity;  // Calculate asset value
        const allocationPercentage = totalAssets ? (assetValue / totalAssets) * 100 : 0;  
        return {
            name: asset.name,
            type: asset.type,
            value: assetValue,
            allocationPercentage: allocationPercentage.toFixed(2) + '%'
        };
    });
}
