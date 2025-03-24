# Exam_Unit_3

(Commit 1 - 4)
First off I start with creating the functions as I did in the previous non exam unit, the idea is to create the functions first, then afterwards 
refactor to follow functional programming principals. I use the try/catch method to do preliminary tests on the functions, to see if they return the
expected value or not. 

(Commit 5 - 7)
Code is encoded in alchemical symbols. In order: Gold (Au), Quicksilver(Hg), Silver(Ag), Iron(Fe) and Gold(Au). https://en.wikipedia.org/wiki/Alchemical_symbol
To make it easier to work with the code later in the game, I decided to start working with FP principals now instead of later when everything is done. After I've completed
the higher order function, I'm going to run tests.

(Commit 8 - 10)
Added testing framework, going to start figuring out how to run the test properly.
I decided to figure out if I could solve the task or not. I tweaked a lot, and finally found the right input, I tried all different kind of combinations.
I also figured out my code didn't output the challenge due to having wrongly coded the next challenge part.

(Commit 11 - 12)
My first thought was greek mythology, as "Lethe" was one of the rivers from the underworld of Hades, I already knew this but had to google for sure. https://en.wikipedia.org/wiki/Lethe. I started googling a bit, until I realized there was something off with the poem... Looking at the capital letters, it spells out the word SILVER...
I created a for loop function to run through each letter, and find the capitalized ones, and output that. While doing so I realized I didn't code the answer 
for task 1, so I decided to fix that. I had earlier created a const with different alchemical symbols which I could use for this function, so it was just
creating an easy for loop, finding symbols corresponding with the list, and pushing out the corresponding element.

(Commit 13 -)
I looked at the 3rd task for ages, couldn't find any solution. I ended up having to use a clue. After finding the page containing "BOMBAST", I tried to decipher the
numbers, I ended up with something that was somewhat readable, but at the same time not...

"TO OPTAIN AAAESS TO THE NEUT XASLT
INPST THE FORMSLA FOR THE THE FOSRTH ELEMENT
AOMBINE MERASR? AOPPER ANd SSLFSR OXER HEAT
A?? SALT AN? ?ATER
INFSSE GOLD THRO SGH AIR"

I tried making sense of it, so my guess would be:

"To obtain access to the next vault,
Input the formula for the fourth element;
Combine Mercury, Copper and Sulfur over heat
add salt and water
infuse gold through air"

There's definitely something I'm missing, but I'm going a long with. My first though is to create a loop that
return the alchemical symbols for each of the mentioned elements in the decipher text. To create the function, first I decode the the message,
then I create for loops to run through the targetWords to match them to corresponding 
