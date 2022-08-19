let numbers = [];
for(var i = 0; i < 10; i++){
    
    numbers.push(Math.floor(Math.random() * 899) + 100);
}

numbers.sort();
console.log(numbers)
var secondSmallest = 0;
var secondLargest = 0;
if(numbers[0] == numbers[1]){
    secondSmallest = numbers[2]
}
else{
    secondSmallest = numbers[1];
}

if(numbers[9] == numbers[8]){
    secondLargest = numbers[7]
}
else{
    secondLargest = numbers[8];
}
 
console.log("Second smallest number is ",secondSmallest)
console.log("Second Largest number is ",secondLargest)