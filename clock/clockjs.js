function step(){
  var now = new Date()
var seconds = now.getSeconds()
var minutes = now.getMinutes()
var hours = now.getHours()
if(hours>12){
  hours -= 12
}

//    console.log(seconds)
// console.log(minutes)
// console.log(hours)
var secondDeg = seconds/60*360
var minuteDeg = (minutes * 60+seconds)/3600*360
var hourDeg = (hours*3600+minutes*60+seconds)/(12*3600)*360


document.querySelector('.second-hand')
  .style.transform = `rotate(${-90+secondDeg}deg)`

document.querySelector('.minute-hand')
  .style.transform= `rotate(${-90+minuteDeg}deg)`

document.querySelector('.hour-hand')
  .style.transform= `rotate(${-90+hourDeg}deg)`

}

step()
 setInterval(function(){
   step()
 },1000)
 