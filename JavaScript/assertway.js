// assert

function assert(value,description) {
    description = description || ''
    if(value===true){
        console.info('【测试通过】' + "：" + description)
    }else{
        console.error('【测试不通过】' + "：" + description)
    }
}


// Object.prototype.valueOf()

var o = [1,2,3];
var result = o.valueOf() 
assert(typeof result === 'object','属于对象类型')
assert(result.length === 3,'长度等于1')
assert(result[0] === 1 ,'result第一个位置是2')

var n={}
var result = n.valueOf() 
assert(typeof result === 'object','属于对象类型')
assert(result.length === 2,'长度等于2')                  //错误实例，object没有长度


// Object.prototype.toString()

var s1 = [1,2,3];
 var result = s1.toString() 
assert(typeof result === 'string','属于字符串类型')
assert(result.length === 5,'长度等于5')
assert(result === '1,2,3' ,'result内容是1，2，3')

var s2={}
var result = s2.toString() 
assert(typeof result === 'string','属于字符串类型')
assert(result === '' ,'result没有内容')                 //错误示例，内容为[object object]


// Number.prototype.toFixed()

var result = (10).toFixed(2) 
assert(typeof result === 'string','属于字符串类型')
assert(result.length === 5,'长度等于5')
assert(result === '10.00' ,'result内容是10.00')

var result = 10.005.toFixed(2)
assert(result.length === 6,'长度等于6')                     //错误实例，长度为5
assert(result === '10.00' ,'result内容是10.00')            //错误示例，内容为10.01


// String.prototype.substr() 

assert( 'JavaScript'.substr(0,1) === 'J','substr第一个参数是从第0位开始的吗' )
assert( 'JavaScript'.substr(4, -1) === '','如果substr第二个参数是负数，将被自动转为0，返回空字符串' )
assert( 'JavaScript'.substr(-1,1) === 'p','如果substr第一个参数是负数，那么-1位的内容是p' )         //错误示例，-1位的内容是t，


// String.prototype.substring()

assert( 'JavaScript'.substring(0, 4) === 'Java','第一个参数表示子字符串的开始位置，第二个位置表示结束位置。' )
assert( typeof 'JavaScript'.substring(0, 4) === 'string','返回字符串类型' )
assert( 'JavaScript'.substring(4, -3) === '','参数出现负数会将被自动转为0，返回空字符串' )          //错误示例，应该返回'Java',转换为0后，如果第二个参数大于第一个参数将会调换两个参数位置再取出子字符串


// String.prototype.indexOf() 

assert( typeof 'hello world'.indexOf(' ') === 'number','返回数字类型')
assert( 'hello world'.indexOf(' ') === 5,'空格也算一位')
assert( 'hello world'.indexOf('h') === 0,'indexOf方法从第0位开始')
assert( 'hello world'.indexOf('o',5) === 7,'第二个参数表示从该位置开始向后匹配')


// Array.prototype.sort() 

var number = [4,3,2,1]
var result = [4,3,2,1].sort()
assert( typeof result === 'object','返回原数据类型')
assert( result[0] === number[3] ,'改变原数组')

var words = ['d', 'c', 'b', 'a'].sort()
assert( words[0] === 'a' ,'按照对应字符串的字典顺序排序')


//  Array.prototype.push() 

var p1 = [];
assert( p1.push(2) === 1 ,'返回添加元素后的数组长度')
var p2 = [0]
p2.push(1,2,3)
assert( p2[0] === 0 ,'第0位是0')
assert( p2[1] === 1 ,'在当前数组后加入数据')
assert( p2[2] === 2 ,'可以加入多个数据')


//Array.prototype.shift()

var d = ['a', 'b', 'c']
assert( d.shift() === 'a' ,'删除了数组里第一个元素，并且返回了该元素')
var result = d.shift()
assert( result ===d ,'不会改变原数组')  //错误实例，会改变原数组

var d2 = []
assert( d2.shift() === '' ,'删除了第一个元素')  //错误示例，返回undefined


//Array.prototype.unshift()

var i = ['a', 'b', 'c'];
assert( i.unshift('x') === 4 ,'在数组的第一个位置添加了x，并且返回数组改变后的长度')
assert( i.unshift('y','z') === 6 ,'可以在数组头部添加多个元素')
assert( i.unshift(1) === 7 ,'可以添加任意类型的元素')



