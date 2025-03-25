# Exam_Unit_3

# Commit 1 - 4
First off I start with creating the functions as I did in the previous non exam unit, the idea is to create the functions first, then afterwards 
refactor to follow functional programming principals. I use the try/catch method to do preliminary tests on the functions, to see if they return the
expected value or not. 

# Commit 5 - 7
Code is encoded in alchemical symbols. In order: Gold (Au), Quicksilver(Hg), Silver(Ag), Iron(Fe) and Gold(Au). https://en.wikipedia.org/wiki/Alchemical_symbol
To make it easier to work with the code later in the game, I decided to start working with FP principals now instead of later when everything is done. After I've completed
the higher order function, I'm going to run tests.

# Commit 8 - 10
Added testing framework, going to start figuring out how to run the test properly.
I decided to figure out if I could solve the task or not. I tweaked a lot, and finally found the right input, I tried all different kind of combinations.
I also figured out my code didn't output the challenge due to having wrongly coded the next challenge part.

# Commit 11 - 12
My first thought was greek mythology, as "Lethe" was one of the rivers from the underworld of Hades, I already knew this but had to google for sure. https://en.wikipedia.org/wiki/Lethe. I started googling a bit, until I realized there was something off with the poem... Looking at the capital letters, it spells out the word SILVER...
I created a for loop function to run through each letter, and find the capitalized ones, and output that. While doing so I realized I didn't code the answer for task 1, so I decided to fix that. I had earlier created a const with different alchemical symbols which I could use for this function, so it was just creating an easy for loop, finding symbols corresponding with the list, and pushing out the corresponding element.

# Commit 13 - 17
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
then I create for loops to run through the targetWords to match them to corresponding alchemical symbols. The function then returns
the symbols which was the code for the next vault.

During this time as well I cleaned up the code and created more files to add functions, consts etc. So the alchemy.mjs file only contains the run
code for delviering answers and such.

# Commit 18 -End
My first though was to try to run the long text through the same loop used on the poem, and looking at the length of the capital
letters returned, it matches with a "new" alphabet. This worked out perfectly and I got a new alphabet reusing a previous function.
The next step is to decode the message and turn it into alchemical symbols. The next step I used way too long to figure out, was to use
the list I then got of alchemical symbols and match it to potential matches in the large liste of alchemical symbols in the last step.

I could not for the life of me find a good way to run through the array with loops to match the symbols on rows and columns, but to no avail.
I figured out that the final answer would be "Argon", by combining the atomic number of each of the matching row/column, so I ended up just submitting it. I didn't get to log the skeletonKey the first or second time under the alias of Poke and my email. But I logged the entire
data output from the API under the user "Mike", the reason I couldn't get the skeleton key was due to a typo "sceletonKey"...

The rest of the commits is just fine tuning and TDD...

# How I would solve the last task:
I would run the different arrays through loops, each row and column with a for loop, then push the row and col to a results array variable.
