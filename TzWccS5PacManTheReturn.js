/*
Pac-Man got lucky today! Due to minor performance issue all his enemies have frozen. Too bad Pac-Man is not brave enough to face them right now, so he doesn't want any enemy to see him. Given a gamefield of size NxN, Pac-Man's and his enemies' positions, count the number of coins he can collect without being seen.
An enemy can see a Pac-Man if they are standing on the same row or column. It is guaranteed that no enemy can see Pac-Man on the starting position. There is a coin on each empty square (i.e. where there is no Pac-Man nor enemy).

Grid axis:
For N = 4
[0, 0] represents the top left corner
[0, 3] the top right corner
[3, 3] the bottom right corner
[3, 0] the bottom left corner

Example
Let O represent coins, P Pac-Man and E the enemies.
N = 4, P = [3, 0], E = [[1, 2]]

O O O O
O O E O
O O O O
P O O O
The answer to the given example is 3, as Pac-Man cannot cross row 1 and column 2. He can only collect coins from points (2, 0), (2, 1) and (3, 1).

[execution time limit] 4 seconds (js)

[input] integer n
field size

[input] array.integer p
Pac-Man position (pair of integers)

[input] array.array.integer enemies
Enemies' positions (array of pairs)

[output] integer
Number of coins Pac-Man can collect
*/

function TzWccS5PacManTheReturn(n, p, enemies) {
if(enemies.length>0)
{
    var long=1;
    var larg=1;
    function check (pos)
    {
        if ((pos[0]<n)&&(pos[1]<n)&&(pos[0]>=0)&&(pos[1]>=0))
        {
        for (var i=0; i<enemies.length; i++)
        {
            if((pos[1]==(enemies[i][1])||(pos[0]==enemies[i][0]))) return 0;
        }
        return 1;
        }
        return 0;
    }
    
    for (var i=1;(check([p[0],p[1]+i]));i++)
    {
        long += 1;
    }
    for (var i=-1;(check([p[0],p[1]+i]));i--)
    {
        long += 1;
    }
    for (var j=1;(check([p[0]+j,p[1]]));j++)
    {
        larg += 1;
    }
    for (var j=-1;(check([p[0]+j,p[1]]));j--)
    {
        larg += 1;
    }
    return ((long*larg)-1);
}
else return (n*n-1);
}
