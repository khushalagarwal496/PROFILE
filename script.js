/* ============================================
   KHUSHAL AGARWAL — Ultra Premium JS Engine
   v3.0 | GSAP + Particles + 3D Tilt + Cursor
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ─── PARTICLE CANVAS ─── */
  const canvas = document.getElementById("particle-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let W, H, particles = [];

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.r = Math.random() * 1.5 + 0.3;
        this.alpha = Math.random() * 0.5 + 0.1;
        this.vx = (Math.random() - 0.5) * 0.25;
        this.vy = (Math.random() - 0.5) * 0.25;
        this.color = Math.random() > 0.6 ? "230,59,111" : "150,150,255";
      }
      update() {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
        ctx.fill();
      }
    }

    // Connection lines between close particles
    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(230,59,111,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    // Init particles
    for (let i = 0; i < 80; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, W, H);
      drawLines();
      particles.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(animate);
    };
    animate();
  }

  /* ─── NAV SCROLL EFFECT ─── */
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
  });

  /* ─── MOBILE MENU ─── */
  const menuBtn  = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close-menu-btn");
  const navLinks = document.getElementById("nav-links");
  const navItems = navLinks ? navLinks.querySelectorAll("a") : [];

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click",  () => navLinks.classList.add("active"));
    closeBtn?.addEventListener("click", () => navLinks.classList.remove("active"));
    navItems.forEach(a => a.addEventListener("click", () => navLinks.classList.remove("active")));
  }

  /* ─── CUSTOM CURSOR ─── */
  const dot  = document.getElementById("cursor-dot");
  const glow = document.getElementById("cursor-glow");

  if (dot && glow && window.innerWidth > 900) {
    let glowX = 0, glowY = 0, mx = 0, my = 0;

    window.addEventListener("mousemove", e => { mx = e.clientX; my = e.clientY; });

    const lerp = (a, b, t) => a + (b - a) * t;

    const tickCursor = () => {
      dot.style.left  = `${mx}px`;
      dot.style.top   = `${my}px`;
      glowX = lerp(glowX, mx, 0.1);
      glowY = lerp(glowY, my, 0.1);
      glow.style.left = `${glowX}px`;
      glow.style.top  = `${glowY}px`;
      requestAnimationFrame(tickCursor);
    };
    tickCursor();

    document.querySelectorAll("a, button, .menu-btn, .do-card, .project-card, .hero-photo-frame, input, textarea").forEach(el => {
      el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
      el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
    });
  }

  /* ─── VANILLA TILT 3D ─── */
  if (typeof VanillaTilt !== "undefined") {
    VanillaTilt.init(
      document.querySelectorAll("[data-tilt]"),
      { max: 8, speed: 500, glare: true, "max-glare": 0.12, gyroscope: true }
    );
  }

  /* ─── SCROLL REVEALS ─── */
  const revealEls = document.querySelectorAll(".reveal, .reveal-left");
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
  }, { threshold: 0.08 });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ─── SKILL BAR ANIMATION ─── */
  const bars = document.querySelectorAll(".skill-bar-fill");
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const w = e.target.dataset.width || 0;
        e.target.style.width = `${w}%`;
        barObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  bars.forEach(b => barObserver.observe(b));

  /* ─── GSAP CINEMATIC ANIMATIONS ─── */
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // 3D Card reveals
    gsap.utils.toArray(".project-card").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 88%", toggleActions: "play none none reverse" },
        y: 70, rotationX: 20, rotationY: (i % 2 === 0 ? -10 : 10),
        opacity: 0, duration: 1, delay: (i % 3) * 0.1, ease: "power3.out"
      });
    });

    // Edu cards
    gsap.utils.toArray(".edu-card, .cert-row").forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: "top 92%", toggleActions: "play none none reverse" },
        x: -40, opacity: 0, duration: 0.8, delay: i * 0.07, ease: "power2.out"
      });
    });

    // Section titles
    gsap.utils.toArray(".section-title").forEach(title => {
      gsap.from(title, {
        scrollTrigger: { trigger: title, start: "top 90%" },
        y: 50, opacity: 0, duration: 1, ease: "power3.out"
      });
    });

    // Hero parallax
    gsap.to(".hero-text", {
      scrollTrigger: { trigger: ".hero", start: "top top", end: "80% top", scrub: 1.5 },
      y: 120, opacity: 0.2
    });

    // Experience items
    gsap.utils.toArray(".exp-item").forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: { trigger: item, start: "top 88%" },
        y: 40, opacity: 0, duration: 0.8, delay: i * 0.12, ease: "power2.out"
      });
    });
  }

  /* ─── COUNTER ANIMATION ─── */
  const statNums = document.querySelectorAll(".stat-num");
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const text = el.textContent;
        if (!isNaN(parseInt(text))) {
          const target = parseInt(text);
          let current = 0;
          const inc = target / 40;
          const interval = setInterval(() => {
            current += inc;
            if (current >= target) { el.textContent = text; clearInterval(interval); }
            else el.textContent = Math.floor(current) + (text.includes("+") ? "+" : "");
          }, 30);
        }
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  statNums.forEach(el => counterObserver.observe(el));

  /* ─── NAV ACTIVE LINK HIGHLIGHT ─── */
  const sections = document.querySelectorAll("section[id]");
  const navAnchors = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navAnchors.forEach(a => {
      a.style.color = a.getAttribute("href") === `#${current}` ? "var(--accent)" : "";
    });
  });

});
