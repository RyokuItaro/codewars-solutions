const multiplicationTable = (row,col)=>{
let array=[];
let helparray=[];
let help=1;
  for(let numOfRows=0;numOfRows<row;numOfRows++){
    for(let numOfCol=0;numOfCol<col;numOfCol++){
      helparray.push(help+help*numOfCol);
    }
    array.push(helparray);
    help+=1;
    helparray=[];
  }
return array;
}