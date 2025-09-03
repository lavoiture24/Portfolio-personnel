// Fonctionnalité de navigation fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Gestion du formulaire de contact
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Récupération des valeurs du formulaire
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Validation basique
        if (!name || !email || !message) {
            alert('Veuillez remplir tous les champs du formulaire.');
            return;
        }
        
        // Validation d'email simple
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Veuillez entrer une adresse email valide.');
            return;
        }
        
        // Simulation d'envoi (normalement, on enverrait les données à un serveur)
        alert(`Merci ${name} pour votre message! Je vous répondrai à ${email} dès que possible.`);
        
        // Réinitialisation du formulaire
        contactForm.reset();
    });
}

// Animation des barres de compétences au défilement
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-level');
    
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.transition = 'width 1.5s ease-in-out';
            bar.style.width = width;
        }, 200);
    });
}

// Détection du défilement pour animer les compétences
const skillsSection = document.querySelector('.skills');
let animated = false;

window.addEventListener('scroll', () => {
    if (!animated && window.scrollY + window.innerHeight > skillsSection.offsetTop + 100) {
        animateSkills();
        animated = true;
    }
});

// Effet de survol pour les cartes de projet
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
});

// Changement de couleur du header au scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(44, 62, 80, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'var(--primary-color)';
        header.style.backdropFilter = 'none';
    }
});