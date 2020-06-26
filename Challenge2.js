/*
CODING CHALLENGE 1.1

John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
*/


const johnTeamScore = [89, 120, 103];
const mikeTeamScore = [116, 94, 123];
const maryTeamScore = [97, 134, 105];


const johnScoreSum = johnTeamScore.reduce((a, b) => {
    return a + b;
});
const mikeScoreSum = mikeTeamScore.reduce((a, b) => {
    return a + b;
},0); //// the 0 is the value to use as the first argument to the first call of the callback // don't know if I understand
const maryScoreSum = maryTeamScore.reduce((a, b) => {
    return a + b;
});
const avScore = (sum, arr) => sum/ arr.length

const johnAvScore = (avScore(johnScoreSum, johnTeamScore));
const mikeAvScore = (avScore(mikeScoreSum, mikeTeamScore));
const maryAvScore = (avScore(maryScoreSum, maryTeamScore));

console.log(johnAvScore, mikeAvScore, maryAvScore);

//const higherScore = johnAvScore > mikeAvScore ? console.log(`John has a higher score of ${johnAvScore}`) : console.log (`mike has a higher score of ${mikeAvScore}`)

if(johnAvScore > mikeAvScore && johnAvScore > maryAvScore){
    console.log(`John has a higher score of ${johnAvScore}`)
} else if (mikeAvScore > johnAvScore && mikeAvScore > maryAvScore){
    console.log (`Mike has a higher score of ${mikeAvScore}`)
} else if (maryAvScore > johnAvScore && maryAvScore > mikeAvScore){
    console.log (`Mary has a higher score of ${maryAvScore}`)
} else {
    console.log('There was a draw')
};

/*
const scoreSum = function(a){                /////////how can you make a general funct where you can sub in the array
    a.reduce((a, b) => {
        return a + b;
    })
};
*/