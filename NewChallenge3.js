//New Challenge 3

/*Make a program that lets you input your body weight and height (2 separate prompts), 
and it must output your BMI and if you're overweight, underweight etc.
So using prompt, ask for body weight and height

Then write a function to calculate BMI and console.log something like "Your BMI is 22 and you are underweight"

Body Mass Index (BMI) is a simple calculation using a person's height and weight. The formula is BMI = kg/m2 
where kg is a person's weight in kilograms and m2 is their height in metres squared.

A BMI of 25.0 or more is overweight, while the healthy range is 18.5 to 24.9.
BMI Categories:
Underweight = <18.5
Normal weight = 18.5–24.9
Overweight = 25–29.9
Obesity = BMI of 30 or greater */



const height = document.querySelector('#heightInput')
const weight = document.querySelector('#weightInput')

const getBMI = ()=>{
    const heightValue = height.value;
    const weightValue = weight.value;
    const bmiCalc = Math.round(weightValue/(heightValue*2))

    if(bmiCalc < 18.5){
        return (`Your BMI is ${bmiCalc} and you are underweight`)
    } else if (18.5 < bmiCalc && bmiCalc <24.9){
        return (`Your BMI is ${bmiCalc} and you are a normal weight`)
    } else if ( 25 < bmiCalc && bmiCalc < 29.9){
        return (`Your BMI is ${bmiCalc} and you are a overweight`)
    } else if ( bmiCalc > 29.9){
        return (`Your BMI is ${bmiCalc} and you are obese`)}
   
}

console.log(getBMI())

const printBMI =()=> {
const bmi = document.createElement("p")
const content = document.createTextNode(getBMI())
bmi.appendChild(content)
const line =document.querySelector('#BMILine')
line.appendChild(bmi)
}

// const heightBtn = document.querySelector('#heightBtn')
// heightBtn.addEventListener('click', (e)=>{ return (clearField(height))})

// const weightBtn = document.querySelector('#weightBtn')
// weightBtn.addEventListener('click', (e)=>{ return (clearField(weight))})

const calculateBtn = document.querySelector('#calculateBtn')
calculateBtn.addEventListener('click', (e)=>{return(printBMI())})

const clearField =(field)=>{
    // e.preventDefault()
    field.value=""
}