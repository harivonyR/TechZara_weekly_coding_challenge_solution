/*

TzS6WccAutoCorrect

Autocorrect is a feature commonly found in mobile phones - when the user does a typo, it gets automatically replaced with the closest matching word from a list of known words.

Given a set of known words, trainingWords, and a sequence of words input by the user, typedWords, our task is to find the string we'll get once the elements of typedWords have been autocorrected. Since parsing words can be tedious, both trainingWords and typedWords are given as arrays of strings. The final text should be output as a single string (words joined by spaces).

How to select the closest word
To compare strings, we'll be using Levenshtein distance, which is basically a measure of how many edits would be required in order to transform one word into another. An edit is one of the following three operations:

insertion - add a new character to some part of the string
(eg: from "awkward" to "bawkward")
deletion - remove a character from some part of the string
(eg: from "friend" to "fiend")
replacement - replace one character in the string with a different character
(eg: from "nice" to "vice")
For any string in typedWords that doesn't occur in trainingWords, we'll replace it with the string from trainingWords that's considered closest according to Levenshtein distance. If there's a tie for the closest match, choose the one that appears earliest in trainingWords. Comparisons are case-sensitive.

Example
For
trainingWords = ["without", "night", "text", "cellar", "requirement", "some", "park", "instinct", "flourish", "computing", "vision", "mean", "round", "mistakes", "vain", "exemption", "fast"]
and

typedWords = ["some", "tex", "whith", "mistakesd"]
the output should be

TzS6WccAutoCorrect(trainingWords, typedWords) = "some text without mistakes"

[execution time limit] 4 seconds (js)

[input] array.string trainingWords

The set of words our autocorrect algorithm has been trained on. All of the words in the output will be chosen from this list. All words consist of uppercase and lowercase letters only. There are no repeat words in the list.

Guaranteed constraints:

1 ≤ trainingWords[i].length ≤ 50.```

[input] array.string typedWords

A list of words typed by the user (in order). Each word will be replaced with the closest word from trainingWords (according to Levenshtein distance). All words consist of uppercase and lowercase letters only.

Guaranteed constraints:

0 ≤ typedWords.length ≤ 2000,
1 ≤ typedWords[i].length ≤ 50.```

[output] string

The resulting sentence after typedWords have been autocorrected, joined by spaces.
*/




function getEditDistance (a, b){
  if(a.length == 0) return b.length; 
  if(b.length == 0) return a.length; 

  var editDistArray = [];

  for(var i = 0; i <= b.length; i++)
  {
    editDistArray[i] = [i];
  }
  
  for(var j = 0; j <= a.length; j++){
    editDistArray[0][j] = j;
  }
    for(i = 1; i <= b.length; i++)
    {
        for(j = 1; j <= a.length; j++)
        {
            if(b.charAt(i-1) == a.charAt(j-1))
            {
                editDistArray[i][j] = editDistArray[i-1][j-1];
            }
            else 
            {
                editDistArray[i][j] = Math.min(editDistArray[i-1][j-1] + 1, Math.min(editDistArray[i][j-1] + 1,editDistArray[i-1][j] + 1));
            }
        }
  }

  return editDistArray[b.length][a.length];
}

function TzS6WccAutoCorrect(trainingWords,typedWords) 
{

    function getClosestWord (word)
    {
        var score = [];
        
        for(var j=0; j<trainingWords.length; j++)
        {
            score.push(getEditDistance(word, trainingWords[j]));  
        }
        
        var min=score[0]; var iMin = 0;
        for (var i=0;i<score.length; i++)
        {
            if (score[i]<min) 
            {
                min = score[i];
                iMin = i; 
            }
        }
        return (trainingWords[iMin]);   
    }    
    
    var autoCorrectedWord = new Array;   
    for(var i=0; i< typedWords.length; i++)
    {
        autoCorrectedWord.push(getClosestWord(typedWords[i]));
    }   
    return autoCorrectedWord.join(' ');
}
