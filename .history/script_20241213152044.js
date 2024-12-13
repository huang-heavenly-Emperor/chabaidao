// 轮播图功能
window.onload = function() {
    var banner = document.querySelector('.banner');
    var imgs = banner.getElementsByTagName('img');
    var dots = document.querySelectorAll('.dots span');
    var leftArrow = document.querySelector('.arrow.left');
    var rightArrow = document.querySelector('.arrow.right');
    var current = 0;
    var timer;

    // 切换图片函数
    function changeImg(index) {
        // 清除所有active类
        for(var i = 0; i < imgs.length; i++) {
            imgs[i].className = '';
            dots[i].className = '';
        }
        // 添加当前active类
        imgs[index].className = 'active';
        dots[index].className = 'active';
    }

    // 自动播放
    function autoPlay() {
        timer = setInterval(function() {
            current = ++current % imgs.length;
            changeImg(current);
        }, 3000);
    }

    // 停止自动播放
    function stopPlay() {
        clearInterval(timer);
    }

    // 绑定点击事件
    leftArrow.onclick = function() {
        current = (current - 1 + imgs.length) % imgs.length;
        changeImg(current);
    }

    rightArrow.onclick = function() {
        current = ++current % imgs.length;
        changeImg(current);
    }

    // 绑定小圆点点击事件
    for(var i = 0; i < dots.length; i++) {
        dots[i].index = i;
        dots[i].onclick = function() {
            current = this.index;
            changeImg(current);
        }
    }

    // 鼠标移入停止，移出继续
    banner.onmouseover = stopPlay;
    banner.onmouseout = autoPlay;

    // 开始自动播放
    autoPlay();
} 