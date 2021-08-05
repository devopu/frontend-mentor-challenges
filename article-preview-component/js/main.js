
let tooltip = document.querySelector('.tooltip');
let shareIcons = document.querySelectorAll('.share__icon');

shareIcons.forEach(shareIcon => {
    shareIcon.addEventListener('click', () => {
        tooltip.classList.toggle('active');
    })
})
