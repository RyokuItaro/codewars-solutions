function findOutlier(integers){
  let evenCount=0;
  for(let i=0;i<integers.length;i++){
    if(integers[i]%2==0) evenCount++;
  }
  if(evenCount==1){
    for(let i=0;i<integers.length;i++){
      if(integers[i]%2==0){
        return integers[i];
      }    
    }
  }else{
  for(let i=0;i<integers.length;i++){
      if(integers[i]%2==1 || integers[i]%2==-1){
        return integers[i];
      }    
    }
  }
}