localStorage.getItem("theme");

localStorage.setItem("theme", newTheme);
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
const systemSettingLight = window.matchMedia("(prefers-color-scheme: light)");

const toggleTheme = () => {
    const root = document.documentElement;
    const currentTheme = root.getAttribute("data-theme");
    root.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
};

document.querySelector("#theme-toggle").addEventListener("click", toggleTheme);

// PARALLAX FUNCTIONS

// DROPDOWN MENUS

// ASYNCHRONOUS FUNCTIONS