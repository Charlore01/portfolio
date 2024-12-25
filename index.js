document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const modal = document.getElementById("project-modal");
    const closeModal = document.querySelector(".close-modal");


   // Project details
const projects = {
    1: {
        title: "Campaign Management System",
        description: "A robust web application for managing and showcasing campaigns. It features an intuitive interface for creating, tracking, and analyzing campaign performance in real-time. The fully responsive design ensures seamless usability across devices.",
        liveLink: "https://campaign-project-nine.vercel.app",
    },
    2: {
        title: "Crowdfunding Product Page",
        description: "A pixel-perfect, responsive crowdfunding product page for the 'Mastercraft Bamboo Monitor Riser.' Users can explore pledge tiers, track funding progress, and view campaign stats through a clean, modern layout.",
        liveLink: "https://crowdfunding-nu-rose.vercel.app/",
    },
    3: {
        title: "E-commerce Product Page",
        description: "An elegant e-commerce product page designed for 'Fall Limited Edition Sneakers,' featuring a dynamic image gallery, interactive cart functionality, and a sleek, responsive layout.",
        liveLink: "https://e-commerce-main-gamma.vercel.app",
    },
};


    // Toggle navigation menu
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Modal functionality
    document.querySelectorAll('.details-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const projectId = event.target.closest('.project').getAttribute('data-project');
            const projectDetails = projects[projectId];
            
            if (projectDetails) {
                document.getElementById('modal-title').textContent = projectDetails.title;
                document.getElementById('modal-description').textContent = projectDetails.description;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
            }
        });
    });

    // Close modal functionality
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Form submission handling
    const contactForm = document.querySelector(".contact-form");
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name && email && message) {
            alert("Thank you for your message! I will get back to you soon.");
            contactForm.reset();
        } else {
            alert("Please fill in all fields before submitting.");
        }
    });
});