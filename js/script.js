document.addEventListener('DOMContentLoaded', () => {

    if (typeof gsap !== 'undefined') {
        const heroContent = document.querySelectorAll('#home h1, #home p');
        gsap.from(heroContent, {
            duration: 1,
            y: 50,
            opacity: 0,
            stagger: 0.2,
            ease: 'power3.out'
        });
    } else {
        console.warn("GSAP library not loaded. Animations are disabled.");
    }

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    const navHeight = document.querySelector('nav').offsetHeight;

    const onScroll = () => {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - navHeight - 1) {
                currentSectionId = section.getAttribute('id');
            }
        });
        
        if (window.innerHeight + Math.ceil(window.pageYOffset) >= document.body.offsetHeight) {
            currentSectionId = sections[sections.length - 1].getAttribute('id');
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === currentSectionId) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

});