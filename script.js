// ==================== MOBILE MENU ====================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


// ==================== CONTACT FORM ====================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const contact = contactForm.querySelector('input[type="email"], input[type="tel"]').value;
        const message = contactForm.querySelector("textarea").value;

        // Your WhatsApp number
        const whatsappNumber = "919697101516";

        // WhatsApp message
        const whatsappMessage =
`Hello Venkyy Web Studio 👋

Name: ${name}

Email / WhatsApp: ${contact}

Website Requirement:
${message}`;

        // Open WhatsApp
        const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

window.location.href = whatsappURL;

        // Reset form
        contactForm.reset();
    });
}
