lucide.createIcons();

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target); // se anima solo 1 vez
            }
        });
    }, { threshold: 0.5 }); // 50% visible

    const titles = document.querySelectorAll(".section-title");
    titles.forEach(title => observer.observe(title));
});
