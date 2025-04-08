const celsiusTemp =[30,24,15,22,-1];
const fahrenheitTemp=celsiusTemp.map(function(temp){
    return (temp*9/5)+32;
});
console.log(fahrenheitTemp);
