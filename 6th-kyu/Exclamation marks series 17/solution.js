function balance(left,right){
  left=left.split('');
  right=right.split('');
  let leftPoints=0;
  let rightPoints=0;
  for(let i=0;i<left.length;i++){
    left[i]=="!"? leftPoints+=2:leftPoints+=3;
  }
  for(let i=0;i<right.length;i++){
    right[i]=="!"? rightPoints+=2:rightPoints+=3;
  }
  if(leftPoints>rightPoints) return "Left";
  else if(leftPoints<rightPoints) return "Right";
  else return "Balance";
}