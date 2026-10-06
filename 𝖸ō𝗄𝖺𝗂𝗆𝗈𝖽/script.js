// ================================
// YŌKAIMOD
// Main JavaScript
// ================================

console.log("Yōkaimod loaded.");

const marinHero = document.querySelector(".marin-hero");
const marinHeroImage = document.querySelector(".marin-hero-image");
const marinHeroOverlay = document.querySelector(".marin-hero-overlay");

if (marinHero && marinHeroImage && marinHeroOverlay) {

    window.addEventListener("scroll", () => {

        const scroll = window.scrollY;
        const heroHeight = marinHero.offsetHeight;

        const progress = Math.min(scroll / heroHeight, 1);

        // Bild wird kleiner
        const scale = 1.03 - (progress * 0.12);

        // Bild bewegt sich nach oben
        const translateY = -(progress * 80);

        // Bild wird dunkler
        const brightness = 1 - (progress * 0.65);

        // Dunkler Overlay wird stärker
        const opacity = progress;

        marinHeroImage.style.transform =
            `translateY(${translateY}px) scale(${scale})`;

        marinHeroImage.style.filter =
            `brightness(${brightness})`;

        marinHeroOverlay.style.opacity = opacity;

    });

}