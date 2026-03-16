/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
  
  let baseprice = 0;
  switch (size) {
    case "small":
      baseprice = 3;
      break;
    case "medium":
      baseprice = 4;
      break;
    case "large":
      baseprice = 5;
      break;
    default:
      return -1;
  }
  

  let typeprice = 0;
  switch(type){
    case "regular":
      typeprice =0;
      break;
    case "latte":
      typeprice = 1
      break;
    case "cappuccino":
      typeprice= 1.50
      break;
    case "mocha":
      typeprice= 2;
      break;
    default:
      return -1
  }

  let extra = 0;
  if (extras.whippedCream)  extra += 0.5 ;
  if (extras.extraShot) extra += 0.75;

  return Math.round((baseprice + typeprice + extra) * 100) / 100; 
  
}
