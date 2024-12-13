// 获取返回顶部按钮元素
var backTop = document.querySelector('.back-top');

// 监听滚动事件
window.addEventListener('scroll', function() {
    // 当页面滚动超过300px时显示按钮
    if (window.pageYOffset > 300) {
        backTop.classList.add('show');
    } else {
        backTop.classList.remove('show');
    }
});

// 点击返回顶部
backTop.addEventListener('click', function() {
    // 平滑滚动到顶部
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}); 