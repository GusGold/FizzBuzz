module.exports = {
  number: 0,
  fizzBuzzFuzz: [
    [3, 'Fizz'],
    [5, 'Buzz'],
    [7, 'Fuzz']
  ],
  getFizzBuzzFuzz(){
    let buffer = '';
    for(let i = 0; i < this.fizzBuzzFuzz.length; i++){
      if(!(this.number % this.fizzBuzzFuzz[i][0])){
        buffer += this.fizzBuzzFuzz[i][1];
      }
    }
    return buffer || this.number;
  },
  getFizzBuzz(){
    let buffer = '';
    if(!(this.number % 3)){
      buffer += 'Fizz';
    }
    if(!(this.number % 5)){
      buffer += 'Buzz';
    }
    return buffer || this.number;
  },
  next(){
    this.number++;
    return this;
  },
  check(str){
    return str.toLowerCase() == this.getFizzBuzz().toLowerCase();
  },
  restart(){
    this.number = 0;
    return this;
  },
}
