

const navMenu = document.getElementById('nav_menu'),
    toggleMenu = document.getElementById('nav_toggle'),
    closeMenu = document.getElementById('nav_close');

// SHOW
toggleMenu.addEventListener('click', () => {
    navMenu.classList.add('show');
});

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
});

// ======== mousemove home img


function mousemove(e){
    this.querySelectorAll('.move').forEach( layer => {
        const speed = layer.getAttribute('data-speed');

        const x = (window.innerWidth - e.pageX * speed) / 120;
        const y = (window.innerWidth - e.pageY * speed) / 120;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}

document.addEventListener('mousemove', mousemove);

// ==========gsap========
// nav
gsap.from('.nav_logo, .nav_toggle',  { opacity: 0, duration: 1, delay: 2, y: 10 });
gsap.from('.nav_item',  { opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: .2})

// home
gsap.from('.home_title',  { opacity: 0, duration: 1, delay: 1.6, y: 30 })
gsap.from('.home_desc',  { opacity: 0, duration: 1, delay: 1.8, y: 30 })
gsap.from('.home_btn',  { opacity: 0, duration: 1, delay: 2.1, y: 30 })
gsap.from('.home_img',  { opacity: 0, duration: 1, delay: 1.3, y: 30 })

