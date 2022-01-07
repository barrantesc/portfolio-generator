// // How to set it up
// var commandLineArgs = process.argv;

const { profile } = require("console");

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


const profileDataArgs = process.argv.slice(2, process.argv.length);

const name = profileDataArgs[0];
const github = profileDataArgs[1];

console.log(generatePage(name, github));

const generatePage = (userName, githubName) => {
    return `
      Name: ${userName}
      GitHub: ${githubName}
    `;
  };
console.log(generatePage('Jane', 'janehub'));