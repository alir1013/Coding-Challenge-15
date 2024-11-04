//Task 3:Create the Transaction Module
import {  asset, getAssetById} from './asset.js';  //Importing assets and getAssetById from asset.js

//defining and exporting a class Transaction,
export class Transaction {
    constructor(assetId, type, quantity) {
      this.assetId;
      this.type = type;
      this.quantity = quantity;
      this.asset = getAssetById(assetId);
  
   transactionSystem() {
      if (this.type === "buy") {
        this.asset.quantity += this.quantity;
      } else if (this.type === "sell") {
        if (this.quantity > this.asset.quantity) {
          throw new Error(`Insufficient quantity for sale of ${this.asset.name}`);
        }
        this.asset.quantity -= this.quantity;
      }
    }}
}