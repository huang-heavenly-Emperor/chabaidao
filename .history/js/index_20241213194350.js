// 页面加载完成后执行
window.onload = function () {
    // 轮播图相关元素
    var banner = document.querySelector('.banner');
    var imgs = banner.getElementsByTagName('img');
    var dots = document.querySelectorAll('.dots span');
    var leftArrow = document.querySelector('.arrow.left');
    var rightArrow = document.querySelector('.arrow.right');
    var current = 0;
    var timer;

    // 初始化检查
    if (!banner || !imgs.length || !dots.length || !leftArrow || !rightArrow) {
        console.error('轮播图元素未找到');
        return;
    }

    // 确保小圆点数量与图片数量匹配
    var dotsContainer = document.querySelector('.dots');
    while (dots.length < imgs.length) {
        var span = document.createElement('span');
        dotsContainer.appendChild(span);
    }
    // 重新获取更新后的小圆点
    dots = document.querySelectorAll('.dots span');

    // 切换图片
    function changeImg(index) {
        if (index < 0 || index >= imgs.length) return;

        // 清除所有active类
        for (var i = 0; i < imgs.length; i++) {
            imgs[i].className = '';
            dots[i].className = '';
        }
        // 添加当前active类
        imgs[index].className = 'active';
        dots[index].className = 'active';
    }

    // 自动播放
    function autoPlay() {
        timer = setInterval(function () {
            current = ++current % imgs.length;
            changeImg(current);
        }, 3000);
    }

    // 停止自动播放
    function stopPlay() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }

    // 上一张图片
    function prevImg() {
        stopPlay();
        current = (current - 1 + imgs.length) % imgs.length;
        changeImg(current);
        autoPlay();
    }

    // 下一张图片
    function nextImg() {
        stopPlay();
        current = (current + 1) % imgs.length;
        changeImg(current);
        autoPlay();
    }

    // 绑定箭头点击事件
    leftArrow.onclick = prevImg;
    rightArrow.onclick = nextImg;

    // 绑定小圆点点击事件
    dots.forEach(function (dot, index) {
        dot.onclick = function () {
            if (current !== index) {
                stopPlay();
                current = index;
                changeImg(current);
                autoPlay();
            }
        }
    });

    // 鼠标移入停止，移出继续
    banner.onmouseover = stopPlay;
    banner.onmouseout = autoPlay;

    // 开始自动播放
    autoPlay();


} 