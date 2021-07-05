# Coding Quiz

## Overview
This is a project carried out to create a quiz related to coding. The user has to answer the questions within given time and if the user selects a wrong answer the available time to answer the remaining questions will be reduced. The project is implemented by using HTML, CSS and javascript. With regards to the styles, CSS has been used.

## Important Links
Refer to the following links:
* [Coding Quiz - Deployed page](https://vish-opatha.github.io/coding-quiz/)
* [Coding Quiz - Github repository](https://github.com/vish-opatha/coding-quiz)

## Mock-up
The following video clip shows how the quiz works.
* [Coding Quiz - Video](https://drive.google.com/file/d/1nl-SqQ4iny6qRsCnynR8jLN_oSMIMh-a/view?usp=sharing)
---
 Highlights :
  1. When the 'Start' button is pressed quiz starts with the timer
  2. Questions are presented to the user until the available time is zero or question count in the pool is zero.
  3. Once the user clicks an answer, result is displayed.
  4. When all questions are answered or availble time is zero, user is presented to save the score.
  5. Marks are saved in local storage, and if there are any marks are saved already, they are loaded in view_highscore.html.

## Technical Acceptance - Work Done
1. When the start button is clicked the quiz would start along with the timer.
2. The user is presented with the questions in the question pool, one at a time.
3. Selected answer is validated against the stored correct answer, and displays the result(correc or wrong) below the possible answer buttons.
4. If the user gives an incorrect answer score time will be reduced by 10 and displayed in the timer display.
5. The user is presented to enter his/her initials if the timer is zero or question count is zero.
6. If you reach the 0 in available time, correct answer will not be displayed for the existing question, and the application will go to score submission.
6. Scores and initials are saved in local storage and they can be viewed on a seperate html file called view_highscore.

## Deployment - Work Done
1. Application is deployed at live URL using Github pages, and the link is in the "Important links" section.
2. No errors were found in loading and executing the function.
3. Link to the Github URL is given and the repository and it contains the whole code.

## Application Quality - Work Done
1. Deployed page resembles the mock-up in design and functionality.
2. This application is developed in a way that user could navigate through the quiz easily and view scores when required.
3. CSS file has been amended to improve the responsive nature of the application as much as possible.

## Repository Quality - Work Done
1. Repository is named as code-quiz.
2. Regarding the folder structure, "Assets" includes separate folders for CSS and javascript
4. Tags are indented accordingly and comments are included while following the best practices for naming conventions.
5. Changes were committed multiple times with messages.

- - -
Created by Vish Opatha (Last updated on 05 July 2021).
