var button = document.querySelector('#button')
var total = 700
button.addEventListener('click', function () {
    var time = setInterval(
        function () {
            if (total <= 0) {
                claerInterval(time)
            }
            total -= 1
            var minute = parseInt(total / 60)
            var second = parseInt(total - minute * 60)
            timeLeft.innerText = `${minute}:${second}`
        }, 1000)


    // 缓动
})