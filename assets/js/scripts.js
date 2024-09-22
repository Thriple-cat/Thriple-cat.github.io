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

document.addEventListener("DOMContentLoaded", function() {
    const itemsPerPage = 10;
    let currentPage = 1;

    const items = document.querySelectorAll('.post-item');
    const loadMoreButton = document.getElementById('load-more-talks');

    function showItems(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        items.forEach((item, index) => {
            if (index >= start && index < end) {
                item.classList.add('visible');
            }
        });

        if (end >= items.length) {
            loadMoreButton.style.display = 'none';
        }
    }

    loadMoreButton.addEventListener('click', function() {
        currentPage++;
        showItems(currentPage);
    });

    // Initial load
    showItems(currentPage);
});