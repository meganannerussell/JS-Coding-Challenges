/* CODING CHALLENGE 4

Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
*/

class Person {
    constructor(name, mass, height){
        this.name = name;
        this.mass = mass;
        this.height =height;
    }

    BMICalc(){ return Math.round(this.mass / (this.height *2))}
};

const john = new Person('John', 84, 1.7)
var johnBMI = (john.BMICalc());
console.log(`John's BMI is ${johnBMI}`);        //// when it wasnt console.logged it said bmi was undefined

const mike = new Person('Mike', 68, 1.9)
var mikeBMI = (mike.BMICalc());
console.log(`Mike's BMI is ${mikeBMI}`);
                                                //// can a ternary statement have more than one else?

 johnBMI > mikeBMI ? console.log(`John has a greater BMI of ${johnBMI}`) : console.log(`Mike has a greater BMI of ${mikeBMI}`);