// ===============================
// 1. Ефект тремтіння документа (old file / SCP vibration)
// ===============================

const documentElement = document.querySelector(".document");

setInterval(() => {
    const intensity = 0.6; // сила тремтіння
    const x = (Math.random() - 0.5) * intensity;
    const y = (Math.random() - 0.5) * intensity;

    documentElement.style.transform = `translate(${x}px, ${y}px)`;
}, 50);

// CRT noise overlay
const noiseLayer = document.createElement("div");
noiseLayer.style.position = "fixed";
noiseLayer.style.left = 0;
noiseLayer.style.top = 0;
noiseLayer.style.width = "100%";
noiseLayer.style.height = "100%";
noiseLayer.style.pointerEvents = "none";
noiseLayer.style.zIndex = 9999;
noiseLayer.style.opacity = "0.05";
noiseLayer.style.backgroundImage = "url('https://i.imgur.com/8QfURwZ.png')";
noiseLayer.style.mixBlendMode = "overlay";
document.body.appendChild(noiseLayer);

setInterval(() => {
    noiseLayer.style.opacity = 0.03 + Math.random() * 0.03;
}, 120);


// ===============================
// 2. Scroll Reveal Animation
// ===============================

const sections = document.querySelectorAll(".section, .addendum, .education-item");

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();

        if (rect.top < triggerBottom) {
            section.style.transition = "all 0.8s ease-out";
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        } else {
            section.style.opacity = 0;
            section.style.transform = "translateY(20px)";
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ===============================
// 3. Миготіння ⚠ (scary warning flicker)
// ===============================

const warningIcon = document.querySelector(".warning-icon");

setInterval(() => {
    if (Math.random() < 0.1) { // 10% шанс
        warningIcon.style.opacity = "0.1";
        setTimeout(() => (warningIcon.style.opacity = "1"), 80);
    }
}, 300);


// ===============================
// 4. SCP Header Glitch (червоний глітч заголовку)
// ===============================

const headerTitle = document.querySelector(".title-main");

setInterval(() => {
    if (Math.random() < 0.06) { // 6% шанс
        headerTitle.style.textShadow = "2px 0 red";
        setTimeout(() => {
            headerTitle.style.textShadow = "none";
        }, 120);
    }
}, 250);

