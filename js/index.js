// Store the original title
const originalTitle = document.title;

// Add event listeners for focus and blur events
window.addEventListener('blur', () => {
    document.title = 'COME BACK';
});

window.addEventListener('focus', () => {
    document.title = originalTitle;
});


// Navigation Bar

function toggleNav() {
    let navBar = document.getElementsByClassName('navbar')[0];
    let navIcon = document.getElementsByClassName('navicon')[0];
    if(navBar.classList.contains("hidden-nav") && !navBar.classList.contains("visible-nav")) {
        console.log('hidden-nav');
        navBar.classList.remove('hidden-nav');
        navBar.classList.add('visible-nav');
        navIcon.classList.add('open');
    } else {
        console.log('visible-nav');
        navBar.classList.remove('visible-nav');
        navBar.classList.add('hidden-nav');
        navIcon.classList.remove('open');
    }
} 