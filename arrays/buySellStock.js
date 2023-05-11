/**
 * Problem - Best Time to Buy and Sell Stock
 * Leetcode - https://leetcode.com/problems/best-time-to-buy-and-sell-stock
 */

// Time complexity - O(N)
// Space complexity - O(1)
function buySellStock(prices) {
  let minimum = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    let cost = prices[i] - minimum;
    profit = Math.max(profit, cost);
    minimum = Math.min(minimum, prices[i]);
  }

  return profit;
}

const prices = [7, 1, 5, 3, 6, 4];
const profit = buySellStock(prices);
console.log(`The profit is ${profit}`);
