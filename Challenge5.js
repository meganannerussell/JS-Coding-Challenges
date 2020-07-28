
const bills = [77, 375, 110, 45]

const tipCalc = (bill) => {
    if(bill<100){
        return (bill * 0.2)
    }
    else if(100<bill<300){
        return(bill * 0.1)
    }
    else if(bill>300){
        return(bill * 0.25)
    }
}


const finalTips = []

const getTips = (arr) => {
for( i = 0; i < arr.length; i++){
    
    finalTips.push(tipCalc(arr[i]))
}
return finalTips
};
console.log(getTips(bills));


//For Loop to calculate average
const averageTips = (arr) => {
    let total = 0
    for (i = 0; i < arr.length; i++){
        total = total + arr[i]
    }
    return (total/arr.length)
} 

console.log(averageTips(finalTips))

// //For Each to calculate average
// let total = 0
// arr.forEach((i)=> {
//     total = total + i
// })

// const average = total/arr.length 

// //Reduce to calculate average

// const average = (arr) => {
// const sum = arr.reduce((a, b) => {
//     return(a + b)
// },0)
// return(sum/arr.length)
// }
