"use strict"

document.addEventListener("DOMContentLoaded", function () {
    const fadeEls = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            }
        });
    });
    fadeEls.forEach((el) => observer.observe(el));
});

