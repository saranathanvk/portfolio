document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Sticky Navigation on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.backgroundColor = 'var(--white)';
            navbar.style.boxShadow = 'var(--box-shadow)';
        }
    });

    // Typing Animation
    const typingText = document.querySelector('.typing-text');
    const words = ['Web Developer', 'UI/UX Designer', 'Freelancer'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isEnd = false;

    function type() {
        const currentWord = words[wordIndex];
        const currentChar = currentWord.substring(0, charIndex);
        typingText.textContent = currentChar;

        if (!isDeleting && charIndex < currentWord.length) {
            // Typing
            charIndex++;
            setTimeout(type, 100);
        } else if (isDeleting && charIndex > 0) {
            // Deleting
            charIndex--;
            setTimeout(type, 50);
        } else {
            // Change word
            isDeleting = !isDeleting;
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
            }
            setTimeout(type, 1000);
        }
    }

    // Start typing animation
    setTimeout(type, 1000);

    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }

    // Intersection Observer for skill bars animation
    const skillsSection = document.querySelector('.skills');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    observer.observe(skillsSection);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
// Initialize AOS (Animate On Scroll) library
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Project card hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const hue = Math.floor(Math.random() * 360);
        card.style.setProperty('--primary-color', `hsl(${hue}, 70%, 60%)`);
        card.style.setProperty('--secondary-color', `hsl(${hue + 30}, 70%, 60%)`);
    });
});
// Tab functionality for skills page
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

if (tabBtns.length > 0) {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Show corresponding content
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Animate skill bars when they come into view
const skillCards = document.querySelectorAll('.skill-card');

if (skillCards.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevel = entry.target.querySelector('.skill-level');
                const width = skillLevel.style.width;
                skillLevel.style.width = '0';
                setTimeout(() => {
                    skillLevel.style.width = width;
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    skillCards.forEach(card => {
        observer.observe(card);
    });
}

// Random color generator for skill cards
document.querySelectorAll('.skill-card').forEach(card => {
    const hue = Math.floor(Math.random() * 360);
    card.style.setProperty('--primary-color', `hsl(${hue}, 70%, 60%)`);
    card.style.setProperty('--secondary-color', `hsl(${hue + 30}, 70%, 60%)`);
});
// Resume page specific animations
document.addEventListener('DOMContentLoaded', function() {
    // Animate timeline items sequentially
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (timelineItems.length > 0) {
        timelineItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 200 * index);
        });
    }
    
    // Add hover effect to resume sections
    const resumeSections = document.querySelectorAll('.resume-section');
    
    resumeSections.forEach(section => {
        const hue = Math.floor(Math.random() * 360);
        section.style.setProperty('--primary-color', `hsl(${hue}, 70%, 60%)`);
        section.style.setProperty('--secondary-color', `hsl(${hue + 30}, 70%, 60%)`);
        
        section.addEventListener('mouseenter', () => {
            const newHue = Math.floor(Math.random() * 360);
            section.style.setProperty('--primary-color', `hsl(${newHue}, 70%, 60%)`);
            section.style.setProperty('--secondary-color', `hsl(${newHue + 30}, 70%, 60%)`);
        });
    });
    
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
});



// About page specific animations
document.addEventListener('DOMContentLoaded', function() {
    // Animate counter numbers
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    if (counters.length > 0) {
        counters.forEach(counter => {
            const animate = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / speed;
                
                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(animate, 1);
                } else {
                    counter.innerText = target;
                }
            };
            
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    animate();
                    observer.unobserve(entries[0].target);
                }
            }, { threshold: 0.5 });
            
            observer.observe(counter);
        });
    }
    
    // Add hover effect to value cards
    const valueCards = document.querySelectorAll('.value-card');
    
    valueCards.forEach(card => {
        const hue = Math.floor(Math.random() * 360);
        card.style.setProperty('--primary-color', `hsl(${hue}, 70%, 60%)`);
        card.style.setProperty('--secondary-color', `hsl(${hue + 30}, 70%, 60%)`);
        
        card.addEventListener('mouseenter', () => {
            const newHue = Math.floor(Math.random() * 360);
            card.style.setProperty('--primary-color', `hsl(${newHue}, 70%, 60%)`);
            card.style.setProperty('--secondary-color', `hsl(${newHue + 30}, 70%, 60%)`);
        });
    });
    
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
});




// Services page specific animations
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        const hue = Math.floor(Math.random() * 360);
        card.style.setProperty('--primary-color', `hsl(${hue}, 70%, 60%)`);
        card.style.setProperty('--secondary-color', `hsl(${hue + 30}, 70%, 60%)`);
        
        card.addEventListener('mouseenter', () => {
            const newHue = Math.floor(Math.random() * 360);
            card.style.setProperty('--primary-color', `hsl(${newHue}, 70%, 60%)`);
            card.style.setProperty('--secondary-color', `hsl(${newHue + 30}, 70%, 60%)`);
        });
    });
    
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
});





// Contact page specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show success message (in a real app, you'd want proper error handling too)
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
});