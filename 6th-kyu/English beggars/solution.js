function beggars(values, n){
  let answer=[];
    for(let i=1;i<=n;i++){
    let sum=0;
      for(let j=i;j<=values.length;j+=n){
        sum += values[j - 1];
      }
      answer.push(sum)
    }
  return answer;
}