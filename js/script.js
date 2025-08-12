function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("active");
}


// Hivatkozások a DOM elemekhez
const modal = document.getElementById("modal");
const fullImage = document.getElementById("fullImage");
const close = document.getElementById("close");

// Az összes képre kattintás események hozzáadása
const images = document.querySelectorAll(".image");

images.forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";  // Megjeleníti a modált
        fullImage.src = img.src;       // A modális ablakba betölti a képet
    };
});

// X gomb kattintás esemény (bezárja a modált)
close.onclick = function() {
    modal.style.display = "none";  // Elrejti a modális ablakot
};

// Ha a felhasználó a modál háttérre kattint, bezárja
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";  // Elrejti a modált
    }
};