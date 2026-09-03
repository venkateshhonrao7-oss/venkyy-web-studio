// ==================== MOBILE MENU ====================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}



// ==================== CONTACT FORM ====================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const inputs = contactForm.querySelectorAll("input");
        const textarea = contactForm.querySelector("textarea");

        const name = inputs[0].value;
        const contact = inputs[1].value;
        const message = textarea.value;

        // Your WhatsApp number
        const whatsappNumber = "918087407886";

        const whatsappMessage = `Hello Venkyy bhaii!!!

Name: ${name}

Email / WhatsApp: ${contact}

Website Requirement:
${message}`;

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.location.href = whatsappURL;
    });
}
