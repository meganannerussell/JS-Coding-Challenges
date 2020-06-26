/* CODING CHALLENGE 1

Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

*/

let mark = {
    mass: 67,
    height: 1.8,
};

let john = {
    mass: 89,
    height: 1.6,
};

const BMI = (mass, height) =>  mass / (height*2);

const markBMI = (BMI(mark.mass, mark.height));

const johnBMI = (BMI(john.mass, john.height))

//const higherBMI = ()=>{
if(markBMI > johnBMI){
    console.log(`Mark has a higher BMI of ${markBMI}`);
}
else{
    console.log(`John has a higher BMI of ${johnBMI}`);
}
//}

//console.log(higherBMI());  //if i put if else into a fucntion it says undefined    
