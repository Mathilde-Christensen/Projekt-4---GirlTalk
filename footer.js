function knapIndhold(id, button) {
    const content = document.getElementById(id);
    const isVisible = content.style.display === 'block';

    content.style.display = isVisible ? 'none' : 'block';
    button.querySelector('span').textContent = isVisible ? '+' : '-';
}