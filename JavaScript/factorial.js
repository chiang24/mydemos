var factorial = function (num){
       if(num < 0){
           return -1
       }else if (num === 0|| num ===1){
           return 1
       }else if(! parseInt(num) ){
          return NaN
       }else{
            return (num*factorial(num-1))  //递归
       }
}
console.assert(factorial(1) === 1)
console.assert(factorial(6) === 6*5*4*3*2*1)
console.log(factorial('string'))