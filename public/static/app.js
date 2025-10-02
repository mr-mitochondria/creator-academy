// ===== CREATOR ACADEMY INTERACTIVE FEATURES =====

document.addEventListener('DOMContentLoaded', function() {
    console.log('Creator Academy: Initializing...');
    
    // Initialize all features
    initCustomCursor();
    initSmoothScrolling();
    init3DHero();
    initScrollAnimations();
    initMobileMenu();
    initFAQ();
    initCurriculumTimeline();
    initFormHandlers();
    initParallaxEffects();
    
    console.log('Creator Academy: All features initialized');
});

// ===== CUSTOM CURSOR =====
function initCustomCursor() {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;
    
    // Only enable custom cursor on desktop
    if (window.innerWidth <= 768) {
        cursor.style.display = 'none';
        document.body.style.cursor = 'auto';
        return;
    }
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Smooth cursor following
    function updateCursor() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        
        cursorX += dx * 0.1;
        cursorY += dy * 0.1;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(updateCursor);
    }
    updateCursor();
    
    // Cursor interactions
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.background = 'radial-gradient(circle, #00f3ff 0%, transparent 50%)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.background = 'radial-gradient(circle, #00f3ff 0%, transparent 70%)';
        });
    });
}

// ===== SMOOTH SCROLLING =====
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== 3D HERO ANIMATION =====
function init3DHero() {
    const heroContainer = document.getElementById('hero-3d');
    if (!heroContainer || !window.THREE) {
        console.log('Three.js not loaded or hero container not found');
        return;
    }
    
    try {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        heroContainer.appendChild(renderer.domElement);
        
        // Create geometric constellation
        const geometries = [
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.SphereGeometry(0.5, 32, 32),
            new THREE.OctahedronGeometry(0.7),
            new THREE.TetrahedronGeometry(0.8)
        ];
        
        const material = new THREE.MeshBasicMaterial({
            color: 0x00f3ff,
            wireframe: true,
            transparent: true,
            opacity: 0.6
        });
        
        const objects = [];
        const positions = [
            { x: -4, y: 2, z: -5 },
            { x: 4, y: -1, z: -3 },
            { x: -2, y: -3, z: -4 },
            { x: 3, y: 3, z: -6 },
            { x: 0, y: 0, z: -2 },
            { x: -6, y: 1, z: -7 }
        ];
        
        positions.forEach((pos, index) => {
            const geometry = geometries[index % geometries.length];
            const mesh = new THREE.Mesh(geometry, material.clone());
            mesh.position.set(pos.x, pos.y, pos.z);
            mesh.rotation.x = Math.random() * Math.PI;
            mesh.rotation.y = Math.random() * Math.PI;
            scene.add(mesh);
            objects.push(mesh);
        });
        
        // Add connecting lines
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0x00f3ff,
            transparent: true,
            opacity: 0.3
        });
        
        for (let i = 0; i < objects.length; i++) {
            for (let j = i + 1; j < objects.length; j++) {
                const geometry = new THREE.BufferGeometry().setFromPoints([
                    objects[i].position,
                    objects[j].position
                ]);
                const line = new THREE.Line(geometry, lineMaterial);
                scene.add(line);
            }
        }
        
        camera.position.z = 5;
        
        // Animation loop
        let mouseX = 0, mouseY = 0;
        
        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        });
        
        function animate() {
            requestAnimationFrame(animate);
            
            // Rotate objects
            objects.forEach((obj, index) => {
                obj.rotation.x += 0.01 * (index % 2 === 0 ? 1 : -1);
                obj.rotation.y += 0.01 * (index % 3 === 0 ? 1 : -1);
                
                // Subtle floating animation
                obj.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
            });
            
            // Camera follows mouse with parallax effect
            camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
            camera.position.y += (mouseY * 2 - camera.position.y) * 0.05;
            camera.lookAt(scene.position);
            
            renderer.render(scene, camera);
        }
        
        animate();
        
        // Handle window resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
        
    } catch (error) {
        console.log('3D animation error:', error);
        // Fallback: add a simple animated background
        heroContainer.innerHTML = '<div class="loading-3d">✨ Loading Experience...</div>';
    }
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll(`
        .outcome-card, .benefit-card, .month-capsule, .format-item,
        .company-card, .milestone, .faq-item
    `);
    
    animateElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
    
    // GSAP ScrollTrigger animations (if available)
    if (window.gsap && window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
        
        // Hero text animations
        gsap.timeline()
            .from('.hero-title', { duration: 1, y: 50, opacity: 0, ease: 'power3.out' })
            .from('.hero-subtitle', { duration: 1, y: 30, opacity: 0, ease: 'power3.out' }, '-=0.5')
            .from('.trust-bar', { duration: 0.8, y: 20, opacity: 0, ease: 'power3.out' }, '-=0.3')
            .from('.cta-buttons', { duration: 0.8, y: 20, opacity: 0, ease: 'power3.out' }, '-=0.2');
        
        // Section title animations
        gsap.utils.toArray('.section-title').forEach(title => {
            gsap.from(title, {
                duration: 1,
                y: 50,
                opacity: 0,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: title,
                    start: 'top 80%'
                }
            });
        });
    }
}

// ===== MOBILE MENU =====
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!menuBtn || !mobileMenu) return;
    
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        document.body.style.overflow = mobileMenu.classList.contains('hidden') ? 'auto' : 'hidden';
    });
    
    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
    });
}

