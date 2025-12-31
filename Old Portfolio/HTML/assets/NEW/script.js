document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleBtn');
    const sideNavbar = document.querySelector('.side-navbar');
    const navLinks = document.querySelectorAll('.nav-items li a');
    
    // Toggle navbar functionality
    if (toggleBtn && sideNavbar) {
        toggleBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            sideNavbar.classList.toggle('active');
            
            // Change icon based on navbar state
            if (sideNavbar.classList.contains('active')) {
                toggleBtn.innerHTML = '<i class="ri-close-line"></i>';
            } else {
                toggleBtn.innerHTML = '<i class="ri-menu-line"></i>';
            }
        });
        
        // Close navbar when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNavbar = sideNavbar.contains(event.target);
            const isClickOnToggleBtn = toggleBtn.contains(event.target);
            
            if (!isClickInsideNavbar && !isClickOnToggleBtn && sideNavbar.classList.contains('active')) {
                sideNavbar.classList.remove('active');
                toggleBtn.innerHTML = '<i class="ri-menu-line"></i>';
            }
        });
        
        // Close navbar when clicking a link (mobile)
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    sideNavbar.classList.remove('active');
                    toggleBtn.innerHTML = '<i class="ri-menu-line"></i>';
                }
            });
        });
    }
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only prevent default if it's an anchor link
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                // In a complete website, this would scroll to the appropriate section
                console.log('Navigation clicked: ' + this.getAttribute('href'));
                
                // Close mobile menu if open
                if (window.innerWidth <= 768 && sideNavbar.classList.contains('active')) {
                    sideNavbar.classList.remove('active');
                    toggleBtn.innerHTML = '<i class="ri-menu-line"></i>';
                }
            }
        });
    });

    // Setup typing effect
    setupTypingEffect();
    
    // Enhanced typing effect for hero section
    setupEnhancedTypingEffect();
    
    // Setup filter functionality
    setupFilterFunctionality();
    
    // Add particles to footer and contact sections
    setupParticles();
    
    // Add intersection observer for section animations
    setupScrollAnimations();
});

// Function to create typing effect
function setupTypingEffect() {
    const titles = ['Web Developer', 'UI/UX Designer', 'Full Stack Developer', 'AI Enthusiast'];
    const typedTitle = document.getElementById('typed-title');
    const typedText = document.getElementById('typed-text');
    
    if (typedTitle && typedText) {
        let titleIndex = 0;
        let textIndex = 0;
        let textValues = ['"Building Amazing UIs"', '"Creating Digital Experiences"', '"Solving Real-world Problems"'];
        let textCurrentIndex = 0;
        
        // Function for title typing effect
        function typeTitle() {
            if (!typedTitle) return;
            
            const currentTitle = titles[titleIndex];
            const currentCharIndex = typedTitle.textContent.length;
            
            if (currentCharIndex < currentTitle.length) {
                typedTitle.textContent += currentTitle.charAt(currentCharIndex);
                setTimeout(typeTitle, 100);
            } else {
                setTimeout(eraseTitle, 2000);
            }
        }
        
        // Function to erase title
        function eraseTitle() {
            if (!typedTitle) return;
            
            if (typedTitle.textContent.length > 0) {
                typedTitle.textContent = typedTitle.textContent.slice(0, -1);
                setTimeout(eraseTitle, 50);
            } else {
                titleIndex = (titleIndex + 1) % titles.length;
                setTimeout(typeTitle, 500);
            }
        }
        
        // Function for status text typing effect
        function typeText() {
            if (!typedText) return;
            
            const currentText = textValues[textCurrentIndex];
            const currentCharIndex = typedText.textContent.length;
            
            if (currentCharIndex < currentText.length) {
                typedText.textContent += currentText.charAt(currentCharIndex);
                setTimeout(typeText, 70);
            } else {
                setTimeout(eraseText, 3000);
            }
        }
        
        // Function to erase text
        function eraseText() {
            if (!typedText) return;
            
            if (typedText.textContent.length > 0) {
                typedText.textContent = typedText.textContent.slice(0, -1);
                setTimeout(eraseText, 35);
            } else {
                textCurrentIndex = (textCurrentIndex + 1) % textValues.length;
                setTimeout(typeText, 500);
            }
        }
        
        // Start both typing effects
        typeTitle();
        typeText();
    }
}

