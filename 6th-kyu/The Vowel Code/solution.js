function encode(string) {
  string = string.split('');
    for(const letter of string){
      switch(letter){
          case 'a': string[string.indexOf('a')]=1; break;
          case 'e': string[string.indexOf('e')]=2; break;
          case 'i': string[string.indexOf('i')]=3; break;
          case 'o': string[string.indexOf('o')]=4; break;
          case 'u': string[string.indexOf('u')]=5; break;
      }
    }
  
  return string.join('');
}

function decode(string) {
  string = string.split('');
    for(const number of string){
      switch(number){
          case '1': string[string.indexOf('1')]='a'; break;
          case '2': string[string.indexOf('2')]='e'; break;
          case '3': string[string.indexOf('3')]='i'; break;
          case '4': string[string.indexOf('4')]='o'; break;
          case '5': string[string.indexOf('5')]='u'; break;
      }
    }
  
  return string.join('');
}