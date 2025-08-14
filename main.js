document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const radioButtons = document.querySelectorAll('input[name="slide"]');
    
    radioButtons.forEach((radio, index) => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                slides.forEach(slide => slide.classList.remove('active'));
                
                slides[index].classList.add('active');
            }
        });
    });
});

