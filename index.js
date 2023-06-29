const { Circle, Triangle, Square } = require('./lib/shapes')
const inquirer = require('inquirer')
const fs = require('fs')

const questions = [
    {
        type: 'input',
        name: 'text',
        massage: 'Text got logo 3 characters'
    },
    {
        type: 'input',
        name: 'text color',
        massage: 'Text color'
    },
    {
        type: 'list',
        name: 'Shape',
        massage: 'Select shape',
        choices: [
            'circle',
            'triangle',
            'square',
        ]
    },
    {
        type: 'input',
        name: 'shape color',
        massage: 'select shape color'
    },
]
function init() {
    inquirer
    .promp(questions)
    .then((data) => {
        let shapeInput
        switch (shape) {
            case "circle":
                shapeInput = new Circle(shape_color)
                break;
            case "triangle":
                shapeInput = new Triangle(shape_color)
                break;
            case "square":
                    shapeInput = new Square(shape_color)
                    break;
        }
        svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
        fs.writeFile('./examples/logo.svg', svgLogo, err => {
            if (err) {
                console.error('error occurred while creating SVG file')
            } else {
                console.log('generated logo.svg')
            }
        })
        console.log('Generated logo.svg')
    })
    .catch(error => {
        console.log('error has occurred:', error)
    })
}
    init()