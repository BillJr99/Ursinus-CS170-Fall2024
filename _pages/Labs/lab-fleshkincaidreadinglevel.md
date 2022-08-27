---
layout: assignment
permalink: /Labs/FleschKincaidReadingLevel
title: "CS170: Programming for the World Around Us - Flesch-Kincaid Reading Level"
excerpt: "CS170: Programming for the World Around Us - Flesch-Kincaid Reading Level"

info:
  coursenum: CS170
  points: 100
  goals:
    - To implement a mathematical formula in Python or on the micro:bit
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
  - math
  
---

The Flesch-Kincaid Reading Level is a measurement of the writing level of text.  It calculates the recommended grade level for the reader of the text using the following formula:

<span>\\(0.39 \times wps + 11.8 * spw - 11.59\\)</span>

Where `wps` is the number of words per sentence, and `spw` is the number of syllables per word in the text.  In this lab, you will write a program either in Python or using the micro:bit to implement this formula.

## What to Do
Write a program to input the `wps` and `spw` variables.  In python, you can input a floating point value (a decimal value like `4.5`) like this:

```python
wps = input("Enter the number of words per sentence:")
wps = float(wps) # convert from text to a floating point number
```

With the micro:bit, you can enter the values as variables in the `on start` block.

Calculate the Flesch-Kincaid reading level and display it as output.

**What inputs would give you a grade level between 4 and 5?**

**What grade level do you think a typical newspaper targets?  Count a few sentences of a news article and try it out!  Write down which article you used and what results you obtained.**

### Extra Credit (10%): Write the Other Version
For extra credit, implement your program using both Python and the micro:bit!  Be sure to submit both versions.

### Extra Credit (10%): Calling the Program with Real Text
These functions will count the number of words per sentence and syllables per word of a text variable.  Paste these into your python program and modify your program to input a few sentences of text from the keyboard to compute the reading level.

```python
def numSyllables(s):
  return sum(list(map(lambda x: 1 if x in ["a","i","e","o","u","y","A","E","I","O","U","y"] else 0,s)))

def numWords(s):
  return len(s.split(" "))

def numSentences(s):
  return sum(list(map(lambda x: 1 if x in [".", "!", "?"] else 0,s)))

def numWordsPerSentence(s):
  if numSentences(s) == 0:
    return 0
  else:
    return numWords(s) / numSentences(s)

def numSyllablesPerWord(s):
  if numWords(s) == 0:
    return 0
    
  syllables = 0
  for word in s.split(" "):
    syllables += numSyllables(word)

  return syllables / numWords(s)
```

## What to Turn In

When you're done, write a README for your project, and save all your files, before exporting your project to ZIP.  **In your README, answer any bolded questions presented on this page.**  In addition, write a few paragraphs describing what you did, how you did it, and how to use your program.  If your program requires the user to type something in, describe that here.  If you wrote functions to help solve your problem, what are they, and what do they do?  Imagine that you are giving your program to another student in the class, and you want to explain to them how to use it.  What would you tell them?  Imagine also that another student had given you the functions that you wrote for your program: what would you have wished that you knew about how to call those functions?