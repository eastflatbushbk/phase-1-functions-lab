// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    const hq = 42 ;
    if (someValue > hq) {
        return someValue - hq ;
    } else {
        return hq - someValue;
    }
}
function distanceFromHqInFeet(streetNumber){
    const hq = 42 ;
    if (streetNumber > hq) {
         const numberOfBlock = streetNumber - hq;
         return numberOfBlock * 264;
    } else {
        const numberOfBlock = hq - streetNumber;
         return numberOfBlock * 264;
    }
}
function  distanceTravelledInFeet(num1, num2){
    if (num2 > num1) {
        const numberOfBlock = num2 - num1;
        return numberOfBlock * 264;
   } else {
       const numberOfBlock = num1 - num2;
        return numberOfBlock * 264;
   }
}
  

    function calculatesFarePrice(start, destination) {
        if (start > destination){
            const numberOfBlock = start - destination; 
            const numbrOffeet = numberOfBlock * 264;
        
        if (numbrOffeet > 400){
            if (numbrOffeet < 2000){ const newNumbrOffeet = numbrOffeet - 400;
                 return newNumbrOffeet * 0.02;
            }
            else if (numbrOffeet > 2000){
                    if (numbrOffeet < 2500){ return 25;}
                    else return 'cannot travel that far';}
        }
        else return 0; } 

        else {const numberOfBlock = destination - start;

        const numbrOffeet = numberOfBlock * 264;
        
        if (numbrOffeet > 400){
            if (numbrOffeet < 2000){ const newNumbrOffeet = numbrOffeet - 400;
                 return newNumbrOffeet * 0.02;
            }
            else if (numbrOffeet > 2000){
                    if (numbrOffeet < 2500){ return 25;}
                    else return 'cannot travel that far';}
        }
        else return 0; }
    }                                  
                                       
                   
             
        
        