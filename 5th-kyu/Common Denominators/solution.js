const gcd = (a,b)=>a < b  ?  gcd(b,a):b==0  ?  a:gcd(b,a%b);
const lcm = (a,b)=>a * b / gcd(a,b);

function convertFrac(lst){
  let denominator=lst.reduce((newArr,item)=>lcm(newArr,item[1]),1);
  return lst.map(fraction=>
                 `(${fraction[0]*denominator/fraction[1]},${denominator})`)
                 .join("");
}