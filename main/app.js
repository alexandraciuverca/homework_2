function addTokens(input, tokens){
    
    
   
    if((input)&& (typeof input !='string'))
    {
        throw new Error("Invalid input");
    }
     if(input.length < 6){
        throw new Error("Input should have at least 6 characters")
    }
    
    for(let i=0; i<tokens.length;i++)
    {
        if(typeof( tokens[i].tokenName )!='string')
        {
            throw new Error("Invalid array format");
        }
        
    }    
    if (!input.includes("...")) 
    {return input;}
    
    if(input.includes("...")){
         for(let i=0; i<tokens.length;i++){
            input=input.replace("...","${"+Object.values(tokens[i])+"}")
            return input;
         }
    }
    
   

}

const app = {
    addTokens: addTokens
}

module.exports = app;