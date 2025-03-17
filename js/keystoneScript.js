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

// IMAGE CLICK POPUP
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("#popImage");

    images.forEach(image => {
        image.addEventListener("click", () => {
            createImagePopup(image.src);
        });
    });
});
function createImagePopup(imgSrc) {
    const overlay = document.createElement("div");
    const popupImg = document.createElement("img");

    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0, 0, 0, 0.8)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "1000";

    popupImg.src = imgSrc;
    popupImg.style.maxWidth = "90%";
    popupImg.style.maxHeight = "90%";
    popupImg.style.transition = "transform 0.3s ease";
    popupImg.style.transform = "scale(0.8)";

    overlay.appendChild(popupImg);
    document.body.appendChild(overlay);
    setTimeout(() => {
        popupImg.style.transform = "scale(1)";
    }, 50);

    // Click anywhere to close
    overlay.addEventListener("click", () => {
        closePopup(overlay);
    });
    // Close with ESC key
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closePopup(overlay);
        }
    });
}
function closePopup(overlay) {
    overlay.style.opacity = "0";
    setTimeout(() => {
        overlay.remove();
    }, 150);
}
// PARALLAX FUNCTIONS

// DROPDOWN MENUS

// ASYNCHRONOUS FUNCTIONS