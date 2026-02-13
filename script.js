// Cambiar entre pestañas
/* document.querySelectorAll('.nav-btn').forEach(button => { */
/*     button.addEventListener('click', (e) => { */
/*         const tabName = e.target.dataset.tab; */
/*          */
        // Remover clase active de todos los botones
/*         document.querySelectorAll('.nav-btn').forEach(btn => { */
/*             btn.classList.remove('active'); */
/*         }); */
/*          */
        // Agregar clase active al botón clickeado
/*         e.target.classList.add('active'); */
/*          */
        // Remover clase active de todos los tabs
/*         document.querySelectorAll('.tab-content').forEach(tab => { */
/*             tab.classList.remove('active'); */
/*         }); */
/*          */
        // Agregar clase active al tab correspondiente
/*         document.getElementById(tabName).classList.add('active'); */
/*          */
        // Scroll al top suavemente
/*         window.scrollTo({ */
/*             top: 0, */
/*             behavior: 'smooth' */
/*         }); */
/*     }); */
/* }); */
/*  */
// Toggle para detalles de clases
/* function toggleClassInfo(card) { */
/*     const details = card.querySelector('.class-details'); */
/*     const preview = card.querySelector('.class-preview'); */
/*     const button = card.querySelector('.learn-more-btn'); */
/*      */
/*     if (details.style.display === 'none') { */
/*         details.style.display = 'block'; */
/*         preview.style.display = 'none'; */
/*         button.textContent = 'Ver menos'; */
/*     } else { */
/*         details.style.display = 'none'; */
/*         preview.style.display = 'block'; */
/*         button.textContent = 'Ver detalles'; */
/*     } */
/* } */
/*  */
// Efecto hover para tarjetas (animación adicional)
/* document.querySelectorAll('.class-card, .contact-card').forEach(card => { */
/*     card.addEventListener('mouseenter', function() { */
/*         this.style.transform = this.style.transform || 'translateY(-10px)'; */
/*     }); */
/* }); */
/*  */
// Animar elementos al hacer scroll
/* const observerOptions = { */
/*     threshold: 0.1, */
/*     rootMargin: '0px 0px -100px 0px' */
/* }; */
/*  */
/* const observer = new IntersectionObserver((entries) => { */
/*     entries.forEach(entry => { */
/*         if (entry.isIntersecting) { */
/*             entry.target.style.opacity = '1'; */
/*             entry.target.style.transform = 'translateY(0)'; */
/*         } */
/*     }); */
/* }, observerOptions); */
/*  */
/* document.querySelectorAll('.class-card, .competition-card, .contact-card').forEach(element => { */
/*     element.style.opacity = '0.7'; */
/*     element.style.transform = 'translateY(10px)'; */
/*     element.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; */
/*     observer.observe(element); */
/* }); */
/*  */
// Suavidad al scroll
/* document.documentElement.style.scrollBehavior = 'smooth'; */
