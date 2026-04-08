// Interactive elements should be ready ASAP
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
}

// Theme Toggle Logic (Important for UX)
const themeToggleBtn = document.getElementById('theme-toggle');
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');

if (themeToggleBtn && sunIcon && moonIcon) {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        document.documentElement.classList.add('light-theme');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }

    themeToggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('light-theme');
        if (document.documentElement.classList.contains('light-theme')) {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
            localStorage.setItem('theme', 'light');
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
            localStorage.setItem('theme', 'dark');
        }
    });
}

// Defer non-critical initializations
const deferInit = () => {
    // Zodiac Carousel Logic
    const track = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const cards = document.querySelectorAll('.zodiac-card');
    
    if (track && cards.length > 0) {
        let currentIndex = 0;
        let autoSlideTimer;
        track.style.gap = '1.5rem';
        let activeIndex = 0;
        
        function updateCarousel() {
            const cardW = cards[0].offsetWidth;
            const gap = 24;
            const trackW = track.parentElement.offsetWidth;
            const visibleCards = Math.max(1, Math.floor((trackW + gap) / (cardW + gap)));
            const maxIndex = cards.length - visibleCards;
            const targetSlot = (visibleCards > 1) ? 1 : 0;
            let targetCurrentIndex = activeIndex - targetSlot;
            currentIndex = Math.max(0, Math.min(targetCurrentIndex, maxIndex));
            const moveAmount = (cardW + gap) * currentIndex;
            track.style.transform = `translateX(-${moveAmount}px)`;
            cards.forEach(c => c.classList.remove('active'));
            if (cards[activeIndex]) cards[activeIndex].classList.add('active');
        }

        function slideNext() {
            activeIndex++;
            if (activeIndex >= cards.length) activeIndex = 0;
            updateCarousel();
        }

        function slidePrev() {
            activeIndex--;
            if (activeIndex < 0) activeIndex = cards.length - 1;
            updateCarousel();
        }

        if (nextBtn) nextBtn.addEventListener('click', () => { slideNext(); resetTimer(); });
        if (prevBtn) prevBtn.addEventListener('click', () => { slidePrev(); resetTimer(); });

        cards.forEach((card, index) => {
            card.addEventListener('click', () => {
                activeIndex = index;
                updateCarousel();
                resetTimer();
            });
        });

        function resetTimer() {
            clearInterval(autoSlideTimer);
            autoSlideTimer = setInterval(slideNext, 3000);
        }

        updateCarousel();
        resetTimer();
        track.parentElement.addEventListener('mouseenter', () => clearInterval(autoSlideTimer));
        track.parentElement.addEventListener('mouseleave', resetTimer);
        window.addEventListener('resize', updateCarousel);
    }
    
    // Testimonials Slider
    const tTrack = document.querySelector('.testimonials-track');
    const tDots = document.querySelectorAll('.slider-dots .dot');
    
    if (tTrack && tDots.length > 0) {
        let currentTIndex = 0;
        let maxTIndex = 2;
        let tInterval;
        
        const updateTSlider = () => {
            const firstCard = tTrack.querySelector('.testimonial-card');
            if(firstCard) {
                const cardWidth = firstCard.offsetWidth;
                const gap = 32;
                const containerW = tTrack.parentElement.offsetWidth;
                const visibleCards = Math.max(1, Math.floor((containerW + gap) / (cardWidth + gap)));
                const cardsCount = tTrack.querySelectorAll('.testimonial-card').length;
                maxTIndex = Math.max(0, cardsCount - visibleCards);
                let moveIdx = currentTIndex;
                if (moveIdx > maxTIndex) moveIdx = maxTIndex;
                const moveAmt = (cardWidth + gap) * moveIdx;
                tTrack.style.transform = `translateX(-${moveAmt}px)`;
                tDots.forEach((d, i) => d.classList.toggle('active', i === currentTIndex));
            }
        };

        const nextTSlide = () => {
            currentTIndex++;
            if (currentTIndex > maxTIndex) currentTIndex = 0;
            updateTSlider();
        };

        const startTInterval = () => { tInterval = setInterval(nextTSlide, 5000); };
        const stopTInterval = () => { clearInterval(tInterval); };

        tDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentTIndex = index;
                updateTSlider();
                stopTInterval();
                startTInterval();
            });
        });
        
        const tContainer = document.querySelector('.testimonials-carousel-container');
        if(tContainer) {
            tContainer.addEventListener('mouseenter', stopTInterval);
            tContainer.addEventListener('mouseleave', startTInterval);
        }

        window.addEventListener('resize', updateTSlider);
        setTimeout(updateTSlider, 50);
        startTInterval();
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Founder Name Scroll Animation
    const founderName = document.querySelector('.founder-name');
    if (founderName) {
        const founderObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-drop');
                    founderObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        founderObserver.observe(founderName);
    }
};

// Schedule non-critical work
if (window.requestIdleCallback) {
    window.requestIdleCallback(deferInit);
} else {
    setTimeout(deferInit, 100);
}
