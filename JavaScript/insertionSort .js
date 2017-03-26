var numbers = [21,34,1,3,53,2]
var temp,i,j
for(i=1;i<numbers.length;i++){
    temp=numbers[i]
    for(j=i-1;j>=0&&temp<numbers[j];j--){
        
        numbers[j+1]=numbers[j]
    }
    numbers[j+1]=temp
}
console.log(numbers)

