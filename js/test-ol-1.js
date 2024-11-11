import { average, camelCase, escape, flat, isDarkMode, round } from './oneliner-1.js'

// camelCase
console.log('background-color => ', camelCase('background-color'));
console.log('-webkit-scrollbar-thumb => ', camelCase('-webkit-scrollbar-thumb'));
console.log('_hello_world => ', camelCase('_hello_world'));

// escape
console.log('escape', escape('<div class="medium">Hi Medium.</div>'));

// flat
console.log('flat', flat(['one', 'two', [ 'three', ['four','five']]]));

// average
console.log('averge', average(1,3,5,7,9,11));

// round
console.log('round', round(1.03756,2));

// isDarkMode
console.log('isDarkMode:', isDarkMode);
