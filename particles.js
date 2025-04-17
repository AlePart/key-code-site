/* Configurazione ottimizzata per particles.js */
document.addEventListener('DOMContentLoaded', function() {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 60,
          density: {
            enable: true,
            value_area: 1000
          }
        },
        color: {
          value: ['#3a86ff', '#00d4ff', '#4361ee']
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 5
          }
        },
        opacity: {
          value: 0.4,
          random: true,
          anim: {
            enable: true,
            speed: 0.3,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#3a86ff',
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 0.6
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 0.8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  } else {
    console.warn('particlesJS non è definito. Assicurati di includere il file particles.js prima di questo script.');
  }
  
  // Animazioni al Scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.reveal-on-scroll');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight * 0.85) {
        element.classList.add('active');
      }
    });
  };
  
  // Esegui al caricamento e allo scroll
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
});
