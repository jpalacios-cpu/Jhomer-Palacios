function toggleMenu() {
    const nav = document.getElementById("navLinks");

    nav.classList.toggle("show");
}

// Close menu after clicking a navigation link
document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", function() {
        document.getElementById("navLinks")
            .classList.remove("show");
    });
});
