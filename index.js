const { Circle, Triangle, Square } = require('./lib/shapes')
const inquirer = require('inquirer')
const fs = require('fs')

const questions = [
    {
        type: 'input',
        name: 'text',
        massage: 'Text got logo 3 characters'.
    },
    {
        type: 'input',
        name: 'text color',
        massage: 'Text color'.
    },
    {
        type: 'input',
        name: 'text',
        massage: 'Text got logo 3 characters'.
    },
]