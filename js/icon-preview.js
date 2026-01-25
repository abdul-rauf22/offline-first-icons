const iconCodes = document.querySelectorAll('.icon-code');
const iconsList = document.querySelector('.icons-list');
const previewBox = document.getElementById('iconPreview');
const previewIcon = document.getElementById('previewIcon');
const previewText = document.getElementById('previewText');
const copyStatus = document.getElementById('copyStatus'); // fixed getElementById
const backBtn = document.getElementById('backBtn');

// open preview
iconCodes.forEach(code => {
    code.addEventListener('click', () => {
        const iconClass = code.getAttribute('data-icon');

        iconsList.classList.add('d-none');
        previewBox.classList.remove('d-none');

        previewIcon.className = iconClass;

        const iconTag = `<i class="${iconClass}"></i>`;
        previewText.textContent = iconTag;

        // Clear previous copy status
        copyStatus.textContent = '';
    });
});

// copy to clipboard
function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        copyStatus.textContent = 'Copied!'; // show message
        copyStatus.style.color = 'green';

        // hide after 1.5 seconds
        setTimeout(() => {
            copyStatus.textContent = '';
        }, 1500);
    }).catch(err => {
        copyStatus.textContent = 'Failed to copy';
        copyStatus.style.color = 'red';
    });
}

// add click events
previewIcon.addEventListener('click', () => {
    copyText(previewText.textContent);
});

previewText.addEventListener('click', () => {
    copyText(previewText.textContent);
});

// back button
backBtn.addEventListener('click', () => {
    previewBox.classList.add('d-none');
    iconsList.classList.remove('d-none');
});
