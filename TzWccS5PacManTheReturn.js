/*
Here's an 8 × 8 picture of a house:
https://i.gyazo.com/9852a22588649875e7e51bfdffb9c460.png

This house can be represented as a matrix of pixels:

house = ["bwwbbbbb",
         "bbbbbyyb",
         "bbrbbyyb",
         "brrrbbbb",
         "rrrrrbbb",
         "brrrbbbb",
         "brrrbbbb",
         "gggggggg"]
where each pixel is encoded with its color. Here're all possible colors:

'b': blue
'g': green
'r': red
'y': yellow
'w': white
Given a rectangle of pixels, determine if it matches 1 or more subsections of this image, and return the locations of those subsections (i.e. their top left positions).

Example:

For
pixels = ["bby",
          "rbb"]
the output will be [[2, 3]]

This image has one match with the original image at y = 2 and x = 3, so the answer is [[2,3]].

For pixels = ["w","b"], the output will be [[0,1],[0,2]]. This pixels has two matches.
If pixels doesn't match with any subsections of the house, return empty array

[execution time limit] 4 seconds (js)

[input] array.string pixels

A non-empty array of strings representing a rectangular image, where each string represents a row of pixels. Each pixel is represented as stated in the description.

[output] array.array.integer

A sorted array of top-left pixels of the image areas that match the pixels.

*/