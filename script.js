document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('#courses .card');
    const prevBtn = document.getElementById('prev-course');
    const nextBtn = document.getElementById('next-course');
    const visibleCount = 3;
    let startIndex = 0;

    function updateCards() {
        cards.forEach((card, idx) => {
            card.classList.toggle('visible', idx >= startIndex && idx < startIndex + visibleCount);
        });
    }

    if (prevBtn && nextBtn && cards.length) {
        prevBtn.addEventListener('click', () => {
            startIndex = (startIndex - visibleCount + cards.length) % cards.length;
            updateCards();
        });
        nextBtn.addEventListener('click', () => {
            startIndex = (startIndex + visibleCount) % cards.length;
            updateCards();
        });
        updateCards();
    }
});