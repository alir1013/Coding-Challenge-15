//Task 4:Create the Main Application
import {calculatePortfolioValue,getPortfolioAllocation} from "./portfolio.js"
console.log("Total Portfolio Value",calculatePortfolioValue()); //Displaying total portfolio value

import{Transaction} from "./transaction"
console.log("Portfolio Allocation:",getPortfolioAllocation()); //Displaying allocation percentages


//Creating transaction instances
const newTransaction= new Transaction(1);

newTransaction.addItem(1,3);
newTransaction.addItem(4,2);
newTransaction.addItem(2,3);
newTransaction.addItem(4,3);

console.log("Transaction Details:",newTransaction);
console.log("Updated Portfolio Value:",calculatePortfolioValue());
console.log("Updated Portfolio Allocation:",getPortfolioAllocation());