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


const processInput=(value:(string | number | boolean))=>{
    if(typeof value ==="string"){
        value.trim().toLocaleLowerCase()
    }else if(typeof value === "number"){
        value * 10
    }else{
        value ? "Active" : "Inactive"
    }
}

// Sample Input:
processInput("  TypeScript  ");
processInput(7);
processInput(true);
processInput(false);

// Sample Output:
"typescript"
70
"Active"
"Inactive"