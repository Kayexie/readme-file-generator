// build file connection.
let inquirer = require('inquirer');
let fs = require('fs');


// generate question prompted. 
inquirer
  .prompt([
      { type: 'title',
        message: 'Please enter your project title.',
        name: 'title',
      },
      { type: 'description',
      message: 'Please enter your project description',
      name: 'description',
      },
      { type: 'installation',
      message: 'Please enter your project installation',
      name: 'installation',
      },
      { type: 'usage',
      message: 'Please enter the file location of the usage image',
      name: 'usage',
      },
      { type: 'list',
      message: 'Please pick a license',
      name: 'license',
      choices: ['MIT', 'IBM', 'Mozilla']
      },
      { type: 'contribution',
      message: 'PlePlease enter your project contribution information',
      name: 'contribution',
      },
      { type: 'test',
      message: 'Please enter your test information',
      name: 'test',
      },
      { type: 'github',
      message: 'Please input your Github Username',
      name: 'github',
      },
      { type: 'email',
      message: 'Please input your email address',
      name: 'email',
      },
    ])
    //then get the answer from the input and decontruct them.
    .then((response) => {
     const {title, description, installation, usage, license, contribution, test, github, email} = response;
     console.log(typeof title);
     
     let MIT = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
     let IBM = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
     let Mozilla = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
     function pickbadge() {
      if (license === 'MIT') {
        return MIT; //why I have to add a return here inorder to show the result？
      } if (license === 'IBM') {
        return IBM;
      } if (license === 'Mozilla') {
        return Mozilla;
      }
     }

     pickbadge();
    
     const readMe = `
# ${title}
${pickbadge()}
## Description
  ${description}
## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
## Installation
  ${installation}
## Usage
![Screenshot](${usage})
## License
  ${license}
## Contributing
  ${contribution}
## Tests
  ${test}
## Questions
- Please refer to https://github.com/${github}.
- You can also sent emails to ${email} for more questions.`

    fs.writeFile('README.md', readMe, (err) => {
    err? console.log(err) : console.log('Succefully generated a README file!') 
      })
    
    }) 

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
