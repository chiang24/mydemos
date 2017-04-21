   body.addEventListener('mousemove', function (e) {
       //获取中心坐标、获取鼠标距离中心的距离
       let width = body.getBoundingClientRect().width
       let height = body.getBoundingClientRect().height
       let xCenter = body.offsetLeft + width / 2
       let yCenter = body.offsetTop + height / 2
       let xDiff = e.clientX - xCenter
       let yDiff = e.clientY - yCenter

       //将距离转换成百分数
       let xPercent = xDiff / (width / 2)
       let yPercent = yDiff / (height / 2)

       //设置转动角度
       let x1Deg = xPercent * 10
       let y1Deg = yPercent * 10

       //    let x2Deg = xPercent*3
       //    let y2Deg = yPercent*4

       banner.style.transform = `translateZ(-100px) rotateX(${-y1Deg}deg) rotateY(${x1Deg}deg) `
       //description.style.transform = `translateZ(0px) rotateX(${y2Deg}deg) rotateY(${x2Deg}deg) `


   })