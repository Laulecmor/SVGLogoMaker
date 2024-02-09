const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require("./lib/shapes");

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 Characters -- TEXT',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Which Color would you like? -- TEXT COLOR',
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Which color would you like? -- SHAPE COLOR',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Which Image shape would you like? -- SHAPE',
        choices: ['Circle', 'Square', 'Triangle'],
    },
];

function generateSVG(answers) {
    let shape;

    switch (answers.shape) {
        case 'Square':
            shape = new Square();
            break;
        case 'Circle':
            shape = new Circle();
            break;
        case 'Triangle':
            shape = new Triangle();
            break;
        default:
            throw new Error('Invalid shape chosen');
    }

    shape.setColor(answers.shapeColor);
    shape.setText(answers.text);
    shape.setTextColor(answers.textColor);

    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.create()}                                                                                                                                                   
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.textColor}">${shape.text}</text>                                                          
    </svg>`;
}

async function generateAndSaveLogo() {
    try {
        const answers = await inquirer.prompt(questions);
        const svgContent = generateSVG(answers);

        await fs.promises.writeFile('LOGO.svg', svgContent);
        console.log('You have generated a logo.svg!');
    } catch (error) {
        console.error(error);
    }
}

generateAndSaveLogo();