// Enhanced typing effect with cursor animation for hero section
function setupEnhancedTypingEffect() {
    const titles = ['Web Developer', 'UI/UX Designer', 'Full Stack Developer', 'AI Enthusiast'];
    const typedTitle = document.getElementById('typed-title');
    const typedText = document.getElementById('typed-text');
    
    if (typedTitle && typedText) {
        let titleIndex = 0;
        let textIndex = 0;
        let textValues = ['"Building Amazing UIs"', '"Creating Digital Experiences"', '"Solving Real-world Problems"'];
        let textCurrentIndex = 0;
        let isDeleting = false;
        let isWaiting = false;
        let charIndex = 0;
        
        // Function for more natural typing effect
        function typeWithNaturalTiming() {
            if (!typedTitle) return;
            
            const currentTitle = titles[titleIndex];
            
            if (!isDeleting && charIndex < currentTitle.length) {
                // Typing
                typedTitle.textContent = currentTitle.substring(0, charIndex + 1);
                charIndex++;
                
                // Random timing for more natural effect
                const randomDelay = Math.random() * 50 + 50;
                setTimeout(typeWithNaturalTiming, randomDelay);
            } 
            else if (isDeleting && charIndex > 0) {
                // Deleting
                typedTitle.textContent = currentTitle.substring(0, charIndex - 1);
                charIndex--;
                
                setTimeout(typeWithNaturalTiming, 30);
            } 
            else if (!isDeleting && charIndex === currentTitle.length) {
                // Pause at the end of typing
                isDeleting = true;
                setTimeout(typeWithNaturalTiming, 2000);
            } 
            else {
                // Move to the next title
                isDeleting = false;
                titleIndex = (titleIndex + 1) % titles.length;
                charIndex = 0;
                setTimeout(typeWithNaturalTiming, 500);
            }
        }
        
        // Function for status text typing effect with natural timing
        function typeCodeStatus() {
            if (!typedText) return;
            
            const currentText = textValues[textCurrentIndex];
            
            if (!isWaiting && textIndex < currentText.length) {
                // Typing
                typedText.textContent = currentText.substring(0, textIndex + 1);
                textIndex++;
                
                // Random timing for more natural effect
                const randomDelay = Math.random() * 40 + 30;
                setTimeout(typeCodeStatus, randomDelay);
            } 
            else if (isWaiting && textIndex > 0) {
                // Deleting
                typedText.textContent = currentText.substring(0, textIndex - 1);
                textIndex--;
                
                setTimeout(typeCodeStatus, 25);
            } 
            else if (!isWaiting && textIndex === currentText.length) {
                // Pause at the end of typing
                isWaiting = true;
                setTimeout(typeCodeStatus, 3000);
            } 
            else {
                // Move to the next text
                isWaiting = false;
                textCurrentIndex = (textCurrentIndex + 1) % textValues.length;
                textIndex = 0;
                setTimeout(typeCodeStatus, 500);
            }
        }
        
        // Add a subtle floating animation to the code editor
        const codeEditor = document.querySelector('.code-editor');
        if (codeEditor) {
            codeEditor.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Calculate rotation based on mouse position
                const rotateY = ((x / rect.width) - 0.5) * 5;
                const rotateX = ((y / rect.height) - 0.5) * -5;
                
                // Apply subtle rotation with perspective
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            
            codeEditor.addEventListener('mouseleave', function() {
                // Reset to default position with animation
                this.style.transition = 'transform 0.5s ease-out';
                this.style.transform = 'perspective(1000px) rotateY(-5deg)';
                
                // Remove transition after animation completes
                setTimeout(() => {
                    this.style.transition = '';
                }, 500);
            });
        }
        
        // Start both typing effects
        typeWithNaturalTiming();
        typeCodeStatus();
    }
}

// Filter functionality for work/portfolio section
function setupFilterFunctionality() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const workCards = document.querySelectorAll('.work-card');
    
    if (filterButtons.length && workCards.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter category
                const category = this.getAttribute('data-filter');
                
                // Filter work cards
                workCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    
                    if (category === 'all' || category === cardCategory) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
}

// Function to add particle effects to sections
function setupParticles() {
    const contactParticles = document.querySelector('.contact-particles');
    const footerParticles = document.getElementById('footer-particles');
    
    if (contactParticles) {
        createParticles(contactParticles, 30, ['#004BA0', '#D1AB3E']);
    }
    
    if (footerParticles) {
        createParticles(footerParticles, 40, ['#D1AB3E', '#004BA0', '#ffffff']);
    }
    
    function createParticles(container, count, colors) {
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            const size = Math.random() * 5 + 2;
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            particle.style.position = 'absolute';
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.backgroundColor = color;
            particle.style.borderRadius = '50%';
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.opacity = Math.random() * 0.5 + 0.2;
            particle.style.animation = `floatParticle ${Math.random() * 15 + 10}s linear infinite`;
            particle.style.transform = `scale(${Math.random() * 0.6 + 0.5})`;
            
            container.appendChild(particle);
        }
    }
}

// Setup animations on scroll
function setupScrollAnimations() {
    const sections = document.querySelectorAll('section');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-viewport');
                
                // Animate skill bars when they come into view
                if (entry.target.id === 'work') {
                    animateSkillBars();
                }
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });
}

// Function to animate skill bars
function animateSkillBars() {
    const progressBars = document.querySelectorAll('.progress');
    
    setTimeout(() => {
        progressBars.forEach(bar => {
            const progress = bar.parentElement.previousElementSibling.querySelector('.skill-percentage').textContent;
            const value = parseFloat(progress) / 100;
            bar.style.transform = `scaleX(${value})`;
        });
    }, 300);
}
