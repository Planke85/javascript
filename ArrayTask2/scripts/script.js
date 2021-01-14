let numbers = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i < numbers.length; i++){
    if(i % 2 !== 0 ){
        document.write(numbers[i] + "<br>");
    }
    else {
        document.write(numbers[i] + " ");
    }
}