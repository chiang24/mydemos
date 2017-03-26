function sort(array) {
    var indexofMin,i,j
    for(i=0;i<array.length;i++){
           indexofMin=i
       for(j=i+1;j<array.length;j++){
                if(array[j]<array[indexofMin]){
                    indexofMin=j
                }if(indexofMin!==i){
                    swap(array,i,indexofMin)
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