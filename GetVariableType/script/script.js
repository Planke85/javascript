let varType;
function getVariableType(varType){
    varType = typeof(varType);
    return varType;
}

console.log(getVariableType(null));
console.log(getVariableType(true));
console.log(getVariableType(35));
console.log(getVariableType("Aleksandar"));
console.log(getVariableType());




