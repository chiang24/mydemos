var numbers = [21,34,51,3,53,2,1]
min = numbers[0]
for (i=1;i<numbers.length;i++){
    if(numbers[i]< min){
    min=numbers[i]
}
}
console.log("最小的数是："+min)
