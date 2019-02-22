//CHALLEGNE-2
var bill=[124,48,268],bill2=[];
function calculate()
{
    for(var i=0;i<3;i++)
    {
    if(bill[i]<50){
    bill2[i]=bill[i]*0.2;
    bill[i]=bill[i]+bill2[i];
    }
    else if(bill[i]>50 && bill[i]<200){
    bill2[i]=bill[i]*0.15;
    bill[i]=bill[i]+bill2[i];
    }
    else{
    bill2[i]=bill[i]*0.1;
    bill[i]=bill[i]+bill2[i];
    }
   }    
   console.log("The tips for the respective bills are:");
console.log(bill2);
console.log("The Total Bill is: ");
console.log(bill);
}
calculate();
 
