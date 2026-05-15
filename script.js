gsap.registerPlugin(ScrollTrigger);

/* =========================
   HERO
========================= */

gsap.from(".name-effect", {
    y: 120,
    opacity: 0,
    duration: 1.4,
    ease: "power4.out"
});

gsap.from(".sub-text", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.4
});

/* =========================
   ABOUT
========================= */

gsap.from(".about-left", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    },

    x: -100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
});

/* STAT BOXES */

gsap.from(".stat-box", {
    scrollTrigger: {
        trigger: ".stat-grid",
        start: "top 85%",
        toggleActions: "play reverse play reverse"
    },

    y: 60,
    opacity: 0,
    stagger: 0.15,
    duration: 1,
    ease: "power3.out",

    clearProps: "all"
});

/* =========================
   SKILLS
========================= */

gsap.from(".skill-card", {
    scrollTrigger: {
        trigger: ".skills-container",
        start: "top 85%",
        toggleActions: "play reverse play reverse"
    },

    y: 60,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out",

    clearProps: "all"
});

/* =========================
   CONTACT
========================= */

gsap.from(".contact h2", {
    scrollTrigger: {
        trigger: ".contact",
        start: "top 85%",
        toggleActions: "play reverse play reverse"
    },

    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
});

gsap.from(".email", {
    scrollTrigger: {
        trigger: ".contact",
        start: "top 85%",
        toggleActions: "play reverse play reverse"
    },

    opacity: 0,
    y: 20,
    delay: 0.2,
    duration: 1
});

/* =========================
   RANDOM LETTER EFFECT
========================= */

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelectorAll(".name-effect span").forEach((span) => {

    const originalText = span.dataset.value;

    let isAnimating = false;

    span.addEventListener("mouseenter", () => {

        if (isAnimating) return;

        isAnimating = true;

        let iteration = 0;

        const interval = setInterval(() => {

            span.innerText = originalText
                .split("")
                .map((letter, index) => {

                    if (index < iteration) {
                        return originalText[index];
                    }

                    return letters[Math.floor(Math.random() * 26)];

                })
                .join("");

            if (iteration >= originalText.length) {

                clearInterval(interval);

                span.innerText = originalText;

                isAnimating = false;
            }

            iteration += 1 / 3;

        }, 40);

    });

});

/* =========================
   REFRESH FIX
========================= */

window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});

/* =========================
   EXTRA PREMIUM ANIMATIONS
========================= */

/* NAVBAR */

gsap.from("nav", {
    y: -80,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
});


/* SKILLS TITLE */

gsap.from(".skills-top", {
    scrollTrigger: {
        trigger: ".skills-top",
        start: "top 85%",
        toggleActions: "play reverse play reverse"
    },

    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
});


/* SOCIAL LINKS */

gsap.from(".social-links a", {

    scrollTrigger: {
        trigger: ".social-links",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    },

    opacity: 0,
    y: 50,
    scale: 0.5,

    duration: 0.4,

    stagger: {
        each: 0.05
    },

    ease: "power3.out",

    clearProps: "all"

});


/* FLOATING CROWNS */

gsap.to(".crown", {

    y: "random(-25, 25)",
    x: "random(-15, 15)",
    rotation: "random(-8, 8)",

    duration: "random(4, 7)",

    repeat: -1,
    yoyo: true,

    ease: "sine.inOut",

    stagger: {
        each: 0.2,
        from: "random"
    }

});


/* PARALLAX EFFECT */

gsap.to(".crown-bg", {

    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
    },

    y: 100

});


/* HOVER ANIMATION */

document.querySelectorAll(".skill-card").forEach((card) => {

    card.addEventListener("mouseenter", () => {

        gsap.to(card, {
            y: -10,
            scale: 1.03,
            duration: 0.3,
            ease: "power2.out"
        });

    });

    card.addEventListener("mouseleave", () => {

        gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });

    });

});



/* =========================
   PROJECTS
========================= */

/* =========================
   PROJECTS ANIMATION
========================= */

gsap.from(".projects-top", {

    scrollTrigger: {
        trigger: ".projects-top",
        start: "top 85%",
        toggleActions: "restart reverse restart reverse"
    },

    y: 50,
    opacity: 0,

    duration: 1.2,

    ease: "power3.out",

    clearProps: "all"

});


/* PROJECT CARDS */

gsap.utils.toArray(".project-card").forEach((card, index) => {

    gsap.from(card, {

        scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "restart reverse restart reverse"
        },

        y: 80,
        opacity: 0,

        duration: 1,

        delay: index * 0.1,

        ease: "power3.out",

        clearProps: "all"

    });

});