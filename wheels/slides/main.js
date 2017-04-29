window.slides = function (element) {
    var $el = $(element)
    var width = $el.width()
    var count = $el.find('.slide').length           //获取数目
    var currentIndex = 0                            //监听位置初始值为0
    let $view = $el.children('.view')
    let timeId

    //创建controlItems
    var $ol = $('<ol class="controls"></ol>')
    for (let i = 0; i < count; i++) {
        $ol.append(`<li></li>`)
    }
    $el.append($ol)

    //给第一个item添加active
    let $controls = $ol.find('li')
    $controls.eq(0).addClass('active')

    //给controlItems添加点击事件
    $el.on('click', 'li', function (e) {
        let $li = $(e.currentTarget)
        let index = $li.index()
        goToSlide(index)                                //方法重载
    })

    //鼠标悬停
    $view.on('mouseenter', function () {
        window.clearInterval(timeId)                   //清空计时器
    })

    //鼠标离开继续播放
    $view.on('mouseleave', function () {
        autoPlay()
    })

    //轮播
    function goToSlide(index) {
        if (index < 0) {                                //给轮播设定一个边界
            index = count - 1
        } else if (index >= count) {
            index = 0
        }

        //环形播放
        if (index === 0) {
            let $li = $el.find('.slide').eq(0).clone()          //在最后克隆第一张
            $li.appendTo($view)
            let number = -width * count                         //退回到第一个移动宽度
            $view.css({
                transform: `translateX(${number}px)`            //设置动画
            })
            $view.one("transitionend", function () {
                $li.remove()
                let oldTransition = $view.css('transition')     //记录最初的动画
                $view.css({                                     //删除最后一张克隆图片后清除动画，回到第一张
                    transition: 'none',
                    transform: `translateX(0px)`
                })
                $view.offset()                                  //强行将前后两个css transition设置分隔开
                $view.css('transition', oldTransition)          //继续最初的动画
                currentIndex = index                            //监控位置为当前位置
            })

            //给当前controlItems类名添加active，删除上一个active
            $controls.removeClass('active')
            $controls.eq(index).addClass('active')
            return
        }

        //顺序播放
        let number = -width * index                               //顺序播放移动宽度
        $view.css({
            transform: `translateX(${number}px)`
        })

        //给当前controlItems类名添加active，删除上一个active
        $controls.removeClass('active')
        $controls.eq(index).addClass('active')
        currentIndex = index
    }

    //自动播放
    function autoPlay() {
        timeId = setInterval(function () {
            goToSlide(currentIndex + 1)
        }, 3000)
    }
    autoPlay()

}