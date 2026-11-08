const multiplyValue=(value :number,multiplier?:number):number=>{
       if(multiplier === undefined){
       return value * 2; 
       }else{
        return value * multiplier;
       }
     
}

multiplyValue(10);
multiplyValue(10, 5);
multiplyValue(7, 0);