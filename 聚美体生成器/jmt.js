generate.onclick = function(){
  var w1 = word1.value
  var w2 = word2.value
  var w3 = word3.value
  var w4 = word4.value
  var w5 = word5.value
  var w6 = word6.value
  var w7 = word7.value
  var w8 = word8.value
  var w9 = word9.value
  var w10 = word10.value
  var w11 = word11.value
  var w12 = word12.value
  var w13 = word13.value
  var w14 = word14.value
  
 var html = `<p>你只闻到我的${w1}, 却没看到我的${w2}。 你有你的${w3}，我有我的${w4}。 你否定${w5}，我决定${w6}。你嘲笑我${w7}，不配${w8}， 我可怜你${w9}。你可以${w10}，我们证明${w11}。${w12}是注定孤独的旅行，路上少不了质疑和嘲笑，但那又怎样？哪怕${w13}，也要${w14}！</p> `
       preview.innerHTML = html
}