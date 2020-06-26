/* CODING CHALLENGE 3

John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
*/

const bills = [124, 48, 268];

const tipCalc = (bill) => {
    if (bill < 50) {
        return Math.round(bill * 0.2)
    } else if (50 > bill < 200) {
        return Math.round(bill * 0.15)
    } else if (bill > 200) {
        return Math.round(bill * 0.1)    
    }
}

const tips = bills.map(tipCalc);    // is it better to have the fuction outside or map 
console.log(`The tip amounts are ${tips}`);

const totals = [(tips[0] + bills[0]), (tips[1] + bills[1]), (tips[2] + bills[2]) ]
console.log(`The total bill amounts are ${totals}`);

// const tips = bills.map((bill) => {
//     if (bill < 50) {
//         return bill * 0.2
//     } else if (50 > bill < 200) {
//         return bill * 0.15
//     } else if (bill > 200) {
//         return bill * 0.1
//     }
// });




