// 页面加载完成后执行
window.onload = function() {
    // 轮播图相关元素
    var banner = document.querySelector('.banner');
    var imgs = banner.getElementsByTagName('img');
    var dots = document.querySelectorAll('.dots span');
    var leftArrow = document.querySelector('.arrow.left');
    var rightArrow = document.querySelector('.arrow.right');
    var current = 0;
    var timer;

    // 切换图片
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
        if(timer) {
            clearInterval(timer);
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
    for(var i = 0; i < dots.length; i++) {
        (function(index) {
            dots[index].onclick = function() {
                stopPlay();
                current = index;
                changeImg(current);
                autoPlay();
            }
        })(i);
    }

    // 鼠标移入停止，移出继续
    banner.onmouseover = stopPlay;
    banner.onmouseout = autoPlay;

    // 开始自动播放
    autoPlay();

    // 返回顶部功能
    var backTop = document.querySelector('.back-top');
    
    // 监听滚动事件
    window.onscroll = function() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        
        // 当滚动超过300px时显示返回顶部按钮
        if(scrollTop > 300) {
            backTop.classList.add('show');
        } else {
            backTop.classList.remove('show');
        }
    }

    // 点击返回顶部
    backTop.onclick = function() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var timer = setInterval(function() {
            var speed = Math.floor(-scrollTop / 8);
            document.documentElement.scrollTop = document.body.scrollTop = scrollTop + speed;
            
            if(scrollTop === 0) {
                clearInterval(timer);
            }
            
            scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        }, 20);
    }
} 