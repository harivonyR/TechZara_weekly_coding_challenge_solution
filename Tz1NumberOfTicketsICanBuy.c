/*TZWeek1ChallengeTask1
You invite your friends to watch a movie at CINEMA PLAZA Ampefiloha , all paid by you, ouaouh you are so rich!
But, you must check how many friends you can invite calculating the money you have to spend in this party.

You also want to make all your friends happy in this day, so for every TWO tickets you buy, you must buy a combo (Pokatsaka + Coca).

Knowing that, discover how many tickets you can buy to invite your friends to go to the movies with you!

Example:
For ticketPrice = 5, comboPrice = 10, myMoney = 50, the result is Tz1NumberOfTicketsICanBuy = 5
5 tickets = 25Ar + 2 combos (20Ar) = 45Ar even having 5Ar remaining, you can't buy one more ticket because you need to buy a combo for every 2 tickets, so you won't have enough money.
*/


int Tz1NumberOfTicketsICanBuy(double ticketPrice, double comboPrice, double money) 
{
    int i= 0;
    while(((money - (i/2)*comboPrice) - i*ticketPrice)>=0)
    {
        i++;
    }
    return i-1;
}