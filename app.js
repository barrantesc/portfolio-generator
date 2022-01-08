// // How to set it up
// var commandLineArgs = process.argv;

const { fstat } = require("fs");

// const { profile } = require("console");

// // Use const for variables that should never be reassigned
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// // executing printProfileData made each command line print one at a time
// const printProfileData = profileDataArr => {
//         // let behaves like var, reassign valued with it.
//         // Use Let for variables that need to change overtime

//     //This..
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('================');

//     // Is the same as this..
//     profileDataArr.forEach(profileItem => //arrow function = we can avoid using function Keyword, parenthesis, and curly braces. 
//         console.log(profileItem)
//     );
// };
// printProfileData(profileDataArgs);

const fs = require('fs');

//This statement object in module.exports assignment will be reassigned to generatePage
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2); 
console.log(profileDataArgs);

const [name, github] = profileDataArgs;
console.log(name, github);


// When an arrow function has one argument, parentheses are optional. 
//However, when there are no arguments—or more than one—parentheses are necessary.
fs.writeFile('./index.html', generatePage(name, github), err => {
    // if an error exist, an error message is displayed
    if (err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output!');
});