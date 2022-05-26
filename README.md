# TillPos_QA_Nishit

this repository contains the automation code and manual test cases for Web Applications of Computer Database , application has been automated in Cypress version 9.0.6


**Prerequistie**
Before executing the Cypress test case please make sure you have below software installed in your machine
-> Node JS
-> Cypress (most prefered version 9.6.0 or above)

**Steps to execute test file**
There are mulitple ways to trigger the test file in Cypress such as using command line or setting up Cypress command in Package JSON file, this code is prefering the writing cypress open command
on command line.

1. open the terminal at the location where you have clone the code
2. run npx open cypress command

command will open the Cypress terminal, select .spec.js file in integration folder and test case will be triggered in selected browser

**Bugs Description**
while automating and testing the application a bug has been found, if users tries to create new computer he is able to enter the name create computer but the name of computer 
does not appears in the list when filtered and also the total count of computer remains same, due to this bug test cases related to adding computer may fail at validation steps.
