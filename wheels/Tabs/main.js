var $tabs = $('.tabs')
let selector = 'ol[data-role="tabs-nav"]>li'
$tabs.on('click', selector, e => {
    let $li = $(e.currentTarget)
    let index = $li.index()
    $li.addClass('active').siblings().removeClass('active')
    $li.closest('ol[data-role="tabs-nav"]').siblings('ol[data-role="tabs-panes"]').find('li').eq(index).addClass('active').siblings().removeClass('active')
})

tabs(document.querySelectorAll('.tabs')[0]);