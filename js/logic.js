const sidebar = document.querySelector('.sidebar');
const links = document.querySelectorAll('.sidebar a');

/* when clicking a link */
links.forEach(link => {
    link.addEventListener('click', function () {

        // active class
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        // save sidebar scroll position
        localStorage.setItem('sidebarScroll', sidebar.scrollTop);
    });
});

/* restore scroll position after reload */
const savedScroll = localStorage.getItem('sidebarScroll');
if (savedScroll !== null) {
    sidebar.scrollTop = parseInt(savedScroll, 10);
}
