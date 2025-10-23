// Hamburger Menu 
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Navbar Scrool animasi
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
        // mobile menu after click
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Slider gambar
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto slide
setInterval(nextSlide, 5000);

// Interactive Image
slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        const descriptions = [
            'Prestasi siswa dalam olimpiade matematika.',
            'Tim basket sekolah meraih juara regional.',
            'Kegiatan ekstrakurikuler seni dan budaya.'
        ];
        alert(descriptions[index]);
    });
});

// Form Validation and Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (name === '' || email === '' || message === '') {
        alert('Harap isi semua field!');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Harap masukkan email yang valid!');
        return;
    }

    // Simulate form submission
    alert('Pesan berhasil dikirim! Terima kasih.');
    contactForm.reset();
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section > .container').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Course cards animation
document.querySelectorAll('.course-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Navbar hide on hero section
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const hero = document.querySelector('#hero');
    const heroHeight = hero.offsetHeight;

    if (window.scrollY < heroHeight - header.offsetHeight) {
        header.style.opacity = '0';
        header.style.pointerEvents = 'none';
    } else {
        header.style.opacity = '1';
        header.style.pointerEvents = 'auto';
    }
});
