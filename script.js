// ===================================
// EmailJS Configuration
// ===================================
// SETUP INSTRUCTIONS:
// 1. Daftar gratis di https://www.emailjs.com
// 2. Buat "Email Service" → pilih Gmail → connect akun matthew.rj1703@gmail.com
// 3. Buat "Email Template" dengan variabel: {{from_name}}, {{from_email}}, {{message}}
// 4. Ganti 3 nilai di bawah ini dengan milik kamu:
const EMAILJS_CONFIG = {
  publicKey: "g2ObLVC7kSL1lJNMO", // Dashboard → Account → Public Key
  serviceId: "service_m0s7bam", // Email Services → Service ID
  templateId: "template_f4accx1", // Email Templates → Template ID
};

// ===================================
// Wait for DOM to be fully loaded
// ===================================
document.addEventListener("DOMContentLoaded", function () {
  initEmailJS();
  initDarkMode();
  initHamburgerMenu();
  initSmoothScroll();
  initContactForm();
  initScrollAnimations();
  console.log("Portfolio initialized successfully!");
});

// ===================================
// Initialize EmailJS
// ===================================
function initEmailJS() {
  if (typeof emailjs !== "undefined") {
    emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
    console.log("EmailJS ready");
  } else {
    console.warn("EmailJS SDK not loaded");
  }
}

// ===================================
// Dark Mode Toggle
// ===================================
function initDarkMode() {
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  // Apply saved preference on load
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") body.classList.add("dark-mode");
  } catch (e) {
    // localStorage unavailable (e.g. preview env) — default to light
  }

  themeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");

    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (e) {}

    themeToggle.style.transition = "transform 0.4s ease";
    themeToggle.style.transform = "rotate(360deg)";
    setTimeout(() => {
      themeToggle.style.transform = "";
    }, 400);
  });
}

// ===================================
// Hamburger Menu (Mobile)
// ===================================
function initHamburgerMenu() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  function closeMenu() {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", function () {
    const isOpen = navLinks.classList.contains("active");
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", String(!isOpen));
    document.body.style.overflow = isOpen ? "" : "hidden";
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", function (e) {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target))
      closeMenu();
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 968) closeMenu();
  });
}

// ===================================
// Smooth Scrolling
// ===================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const headerH = document.querySelector(".header")?.offsetHeight || 0;
      window.scrollTo({ top: target.offsetTop - headerH, behavior: "smooth" });
      history.pushState(null, null, href);
    });
  });

  if (window.location.hash) {
    setTimeout(() => {
      const target = document.querySelector(window.location.hash);
      if (target) {
        const headerH = document.querySelector(".header")?.offsetHeight || 0;
        window.scrollTo({
          top: target.offsetTop - headerH,
          behavior: "smooth",
        });
      }
    }, 100);
  }
}

// ===================================
// Contact Form with EmailJS
// ===================================
function initContactForm() {
  const form = document.getElementById("contactForm");
  const msgEl = document.getElementById("formMessage");
  const submitBtn = form.querySelector('button[type="submit"]');

  function showMessage(text, type) {
    msgEl.textContent = text;
    msgEl.className = "form-message " + type;
    msgEl.style.display = "block";
    if (type === "success") setTimeout(hideMessage, 6000);
  }

  function hideMessage() {
    msgEl.style.display = "none";
    msgEl.className = "form-message";
  }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    hideMessage();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation
    if (name.length < 2)
      return showMessage("Nama minimal 2 karakter.", "error");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return showMessage("Email tidak valid.", "error");
    if (message.length < 10)
      return showMessage("Pesan minimal 10 karakter.", "error");

    // Check if EmailJS is configured
    if (
      EMAILJS_CONFIG.publicKey === "YOUR_PUBLIC_KEY" ||
      EMAILJS_CONFIG.serviceId === "YOUR_SERVICE_ID" ||
      EMAILJS_CONFIG.templateId === "YOUR_TEMPLATE_ID"
    ) {
      showMessage(
        "EmailJS belum dikonfigurasi. Lihat komentar di script.js untuk cara setup.",
        "error",
      );
      return;
    }

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
      await emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, {
        from_name: name,
        from_email: email,
        message: message,
      });
      showMessage("Pesan terkirim! Saya akan segera membalas.", "success");
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      showMessage(
        "Gagal mengirim pesan. Coba hubungi via email langsung.",
        "error",
      );
    } finally {
      submitBtn.textContent = "Send Message";
      submitBtn.disabled = false;
    }
  });
}

// ===================================
// Scroll Animations
// ===================================
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );

  // Project cards: staggered fade-in with pop on scroll
  document.querySelectorAll(".project-card").forEach((el, i) => {
    el.classList.add("animate-on-scroll");
    el.style.transitionDelay = i * 0.1 + "s";
    observer.observe(el);
  });

  // Other sections: simple fade-in
  document
    .querySelectorAll(".about-content, .contact-content")
    .forEach((el) => {
      el.classList.add("animate-on-scroll");
      observer.observe(el);
    });
}

// ===================================
// Active Nav Highlight on Scroll
// ===================================
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const scrollPos = window.pageYOffset + 150;
  let current = "";

  sections.forEach((sec) => {
    if (
      scrollPos >= sec.offsetTop &&
      scrollPos < sec.offsetTop + sec.clientHeight
    ) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + current,
    );
  });
});

// ===================================
// Header Shadow on Scroll
// ===================================
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  header.style.boxShadow =
    window.pageYOffset > 50 ? "var(--shadow-md)" : "none";
});

if ("scrollRestoration" in history) history.scrollRestoration = "manual";

window.addEventListener("load", () => {
  console.log("Page loaded in " + Math.round(performance.now()) + "ms");
});
