body.addEventListener('mousemove', function (e) {

    // 获取鼠标距离中点的距离
    var width = leftE.getBoundingClientRect().width
    var height = leftE.getBoundingClientRect().height
    var xleftcenter = leftE.offsetLeft + width / 2
    var xrightcenter = rightE.offsetLeft + width / 2
    var ycenter = leftE.offsetTop + height / 2
    var xleftdiff = e.clientX - xleftcenter
    var xrightdiff = e.clientX - xrightcenter
    var ydiff = e.clientY - ycenter

    // 将距离变为百分数
    var xleftpercent = xleftdiff / 400
    var xrightpercent = xrightdiff / 400
    var ypercent = ydiff / 400

    // 得到 x y 方向的转动角度
    var xleftdeg = xleftpercent * 10
    var xrightdeg = xrightpercent * 10
    var ydeg = ypercent * 20

    // 通过分析轴和区间，得出
    // 当用户在 x 轴移动鼠标时，CSS转动为 rotateY(xDeg)
    // 当用户在 y 轴移动鼠标时，CSS转动为 rotateX(-yDeg)
    leftE.style.transform = `rotateX(${-ydeg}deg) rotateY(${xleftdeg}deg)`
    rightE.style.transform = `rotateX(${-ydeg}deg) rotateY(${xrightdeg}deg)`
})