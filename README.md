
# La Worrdle
This was a fun project that we completed in a day. It is essentially a wordle clone, that runs in your CLI.

If you are unfamiliar with it the aim of the game is to guess the 5 letter word within 6 tries.<br>
If you guess a correct letter, it will return a yellow letter<br>
If you guess a correct letter in a correct position it will return a green letter<br>
Otherwise it just returns grey.

# Install

To install you need to clone the repo in your desired directory
```bash
git clone https://github.com/ardayss19/Wordle.git
```

Then take the follow steps to run in your CLI:

Make sure you're within the folder<br>
Run `npm install`<br>
Run `node index.js`<br>
Have fun

# Technologies
The aim of this was to have this running in your CLI.<br>
We've used the packages:
- readline (already a part of node) 
- chalk

    1. readline allows you to get inputs from a user in the commandline (similar to input() in python)
    2. chalk is just for colour

# Wins
It *works<br>
It does technically work, but does not replicate all fucntionality <br> If only I had the NYT money and time.

# Challenges
This was a little challenging, as using the CLI actually means you are doing async, so took a second to think about what we were doing, intially it was planned out assuming synchronus programming. <br>
The logic for letter matching was the most challening, actually requires a bit of looping, essentially using a similar idea to Python's zip with index looping across 2 variables<br>


# Bugs
    1. letter matching always shows yellow, so even if you duplicate a letter and it doesn't appear more than once it will show yellow e.g. if the word was QUICK and wrote QQQQQ the first letter will be green adn the others would be yellow
    2. I have a decent idea on how to fix the above essentially you need to create a another iterable for it to loop through with the remaining non-green letters as the rest is binary yellow or grey (does it exist in the string or not) which also has the benefit of not needing to be ordered, just care about existance (only green cares about order)

# Future
Fix the yellow letters <br>
Console.log more responses and instructions
Produce a nice frontend with some animations
Add some sort of dictionary so you can only input real words