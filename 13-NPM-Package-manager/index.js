//var generateName = require('sillyname');
import {randomSuperhero} from 'superheroes';
import generateName from 'sillyname';
var sillyName = generateName();
var heroName = randomSuperhero();

console.log(`My name is ${sillyName}.`);
console.log(`I am a superhero and my name is ${heroName}!`);