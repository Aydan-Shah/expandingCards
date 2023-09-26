
const panels = document.querySelectorAll('.panel');
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        toggleActive(panel);
    });
});
function toggleActive(selectedPanel) {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
    selectedPanel.classList.add("active");
}