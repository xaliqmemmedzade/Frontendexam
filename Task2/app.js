function swapCase(str) {
    let result = '';  
    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        
       
        if (currentChar === currentChar.toLowerCase()) {
            result += currentChar.toUpperCase();
        } 
        
        else {
            result += currentChar.toLowerCase();
        }
    }
    return result;
}

console.log(swapCase("aBcD"));         
console.log(swapCase("jAvaScRIPt"));   
console.log(swapCase("iTBAcAdemY"));