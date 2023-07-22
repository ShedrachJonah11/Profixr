const navBar = document.getElementById("navBar");

function showMobileNav() {
    if (navBar.className === "nav-bar") {
        navBar.className += " mobile";
    } else {
        navBar.className = "nav-bar";
    }
}