import chalk from 'chalk';
//import the greet module that is in the current folder
import greet from './greet.js'
// call the function & print the result on the screen
const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)