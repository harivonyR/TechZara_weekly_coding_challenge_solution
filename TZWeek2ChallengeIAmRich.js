/*TZWeek2ChallengeIAmRich

You have 8 000 000 000Ar cash, you have to make one choice among:
buy candies, each cost 200Ar, makes 1 people happy and 10 others unhappy
or
build a colosseum at 6 000 000 000Ar each, makes 10 000 people happy and 3 000 000 others unhappy
or
buy ambulances, each cost 160 000 000Ar, makes 10 000 people happy and 1 000 unhappy

Which one is the best choice, that maximize the number of unhappy people?

Input

cash, float: the amount you can spend
choices, 2d array of possible choice. Each choice is represented as follows: [unitPRice (float), numberOfHappyPeople (float), numberOfUnHappyPeople (float)]
Output
number: the indice of the first best choice

With our example:
cash = 8000000000
choices = [[200,1,10],
[6000000000,10000,3000000],
[160000000,10000,1000]]
Output: ?? find me, be fast

Any resemblance is purely coincidental

[execution time limit] 4 seconds (js)

[input] float cash

[input] array.array.float choices

[output] integer*/

function TZWeek2ChallengeIAmRich(cash, choices) {
 
 var i=0;   
 for ( i=0; i<choices.length; i++)
 {
        var indice = 0;
        var max = 0;
    if(choices[1][2]>max) indice = i;
    return i;
 }
}