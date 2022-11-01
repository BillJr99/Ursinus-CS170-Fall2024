---
layout: assignment
permalink: /Labs/CreditCardValidator
title: "CS170: Programming for the World Around Us - Credit Card Validator"
excerpt: "CS170: Programming for the World Around Us - Credit Card Validator"

info:
  coursenum: CS170
  points: 100
  goals:
    - To iterate over a list of data in Python
  rubric:
    - weight: 60
      description: Algorithm Implementation
      preemerging: The algorithm fails on the test inputs due to major issues, or the program fails to compile and/or run
      beginning: The algorithm fails on the test inputs due to one or more minor issues
      progressing: The algorithm is implemented to solve the problem correctly according to given test inputs, but would fail if executed in a general case due to a minor issue or omission in the algorithm design or implementation
      proficient: A reasonable algorithm is implemented to solve the problem which correctly solves the problem according to the given test inputs, and would be reasonably expected to solve the problem in the general case
    - weight: 30
      description: Code Quality and Documentation
      preemerging: Code commenting and structure are absent, or code structure departs significantly from best practice, and/or the code departs significantly from the style guide
      beginning: Code commenting and structure is limited in ways that reduce the readability of the program, and/or there are minor departures from the style guide
      progressing: Code documentation is present that re-states the explicit code definitions, and/or code is written that mostly adheres to the style guide
      proficient: Code is documented at non-trivial points in a manner that enhances the readability of the program, and code is written according to the style guide
    - weight: 10
      description: Writeup and Submission
      preemerging: An incomplete submission is provided, or the README file submitted is blank
      beginning: The program is submitted, but not according to the directions in one or more ways (for example, because it is lacking a readme writeup or missing answers to written questions)
      progressing: The program is submitted according to the directions with a minor omission or correction needed, including a readme writeup describing the solution and answering nearly all questions posed in the instructions
      proficient: The program is submitted according to the directions, including a readme writeup describing the solution and answering all questions posed in the instructions
    
tags:
  - python
  - list
  
---

## What to Do
Write a program to input a credit card number into a variable as a string of text.  Loop over every character in the credit card number variable **except** for the very last one, and if the index is odd, double the value at that location (otherwise, just keep the number as-is).  Add all the numbers together.

If you double a value and it has more than one digit (for example, 6 * 2 = 12), add the two digits together (1 and 2).

The ones digit of this sum should be equal to the last digit in the credit card number.  Use the modulus operator to get the ones digit, and check if it equals the last digit in the credit card number.  Print out whether or not they match.

### Extra Credit (10%): argv
Modify your program to get the credit card number from `sys.argv`.  `sys.argv` is an array of command line arguments.  `sys.argv[0]` is the name of the program itself, and subsequent arguments are those you type in at the console when you run the program.  Normally, when you click the run button, the shell runs:

`python yourprogram.py`

But you can do this manually by typing

`python creditcard.py 1234567890123456`

which will place `1234567890123456` into `sys.argv[1]`.  Be sure to import the `sys` library and if the length of this array is at least 2, use `sys.argv[1]`.  Otherwise, use the `input` function to get the credit card number like before.  Run the program from the command line.  This is a convenient way to bypass having to pause your program to wait for user input!

## What to Turn In

When you're done, write a README for your project, and save all your files, before exporting your project to ZIP.  **In your README, answer any bolded questions presented on this page.**  In addition, write a few paragraphs describing what you did, how you did it, and how to use your program.  If your program requires the user to type something in, describe that here.  If you wrote functions to help solve your problem, what are they, and what do they do?  Imagine that you are giving your program to another student in the class, and you want to explain to them how to use it.  What would you tell them?  Imagine also that another student had given you the functions that you wrote for your program: what would you have wished that you knew about how to call those functions?
