/*TzWccS4HowManySquare

You have a rectangle a x b,
How many squares can you build inside this rectangle

Example:
a = 4, b = 3
You can build twelve 1x1 squares, six 2x2 squares and two 3x3 squares, so the output is 20

[execution time limit] 4 seconds (js)

[input] integer a

length of the rectangle

[input] integer b

width of the rectangle

[output] integer64

number of squares */

function TzWccS4HowManySquare(a, b) {
    if (a < b) 
    { 
        var temp = b; 
        b = a; 
        a = temp; 
    }              
    return b * (b + 1) * (2 * b + 1) / 6 + (a - b) * b * (b + 1) / 2; 
}
