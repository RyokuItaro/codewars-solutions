function humanReadable(seconds) {
  let hours=0;
  let mins=0;
  
  while(hours<99 && seconds>=3600){
    hours+=1;
    seconds=seconds-3600;
  }
  if(hours<10) hours="0"+hours;
  
  while(mins<60 && seconds>=60){
    mins+=1;
    seconds=seconds-60;
  }
  if(seconds<10) seconds="0"+seconds;
  if(mins<10) mins="0"+mins;
  return `${hours}:${mins}:${seconds}`;
}