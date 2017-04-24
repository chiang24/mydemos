// $ 接收一个字符串或元素或元素列表
// 返回一个新的数组
// 这个数组有  on  addClass removeClass ... API
//window.x 全局变量的声明，node.js不允许操作全局变量
window.$ = function (selectorOrNode) {      
    let array = []
    if (typeof selectorOrNode === 'string') {
        let items = document.querySelectorAll(selectorOrNode)
        for (var i = 0; i < items.length; i++) {
            array.push(items[i])
        }                                                   //基本类型typeof、复杂类型instanof
    } else if (selectorOrNode instanceof Element) {         //node包括element，所以将Element变成数组
        array.push(selectorOrNode)
    } else if (selectorOrNode instanceof Array) {           
        for (var i = 0; i < selectorOrNode.length; i++) {
            if (!(selectorOrNode[i] instanceof Element)) {      //取反、括号优先级最高
                continue                                       
            } else {
                array.push(selectorOrNode[i])                   //将元素添加到array
            }
        }
    }

    array.on = function (eventType, fn) {
        for (var i = 0; i < array.length; i++) {                //遍历整个数组
            array[i].addEventListener(eventType, fn)
        }
    }
    array.addClass = function (className) {
        for (var i = 0; i < array.length; i++) {
            array[i].classList.add(className)
        }
        return array                                    //链式调用
    }
    array.removeClass = function (className) {
        for (var i = 0; i < array.length; i++) {
            array[i].classList.remove(className)
        }
        return array
    }
    array.text = function (textValue) {                 //类似JAVA方法重载
        if (textValue !== undefined) {
            for (var i = 0; i < array.length; i++) {
                array[i].textContent = textValue
            }
            return array
        } else {
            let result = []
            for (var i = 0; i < array.length; i++) {
                result.push(array[i].textContent)
            }
            return result
        }
    }
    array.get = function (index) {
        return array[index]
    }
    array.siblings = function () {
        let firstChild = array[0].parentNode.children
        let resultArray = []
        for (var i = 0; i < firstChild.length; i++) {
            if (firstChild[i] !== array[0]) {
                resultArray.push(firstChild[i])
            }
        }
        let newResultArray = $(resultArray)             //封装resultArray
        newResultArray.previousSelection = array        //给array添加了previousSelection属性，保存调用之前的array
        return newResultArray                           //等价于 return $(resultArray)
    }
    array.end = function () {
        return array.previousSelection
    }
    return array
}