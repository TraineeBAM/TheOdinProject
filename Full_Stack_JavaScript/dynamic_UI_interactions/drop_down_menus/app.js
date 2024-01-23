document.querySelectorAll('.title h2').forEach(h2 => {
    h2.addEventListener('click', e => {
        const items = h2.parentElement.querySelector('.items');
        items.style.display = (items.style.display === 'none') ? 'block' : 'none'
    });
});
