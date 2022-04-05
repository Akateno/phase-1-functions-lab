// Code your solution in this file!
const hq = 42
const feet = 264

function distanceFromHqInBlocks(pickup)
{
if (pickup > 42)
{
    return (pickup - hq)
}
else if (pickup < 42 )
{
    return (hq-pickup)
}
}
function distanceFromHqInFeet(pickup)
{
   return  distanceFromHqInBlocks(pickup) * 264
}
function distanceTravelledInFeet(dropoff, pickup) 
{
     let travel = (pickup - dropoff) * 264
     return Math.abs(travel)
}
function calculatesFarePrice(start, destination){
    let price;
    let n= distanceTravelledInFeet(start, destination);
   if (n < 400 ){
        return price = 0;
   } else if (n > 400 && n < 2000){
       price = n - 400;
       return (price * 0.02);
   }
   else if (n > 2000 && n < 2499){
       price = 25;
       return price;
   }
   else if (n > 2500){
       return 'cannot travel that far';
   }

}