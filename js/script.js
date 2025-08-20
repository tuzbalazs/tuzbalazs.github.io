function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("active");
}



document.addEventListener("DOMContentLoaded", function () {
    // Hivatkozások a DOM elemekhez
    const modal = document.getElementById("modal");
    const fullImage = document.getElementById("fullImage");
    const close = document.getElementById("close");

    // Az összes képre kattintás események hozzáadása
    const images = document.querySelectorAll(".image");

    images.forEach(img => {
        img.onclick = function () {
            if (modal && fullImage) {
                modal.style.display = "block";  // Megjeleníti a modált
                fullImage.src = img.src;        // A modális ablakba betölti a képet
            }
        };
    });

    // Csak akkor állítsd be az onclick-et, ha az elem létezik
    if (close && modal) {
        close.onclick = function () {
            modal.style.display = "none";
        };

        // Ha a felhasználó a modál háttérre kattint, bezárja
        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
    }
});





