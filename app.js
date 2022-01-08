// // How to set it up
// var commandLineArgs = process.argv;

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
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to enter some information about yourself for an "About" section?',
        default: true
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:',
        when: ({ confirmAbout }) => confirmAbout
      }
    ]);
  };
  
  const promptProject = portfolioData => {
    console.log(`
  =================
  Add a New Project
  =================
  `);
  
    // If there's no 'projects' array property, create one
    if (!portfolioData.projects) {
      portfolioData.projects = [];
    }
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of your project? (Required)',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You need to enter a project name!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'description',
          message: 'Provide a description of the project (Required)',
          validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('You need to enter a project description!');
              return false;
            }
          }
        },
        {
          type: 'checkbox',
          name: 'languages',
          message: 'What did you this project with? (Check all that apply)',
          choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
          type: 'input',
          name: 'link',
          message: 'Enter the GitHub link to your project. (Required)',
          validate: linkInput => {
            if (linkInput) {
              return true;
            } else {
              console.log('You need to enter a project GitHub link!');
              return false;
            }
          }
        },
        {
          type: 'confirm',
          name: 'feature',
          message: 'Would you like to feature this project?',
          default: false
        },
        {
          type: 'confirm',
          name: 'confirmAddProject',
          message: 'Would you like to enter another project?',
          default: false
        }
      ])
      .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
          return promptProject(portfolioData);
        } else {
          return portfolioData;
        }
      });
  };
  
promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
// will be uncommented in lesson 4
// const pageHTML = generatePage(portfolioData);
// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw new Error(err);
//   console.log('Page created! Check out index.html in this directory to see it!');
// });
});
// const fs = require('fs');

// //This statement object in module.exports assignment will be reassigned to generatePage
// const generatePage = require('./src/page-template');

// // const profileDataArgs = process.argv.slice(2); 
// // console.log(profileDataArgs);

// // const [name, github] = profileDataArgs;
// // console.log(name, github);

// const pageHTML = generatePage(name, github);

// // When an arrow function has one argument, parentheses are optional. 
// //However, when there are no arguments—or more than one—parentheses are necessary.
// // fs.writeFile('./index.html', generatePage(name, github), err => {
//     fs.writeFile('./index.html', pageHTML, err => {
//     // if an error exist, an error message is displayed
//     // if (err) throw new Error(err);
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });