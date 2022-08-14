const navMenu = document.getElementById('container-main_section_links');
const navToggle = document.getElementById('bar-toggle');

// open or close the menu
navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('container-main_section_links_nav-visible');

    // change atrr by arial-label for accessibility

    if (navMenu.classList.contains('container-main_section_links_nav-visible')) {
        navToggle.setAttribute('aria-label', 'Close navigation');
    } else {
        navToggle.setAttribute('aria-label', 'Open navigation');
    }
});