document.addEventListener('DOMContentLoaded', () => {
    // Cursor Follower
    const cursor = document.getElementById('cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
    }

    // Hover effect for links
    const interactiveElements = document.querySelectorAll('a, button, .skill-tag, .btn');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (cursor) {
                cursor.style.transform = 'scale(2.5)';
                cursor.style.backgroundColor = 'rgba(99, 102, 241, 0.3)';
            }
        });
        el.addEventListener('mouseleave', () => {
            if (cursor) {
                cursor.style.transform = 'scale(1)';
                cursor.style.backgroundColor = 'var(--primary)';
            }
        });
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // Reveal on Scroll
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // Smooth scroll only for hash links
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#') && href !== '#') {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Handle Mobile Menu (if added later)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksList = document.querySelector('.nav-links');
    if (menuToggle && navLinksList) {
        menuToggle.addEventListener('click', () => {
            navLinksList.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });
    }
});
