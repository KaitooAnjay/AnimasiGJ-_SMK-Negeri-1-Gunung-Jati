document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li a");
    const cards = document.querySelectorAll(".card");
    const filterButtons = document.querySelectorAll(".filter-button");
    const galleryItems = Array.from(document.querySelectorAll(".gallery-item"));
    const lightbox = document.querySelector(".lightbox");
    const lightboxImage = document.querySelector(".lightbox-content img");
    const lightboxTitle = document.querySelector(".lightbox-content strong");
    const lightboxCaption = document.querySelector(".lightbox-content span");
    let activeGalleryItems = galleryItems;
    let activeGalleryIndex = 0;

    // Toggle menu hamburger untuk tampilan mobile
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    // Menutup menu mobile saat tautan diklik
    links.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });

    const toggleCard = card => {
        const isExpanded = card.getAttribute("aria-expanded") === "true";

        cards.forEach(item => item.setAttribute("aria-expanded", "false"));
        card.setAttribute("aria-expanded", String(!isExpanded));
    };

    cards.forEach(card => {
        card.addEventListener("click", () => toggleCard(card));
        card.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleCard(card);
            }
        });
    });

    const updateLightbox = index => {
        const item = activeGalleryItems[index];
        if (!item) return;

        activeGalleryIndex = index;
        lightboxImage.src = item.dataset.image;
        lightboxImage.alt = item.querySelector("img").alt;
        lightboxTitle.textContent = item.dataset.title;
        lightboxCaption.textContent = item.dataset.caption;
    };

    const closeLightbox = () => {
        lightbox.classList.remove("is-open");
        lightbox.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    };

    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            activeGalleryItems = galleryItems.filter(galleryItem => !galleryItem.hidden);
            updateLightbox(activeGalleryItems.indexOf(item));
            lightbox.classList.add("is-open");
            lightbox.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";
        });
    });

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter;

            filterButtons.forEach(filterButton => filterButton.classList.remove("is-active"));
            button.classList.add("is-active");
            galleryItems.forEach(item => {
                item.hidden = filter !== "all" && item.dataset.category !== filter;
            });
        });
    });

    document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
    document.querySelector(".lightbox").addEventListener("click", event => {
        if (event.target === lightbox) closeLightbox();
    });
    document.querySelector(".lightbox-prev").addEventListener("click", () => {
        updateLightbox((activeGalleryIndex - 1 + activeGalleryItems.length) % activeGalleryItems.length);
    });
    document.querySelector(".lightbox-next").addEventListener("click", () => {
        updateLightbox((activeGalleryIndex + 1) % activeGalleryItems.length);
    });
    document.addEventListener("keydown", event => {
        if (!lightbox.classList.contains("is-open")) return;
        if (event.key === "Escape") closeLightbox();
        if (event.key === "ArrowLeft") updateLightbox((activeGalleryIndex - 1 + activeGalleryItems.length) % activeGalleryItems.length);
        if (event.key === "ArrowRight") updateLightbox((activeGalleryIndex + 1) % activeGalleryItems.length);
    });
});