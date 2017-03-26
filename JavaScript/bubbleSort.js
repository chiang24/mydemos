function sort(array){
    for(i=0;i<array.length;i++){
        for(j=0;j<array.length-1;j++){
            if(array[j]<=array[j+1]){

            }else{
                swap(array,j,j+1)
            }
        }
    }
    return array
}
function swap(array,a,b){
    var temp=array[a]
    array[a]=array[b]
    array[b]=temp
}
console.log(sort([3,5,2,21,1]))
console.log(sort([1,3,3,1,1]))
console.log(sort([1]))
console.log(sort([]))