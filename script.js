// BACKGROUND MUSIC

const music = document.getElementById("birthdayMusic");
const musicBtn = document.querySelector(".music-btn");

async function toggleMusic() {
    if (!music) return;

    if (music.paused) {
        try {
            await music.play();
            if (musicBtn) musicBtn.innerText = "♫ Pause Music";
        } catch (error) {
            alert("Please check your birthday.mp3 file!");
        }
    } else {
        music.pause();
        if (musicBtn) musicBtn.innerText = "♫ Play Music";
    }
}

// BIRTHDAY COUNTDOWN
// Change this date to Shivendra's birthday.

const birthdayDate = new Date("2026-12-01T00:00:00").getTime();

function updateCountdown() {
    const daysElement = document.getElementById("days");

    if (!daysElement) return;

    const distance = birthdayDate - Date.now();

    if (distance <= 0) {
        document.getElementById("countdown").innerHTML =
            "<h2>Happy Birthday Shivendra! 🎂</h2>";
        return;
    }

    document.getElementById("days").innerText =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("hours").innerText =
        Math.floor((distance / (1000 * 60 * 60)) % 24);

    document.getElementById("minutes").innerText =
        Math.floor((distance / (1000 * 60)) % 60);

    document.getElementById("seconds").innerText =
        Math.floor((distance / 1000) % 60);
}

updateCountdown();
setInterval(updateCountdown, 1000);


// GALLERY IMAGE PREVIEW

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const largeImage = document.getElementById("largeImage");

galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
        lightbox.classList.add("show");
        largeImage.src = img.src;
    });
});

function closeLightbox() {
    if (lightbox) {
        lightbox.classList.remove("show");
    }
}

if (lightbox) {
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });
}


// BIRTHDAY GIFT SURPRISE

const openGift = document.getElementById("openGift");
const surpriseMessage = document.getElementById("surpriseMessage");
const giftBox = document.getElementById("giftBox");

if (openGift) {
    openGift.addEventListener("click", () => {

        surpriseMessage.classList.add("show");

        giftBox.style.display = "none";
        openGift.style.display = "none";

        createCelebration();

        surpriseMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
}


// GOLDEN AND PINK CELEBRATION

function createCelebration() {

    const symbols = ["✨", "💛", "💗", "🎉", "🌸", "✦"];

    for (let i = 0; i < 65; i++) {

        const particle = document.createElement("span");

        particle.innerText =
            symbols[Math.floor(Math.random() * symbols.length)];

        particle.style.position = "fixed";
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.top = "-40px";
        particle.style.fontSize = "22px";
        particle.style.pointerEvents = "none";
        particle.style.zIndex = "9999";

        document.body.appendChild(particle);

        const duration = 2500 + Math.random() * 2500;

        particle.animate([
            {
                transform: "translateY(0) rotate(0deg)",
                opacity: 1
            },
            {
                transform: `translateY(110vh) rotate(600deg)`,
                opacity: 0
            }
        ], {
            duration: duration,
            easing: "ease-in"
        });

        setTimeout(() => {
            particle.remove();
        }, duration);
    }
}