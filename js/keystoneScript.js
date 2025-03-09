// DARK/LIGHT MODE TOGGLE

const toggleButton = document.getElementById('theme-toggle'); // ID FOR TOGGLE BUTTON
let currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

toggleButton.addEventListener('click', ()=>{
    currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        currentTheme = 'dark';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        currentTheme = 'light';
    }
    localStorage.setItem('theme', currentTheme);
});

// PARALLAX FUNCTIONS

// DROPDOWN MENUS

// ASYNCHRONOUS FUNCTIONS