// ===== FAQ ACCORDION =====
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('i');
        
        question.addEventListener('click', () => {
            const isActive = question.classList.contains('active');
            
            // Close all other FAQs
            faqItems.forEach(otherItem => {
                const otherQuestion = otherItem.querySelector('.faq-question');
                const otherAnswer = otherItem.querySelector('.faq-answer');
                const otherIcon = otherQuestion.querySelector('i');
                
                otherQuestion.classList.remove('active');
                otherAnswer.classList.add('hidden');
                otherIcon.style.transform = 'rotate(0deg)';
            });
            
            // Toggle current FAQ
            if (!isActive) {
                question.classList.add('active');
                answer.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
}

// ===== CURRICULUM TIMELINE =====
function initCurriculumTimeline() {
    const monthCapsules = document.querySelectorAll('.month-capsule');
    
    monthCapsules.forEach(capsule => {
        const card = capsule.querySelector('.neumorphic-card');
        const details = capsule.querySelector('.month-details');
        
        if (!card || !details) return;
        
        card.addEventListener('click', () => {
            // Close all other month details
            monthCapsules.forEach(otherCapsule => {
                const otherDetails = otherCapsule.querySelector('.month-details');
                if (otherDetails && otherDetails !== details) {
                    otherDetails.classList.add('hidden');
                }
            });
            
            // Toggle current month details
            details.classList.toggle('hidden');
        });
    });
    
    // Scroll-triggered timeline activation
    const timelineLine = document.querySelector('.timeline-line');
    if (timelineLine) {
        window.addEventListener('scroll', () => {
            const rect = timelineLine.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));
            
            timelineLine.style.transform = `scaleY(${progress})`;
        });
    }
}

// ===== FORM HANDLERS =====
function initFormHandlers() {
    // Invitation request form
    const invitationForm = document.getElementById('invitation-form');
    if (invitationForm) {
        invitationForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(invitationForm);
            const data = Object.fromEntries(formData.entries());
            
            try {
                const response = await fetch('/api/request-invite', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                
                const result = await response.json();
                
                if (result.success) {
                    showNotification('Request submitted successfully! We\'ll be in touch soon.', 'success');
                    invitationForm.reset();
                } else {
                    throw new Error('Submission failed');
                }
            } catch (error) {
                showNotification('Error submitting request. Please try again.', 'error');
            }
        });
    }
    
    // Info session form
    const infoSessionForm = document.getElementById('info-session-form');
    if (infoSessionForm) {
        infoSessionForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(infoSessionForm);
            const data = Object.fromEntries(formData.entries());
            
            try {
                const response = await fetch('/api/info-session', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                
                const result = await response.json();
                
                if (result.success) {
                    showNotification('Info session request submitted! We\'ll contact you within 24 hours to schedule.', 'success');
                    infoSessionForm.reset();
                } else {
                    throw new Error('Submission failed');
                }
            } catch (error) {
                showNotification('Error submitting request. Please try again.', 'error');
            }
        });
    }
}

// ===== PARALLAX EFFECTS =====
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const rate = scrolled * -0.5;
            element.style.transform = `translate3d(0, ${rate}px, 0)`;
        });
        
        // Hero parallax
        const hero = document.getElementById('hero');
        if (hero) {
            const heroParallax = scrolled * 0.3;
            hero.style.transform = `translate3d(0, ${heroParallax}px, 0)`;
        }
    });
}

// ===== UTILITY FUNCTIONS =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transform transition-all duration-300 ${
        type === 'success' ? 'bg-green-600' : 
        type === 'error' ? 'bg-red-600' : 'bg-blue-600'
    } text-white`;
    
    notification.innerHTML = `
        <div class="flex items-center">
            <span class="flex-1">${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-white hover:text-gray-200">
                ✕
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// ===== PERFORMANCE OPTIMIZATIONS =====
// Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle resize events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply performance optimizations
window.addEventListener('scroll', debounce(initParallaxEffects, 16));
window.addEventListener('resize', throttle(() => {
    // Handle responsive changes
    if (window.innerWidth <= 768) {
        const cursor = document.getElementById('custom-cursor');
        if (cursor) cursor.style.display = 'none';
        document.body.style.cursor = 'auto';
    } else {
        const cursor = document.getElementById('custom-cursor');
        if (cursor) cursor.style.display = 'block';
        document.body.style.cursor = 'none';
    }
}, 250));

// ===== EASTER EGGS & DELIGHTERS =====
// Konami code for special animation
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        triggerSpecialAnimation();
        konamiCode = [];
    }
});

function triggerSpecialAnimation() {
    // Special neon pulse animation
    document.body.style.animation = 'neonPulse 2s ease-in-out';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 2000);
    
    showNotification('🚀 Creator mode activated! Welcome to the future of education.', 'success');
}

// Add neon pulse animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes neonPulse {
        0%, 100% { box-shadow: inset 0 0 0 0 rgba(0, 243, 255, 0); }
        50% { box-shadow: inset 0 0 50px 20px rgba(0, 243, 255, 0.1); }
    }
`;
document.head.appendChild(style);

// Console message for developers
console.log(`
%c🚀 Creator Academy %c- Built for the future of education
%cInterested in how this was built? 
Check out the source code and learn more at Creator Academy!
`, 
'color: #00f3ff; font-size: 16px; font-weight: bold;',
'color: #ffffff; font-size: 12px;',
'color: #888; font-size: 10px;'
);