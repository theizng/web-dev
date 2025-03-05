const hamburgerIcon = document.getElementById('hamburger-icon');
const dropdownMenu = document.getElementById('dropdown-menu');

// Toggle menu function
function toggleMenu() {
    hamburgerIcon.classList.toggle('active');
    dropdownMenu.classList.toggle('active');
    
    // Prevent scrolling when menu is open
    document.body.style.overflow = hamburgerIcon.classList.contains('active') ? 'hidden' : '';
}

// Click handler
hamburgerIcon.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
        e.preventDefault();
        toggleMenu();
    }
});

// Close menu on resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburgerIcon.classList.remove('active');
        dropdownMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.hamburger-icon') && 
        !e.target.closest('.dropdown-menu') &&
        window.innerWidth <= 768) {
        hamburgerIcon.classList.remove('active');
        dropdownMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});
const floatingIcons = document.querySelector('.floating-contacts');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        floatingIcons.style.opacity = '1';
        floatingIcons.style.visibility = 'visible';
    } else {
        floatingIcons.style.opacity = '0';
        floatingIcons.style.visibility = 'hidden';
    }
})
// Khởi tạo trạng thái ban đầu
floatingIcons.style.opacity = '0';
floatingIcons.style.visibility = 'hidden';
floatingIcons.style.transition = 'all 0.4s ease';
