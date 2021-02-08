const menuBars = document.querySelector('#menu-bars');
const overlay = document.querySelector('#overlay');
const nav1 = document.querySelector('#nav-1');
const nav2 = document.querySelector('#nav-2');
const nav3 = document.querySelector('#nav-3');
const nav4 = document.querySelector('#nav-4');
const nav5 = document.querySelector('#nav-5');

const navItems = [nav1, nav2, nav3, nav4, nav5];

function navAnimation(fromDirection, toDirection){
    navItems.forEach((nav, index) => {
        nav.classList
            .replace(`slide-${fromDirection}-${index + 1}`, `slide-${toDirection}-${index + 1}`);
    });
}

function toggleNav() {
    // Toggle: menu bars open-close
    menuBars.classList.toggle('change');
    // Toggle: menu active
    overlay.classList.toggle('overlay-active');

    if(overlay.classList.contains('overlay-active')){
        // animate in - overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        // animate in - nav item
        navAnimation('out', 'in');

    } else {
        // animate out - overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        // animate out - nav item
        navAnimation('in', 'out');

    }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach(nav => {
    nav.addEventListener('click', toggleNav);
});




