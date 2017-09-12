const FizzBuzz = require('./fizzbuzz');

process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');

process.stdin.on('data', function (raw) {
  let text = raw.replace(/\s*$/, '');
  switch (text){
    case 'auto':
      for(let i = 0; i < 105; i++){
        console.log(FizzBuzz.next().getFizzBuzzFuzz());
      }
      break;
    case 'you':
      console.log(FizzBuzz.restart().next().getFizzBuzz());
      break;
    case 'me':
      FizzBuzz.restart();
      console.log('Go!');
      break;
    case 'quit':
      console.log('Bye!');
      process.exit();
      break;
    default:
      if(FizzBuzz.next().check(text)){
        console.log(FizzBuzz.next().getFizzBuzz());
      } else {
        console.log('Sorry, the correct answer for ' + FizzBuzz.number + ' is ' + FizzBuzz.getFizzBuzz());
        console.log('GG\r\n');
        console.log('Who is starting? (you/me)');
      }
  }
});

console.log('Who is starting? (you/me)');
