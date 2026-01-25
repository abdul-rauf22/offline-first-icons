const searchInput = document.getElementById('iconSearch');
const icons = document.querySelectorAll('.icon-item');

searchInput.addEventListener('keyup', () => {
    const query = searchInput.value.toLowerCase();

    icons.forEach(icon => {
        const name = icon.getAttribute('data-name').toLowerCase();
        if (name.includes(query)) {
            icon.style.display = 'flex'; // show
        } else {
            icon.style.display = 'none'; // hide
        }
    });
});
