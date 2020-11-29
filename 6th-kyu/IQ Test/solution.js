function iqTest(numbers){
  numbers = numbers.toString().split(' ');
  let check = numbers.filter(a=>a%2==0);
   return (check.length==1? numbers.findIndex(a=>a%2==0)+1:numbers.findIndex(a=>a%2==1)+1)
}