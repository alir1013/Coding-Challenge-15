import { calculatePortfolioValue, getPortfolioAllocation } from "./portfolio.js"; 
import { Transaction } from "./transaction.js";

console.log("Total Portfolio Value", calculatePortfolioValue()); // Displaying total portfolio value
console.log("Portfolio Allocation:", getPortfolioAllocation()); // Displaying allocation percentages

// Creating transaction instances
const newTransaction = new Transaction(1, "buy", 3);

newTransaction.transactionSystem();
console.log("Transaction Details:", newTransaction);
console.log("Updated Portfolio Value:", calculatePortfolioValue());
console.log("Updated Portfolio Allocation:", getPortfolioAllocation());

