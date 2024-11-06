//Task 3:Create the Transaction Module
import { assets, getAssetById } from './asset.js';

export class Transaction {
    constructor(assetId, type, quantity) {
        this.assetId = assetId;
        this.type = type;
        this.quantity = quantity;
        this.assets = getAssetById(assetId);
    }

    transactionSystem() {
        if (this.type === "buy") {
            this.asset.quantity += this.quantity;
        } else if (this.type === "sell") {
            if (this.quantity > this.asset.quantity) {
                throw new Error(`Insufficient quantity for sale of ${this.asset.name}`);
            }
            this.asset.quantity -= this.quantity;
        }
    }
}

