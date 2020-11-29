function dataReverse(data) {
  let array=[];
  let helpArray=[];
  for(let i=0;i<data.length;i++){
    helpArray.push(data[i]);
    if(helpArray.length%8==0) {
      array.unshift(helpArray);
      helpArray=[];
      }
  }
  array=array.reduce((acc, val) => acc.concat(val), []);
  return array;
}