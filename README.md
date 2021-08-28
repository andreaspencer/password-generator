# Password Generator Starter Code
# Description
This weeks challenge was to create a working password generator within the parameters stated by the user through various prompts.

## Acceptance Criteria 
* Generate a new secure password
* Presented with a series of prompts for criteria 
    - lowercase, uppercase, special characters, and numbers
* Answered prompts by user creates different out comes for password each time
* Password is presented written to the page or in an alert
* At least one criteria is confirmed to create password
* Length between 8 and 128 characters

### Locally Download Instructions
1. clone github repository from ssh link
2. open terminal to desired cloning location then type in the following:
    * git clone https://andreaspencer.github.io/password-generator/
    * cd password-generator
    * code .
        - this last step will open the code in VS studios to view on local machine

#### Work Completed
* Used a prompt for user to input for length of password
* Used various confirm prompts to confirm or deny parameters for password
* Created variables at the top of the page for reference later in code
* Used if and else statements to make sure the user inputs correct information according to the parameters
* Created 'not' and 'and' statements to make sure the user picks at least one parameter when prompted
* Used loops to create pushes back to beginning of code when criteria is not correctly met by user
* Used concat to link multiple arrays for choices made by the user
* Used Math random formula to pick random characters from stated arrays after concat statements and user choice
* Generated password to write on to web page

##### Live URL: https://andreaspencer.github.io/password-generator/

##### Website Screenshot 
* after all parameters where choosen w/ 8 characters stated as length of password
<img width="1386" alt="Screen Shot 2021-08-28 at 10 19 47 AM" src="https://user-images.githubusercontent.com/87836575/131225871-6d1fce91-5519-4ce7-b9d5-325ae2ef5818.png">
