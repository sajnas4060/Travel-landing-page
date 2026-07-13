// =============== Hamburger Menu ===============
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navigation = document.getElementById('navigation');
const navLinks = document.querySelectorAll('#navList a');
 
function closeMenu() {
    navigation.classList.remove('open');
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
}
 
function toggleMenu() {
    const isOpen = navigation.classList.toggle('open');
    hamburgerBtn.classList.toggle('active', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
}
 
if (hamburgerBtn && navigation) {
    hamburgerBtn.addEventListener('click', toggleMenu);
 

    navLinks.forEach((link) => link.addEventListener('click', closeMenu));

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
}