// Плавные скроллы
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Пагинация
document.querySelectorAll('.pagination button').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

const currentYear = new Date().getFullYear();
document.getElementById('copyright').innerHTML = "&copy; " + currentYear.toString() + " Царскосельский Центр семейного образования. Все права защищены." ;
