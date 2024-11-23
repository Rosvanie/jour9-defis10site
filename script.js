// Toggle the navbar
function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active'); // Ajoute ou supprime la classe 'active' pour ouvrir/fermer le menu
}

// Close the navbar
function closeNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.remove('active'); // Retire la classe 'active' pour fermer le menu
}



document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Ajout d'un son au survol d'une carte
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            const audio = new Audio('hover-sound.mp3');
            audio.play();
        });
    });
});
