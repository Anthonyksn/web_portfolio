lucide.createIcons();

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 }); // 40% visible

    const cards = document.querySelectorAll(".project-card");
    cards.forEach(card => observer.observe(card));

    const titles = document.querySelectorAll(".section-title");
    titles.forEach(title => observer.observe(title));
});
