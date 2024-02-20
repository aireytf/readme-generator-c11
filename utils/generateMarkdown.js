// function to generate markdown for README
function generateMarkdown(data) {
    return `
    
    # ${data.title}

    ${data.description}

    ## Table of Contents

    1. [Installation](#installation)
    2. [Usage](#usage)
    3. [License](#license)
    4. [Contributing](#contributing)
    5. [Test](#tests)
    6. [Questions & Contact]

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## License 
    ${data.license}

    ## Contributing
    ${data.contributing}

    ## Tests
    ${data.tests}

    ## Questions

    If you should have any questions, please do not hesitate to contact me at:
    Email: ${data.email}
    GitHub: ${data.GitHubUser}
  
  `;
  }
  
  module.exports = generateMarkdown;
  