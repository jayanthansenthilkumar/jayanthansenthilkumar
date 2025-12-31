document.addEventListener('DOMContentLoaded', () => {
    // Add loading class to body
    document.body.classList.add('loading');
    
    // Remove loader after page load
    window.addEventListener('load', () => {
        const loader = document.querySelector('.loader-wrapper');
        
        // Increased timeout to 2500ms (2.5 seconds)
        setTimeout(() => {
            loader.classList.add('fade-out');
            document.body.classList.remove('loading');
            
            // Remove loader from DOM after animation
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 2000);
    });
});

new Typed('#typed-text', {
    strings: [
        '"Crafting innovative solutions"',
        '"Engineering user experiences"',
        '"Building the future"',
        '"Creating digital art with code"'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    startDelay: 1000,
    backDelay: 1500,
    cursorChar: '❚'
});
new Typed('#typed-title', {
    strings: [
        'Full Stack Developer.',
        'Business Analyst.',
        'DevOps Engineer.',
        'Founder of <b>PrisolTech</b>.',
    ],
    typeSpeed: 40,
    backSpeed: 20,
    loop: true,
    startDelay: 500,
    backDelay: 2000,
    cursorChar: '|',
    html: true
});
particlesJS('particles-js', {
    particles: {
        number: { value: 80 },
        color: { value: '#2563eb' },
        opacity: { value: 0.2 },
        size: { value: 3 },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#2563eb',
            opacity: 0.1,
            width: 1
        },
        move: {
            enable: true,
            speed: 2
        }
    }
});

// Updated scroll tracking code
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-item');

// Add smooth scroll behavior
navItems.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Improved scroll tracking
window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Add offset for better trigger point
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// Simplified filtering system with fixed animations
const filterBtns = document.querySelectorAll('.filter-btn');
const workCards = document.querySelectorAll('.work-card');

// Initialize the display on load
document.addEventListener('DOMContentLoaded', () => {
    showCards('education');
});

// Function to handle card visibility
function showCards(filterCategory) {
    workCards.forEach((card, index) => {
        if (card.dataset.category === filterCategory) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
                if (filterCategory === 'skills') {
                    initializeProgressBars();
                }
            }, index * 100);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px) scale(0.95)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Attach click handlers
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active state
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Show filtered cards
        showCards(btn.dataset.filter);
    });
});

// Add this to your existing script section
function initializeProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const percentage = bar.closest('.skill-progress')
                            .querySelector('.skill-percentage')
                            .textContent.replace('%', '') / 100;
        bar.style.transform = `scaleX(${percentage})`;
    });
}

// Initialize particles for footer
particlesJS('footer-particles', {
    particles: {
        number: { value: 80 },
        color: { value: '#2563eb' },
        opacity: { value: 0.2 },
        size: { value: 3 },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#2563eb',
            opacity: 0.1,
            width: 1
        },
        move: {
            enable: true,
            speed: 2
        }
    }
});