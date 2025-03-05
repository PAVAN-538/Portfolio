// Select elements
// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".nav-links");

// // Toggle mobile menu
// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
// });

// // Close menu when clicking a link
// document.querySelectorAll(".nav-links a").forEach((link) => {
//   link.addEventListener("click", () => {
//     navLinks.classList.remove("active");
//   });
// });


// Smooth scroll for anchor links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
        
//         const targetId = this.getAttribute('href');
//         const targetElement = document.querySelector(targetId);
        
//         window.scrollTo({
//             top: targetElement.offsetTop - 70, // Offset for fixed header
//             behavior: 'smooth'
//         });
//     });
// });


// Contact form handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Form data object
    const formData = {
        name: name,
        email: email,
        message: message
    };
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    
    // Reset form and show success message
    contactForm.reset();
    alert('Thank you for your message! I will get back to you soon.');
});

// Email validation helper function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Reveal elements on scroll
const revealElements = document.querySelectorAll('.section-title, .about-content, .project-card, .skill');

function checkReveal() {
    const windowHeight = window.innerHeight;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('revealed');
        }
    });
}

// Add CSS for animations
// Add this to your CSS file:
/*
.section-title, .about-content, .project-card, .skill {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.revealed {
    opacity: 1;
    transform: translateY(0);
}
*/

// Check for elements to reveal on page load and scroll
window.addEventListener('load', checkReveal);
window.addEventListener('scroll', checkReveal);


// Highlight active navigation link based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active links
// Add this to your CSS file:
/*
.nav-links a.active {
    color: #3498db;
}
*/


// If you have filter buttons for project categories
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get filter value
        const filter = button.getAttribute('data-filter');
        
        // Filter projects
        projectCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
            } else if (card.classList.contains(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});


// If you want to add a dark mode feature
const darkModeToggle = document.querySelector('.dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Save preference to local storage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Check for saved preference
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}