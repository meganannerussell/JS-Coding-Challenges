
//CHALLENGE 1

// Make a program where you input 2 names using prompt (2 separate prompts after one another) and it prints (
//console.log) what percentage chance there is that they would get married/be friends/work well together/whatever you think is fun.
// - So you'd create 2 prompts that would store the names in 2 different variables (like the quiz answer)
// - Make a function that outputs a random percentage (0-100%)
// - And then console.log something like "George and Mendelsohn have a 92% chance of getting married"


const nameOne = prompt("Enter name one")

const nameTwo = prompt("Enter name two")

const randomPercentage = () => {
    return (
        Math.floor(Math.random()*100)
    )
}

const stringOne = `${nameOne} and ${nameTwo} have a ${randomPercentage()}% chance of getting married`
const stringTwo = `${nameOne} and ${nameTwo} have a ${randomPercentage()}% chance of being friends`
const stringThree = `${nameOne} and ${nameTwo} have a ${randomPercentage()}% chance of working together`

const strings = [stringOne, stringTwo, stringThree]

const randomStringNo = (strings) => {
    return(
        Math.floor(Math.random()* (strings.length))
    )
}

// console.log(randomString(strings))

const selectedString = strings[randomStringNo(strings)];
console.log(selectedString);