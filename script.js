// Esperar a que el DOM esté completamente cargado
window.onload = function() {
    initMenu();
    initScrollEffects();
    initForm();
    initAnimations();
    initWhatsAppButton();
};

// Función para el menú móvil
function initMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Cerrar menú al hacer clic en un enlace (solo en móvil)
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                }
            });
        });
    }
}

// Función para efectos de scroll
function initScrollEffects() {
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Scroll suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Función para el formulario
function initForm() {
    const form = document.getElementById('appointment-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envío del formulario
            showFormConfirmation();
            
            // Resetear el formulario
            this.reset();
        });
    }
}

function initMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
        
        // Cerrar menú al hacer clic en un enlace
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }
}



function showFormConfirmation() {
    alert('¡Gracias por tu reserva! Nos pondremos en contacto contigo pronto para confirmar tu cita.');
}

// Función para animaciones al hacer scroll
function initAnimations() {
    // Ejecutar al cargar la página
    checkScrollForAnimations();
    
    // Ejecutar al hacer scroll
    window.addEventListener('scroll', checkScrollForAnimations);
}

function checkScrollForAnimations() {
    const animatableElements = document.querySelectorAll(
        '.service-card, .about-content, .about-image, .gallery-item, .contact-info, .contact-form'
    );
    
    const windowHeight = window.innerHeight;
    
    animatableElements.forEach(function(element, index) {
        const elementPosition = element.getBoundingClientRect().top;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('fade-in', 'delay-' + (index % 4));
        }
    });
}

// Función para el botón de WhatsApp
function initWhatsAppButton() {
    const whatsappBtn = document.querySelector('.whatsapp-float');
    
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            // Aquí puedes agregar tracking si es necesario
            console.log('WhatsApp button clicked');
            // En un caso real, esto abriría el chat de WhatsApp
        });
    }
}