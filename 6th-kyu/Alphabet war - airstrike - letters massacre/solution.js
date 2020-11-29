function alphabetWar(fight){
  const leftSide = {
   w : 4,
   p : 3,
   b : 2,
   s : 1,
   }
  const rightSide = {
   m : 4,
   q : 3,
   d : 2,
   z : 1,
   }

   fight = fight.split('');
   for(let i=0;i<fight.length;i++)
     if(fight[i]=="*"){
       fight[i-1]!="*" ? fight[i-1]="_" : 0;
       fight[i+1]!="*" ? fight[i+1]="_" : 0;
       fight[i]="_";
     }
   
   let rScore=0;
   let lScore=0;
   for(let r=0;r<fight.length;r++){
     if(leftSide.hasOwnProperty(fight[r])) lScore+=leftSide[fight[r]];
     else if(rightSide.hasOwnProperty(fight[r])) rScore+=rightSide[fight[r]];
   }
   if(lScore==rScore) return "Let's fight again!";
   return lScore>rScore? "Left side wins!" : "Right side wins!";
}