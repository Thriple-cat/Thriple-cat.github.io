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