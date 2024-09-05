document.addEventListener('DOMContentLoaded', function() {
    var tabs = document.querySelectorAll('.tab');
    var contents = document.querySelectorAll('.content-item');

    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and contents
            tabs.forEach(function(tab) {
                tab.classList.remove('active');
            });
            contents.forEach(function(content) {
                content.classList.remove('active');
            });

            // Add active class to the clicked tab and corresponding content
            tab.classList.add('active');
            var target = tab.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });
});

// document.addEventListener("DOMContentLoaded", function() {
//     var navbar = document.querySelector('.navbar-feature');
//     var lastScrollTop = 0;

//     window.addEventListener("scroll", function() {
//         var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         if (scrollTop > lastScrollTop) {
//             navbar.style.top = "26px"; // 导航栏向上移动一半高度
//         } else {
//             navbar.style.top = "0"; // 导航栏恢复原位
//         }
//         lastScrollTop = scrollTop;
//     });
// });