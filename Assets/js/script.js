document.addEventListener("DOMContentLoaded", () => {
  // --- REFERENCIAS DOM ---
  const bootTextElement = document.getElementById('boot-text');
  const bootScreen = document.getElementById('boot-screen');
  const copyBtn = document.getElementById('copy-btn'); // Nuevo ID para el botón

  // --- FECHA FOOTER ---
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = `${year}.${month}.${day}`;

  // --- CÁLCULO DE LVL (EDAD) ---    
  const birthYear = 1982;
  const birthMonth = 4;
  const today = new Date();
  let age = today.getFullYear() - birthYear;
  if (today.getMonth() < (birthMonth - 1)) {
    age--;
  }
  const ageEl = document.getElementById('user-age');
  if (ageEl) ageEl.textContent = age;

  // --- FUNCIONALIDAD BOTÓN COPIAR  ---
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('contact@japozo.dev')
        .then(() => alert('Dirección copiada al portapapeles'))
        .catch(err => console.error('Error al copiar:', err));
    });
  }

  // --- MENÚ MÓVIL ---
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  // Comprobamos si los elementos existen para evitar errores
  if (menuBtn && navLinks) {
    console.log("Sistema de menú móvil inicializado."); // Debug en consola

    menuBtn.addEventListener('click', () => {
      console.log("Click en menú detectado"); // Para ver si funciona
      navLinks.classList.toggle('active');

      // Cambiar texto del botón
      if (navLinks.classList.contains('active')) {
        menuBtn.textContent = '[ X CLOSE ]';
      } else {
        menuBtn.textContent = '[ :: MENU :: ]';
      }
    });

    // Cerrar al hacer click en un enlace
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.textContent = '[ :: MENU :: ]';
      });
    });
  } else {
    console.error("No se encontraron los elementos del menú móvil (mobile-menu-btn o nav-links)");
  }

  // --- TEXTOS ---
  const txt1 = ">_ INITIALIZING USER_PROFILE...";
  const title_start = "Hola, soy ";
  const title_name = '<span class="cyber-glitch" data-text="Pozo">Pozo</span><span class="cursor"></span>';
  const txt2_part1 = ">_ SYSTEM ROLE: Frontend Developer";
  const txt2_part2 = ">_ STATUS: Overwriting defaults. Rendering disruptive web experiences.";

  const bootLines = [
    "[  0.000000] Linux version 6.5.0-generic (root@server) (gcc v12.2.0)",
    "[  0.000000] Command line: BOOT_IMAGE=/boot/vmlinuz root=UUID=portfolio-dev ro quiet splash",
    "[  0.001240] ACPI: DSDT 00000000 (v05 LENOVO 2024)",
    "[  0.052310] console [tty0] enabled",
    "[  0.421005] pci 0000:00:1f.3: [8086:51ca] type 00 class 0x0c0330",
    "[  0.812304] Run /init as init process",
    "[  OK  ] Found device /dev/nvme0n1p2.",
    "[  OK  ] Started File System Check.",
    "[  OK  ] Mounted /boot/efi.",
    "[  OK  ] Mounted /home.",
    "[  OK  ] Reached target Local File Systems.",
    "[  OK  ] Reached target System Initialization.",
    "[  OK  ] Started Daily cleanup of temporary directories.",
    "[  OK  ] Reached target Basic System.",
    "[  3.210020] usb 1-1: new high-speed USB device number 2 using xhci_hcd",
    "[  OK  ] Found device /dev/portfolio_disk.",
    "[  OK  ] Started User Login Management.",
    "[  OK  ] Started Network Manager.",
    "[  OK  ] Reached target Network.",
    "[  OK  ] Started WPA Supplicant.",
    "[  4.002130] snd_hda_intel 0000:00:1f.3: bound 0000:00:02.0",
    "[  OK  ] Started Audio Service (ALSA).",
    "[  OK  ] Started Docker Application Container Engine.",
    "[  OK  ] Started Apache Web Server (Simulation).",
    "[  OK  ] Loading kernel modules for Graphics...",
    "[  OK  ] Reached target Graphical Interface.",
    "[  OK  ] Starting User Session...",
    "[  5.120300] EXT4-fs (sda1): mounted filesystem with ordered data mode.",
    "[  OK  ] Loading CSS Stylesheets...",
    "[  OK  ] Parsing DOM elements...",
    "[  OK  ] Applying Retro Filters...",
    "[  OK  ] Initializing Animation Engine...",
    "[  OK  ] Rendering Main Layout...",
    "[  OK  ] User Access Granted.",
    "[  6.342110] Welcome to PORTFOLIO OS v0.9.1"
  ];

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  // --- FUNCIÓN 1: MÁQUINA DE ESCRIBIR ---
  async function typeLine(elementId, text) {
    const element = document.getElementById(elementId);
    if (!element) return;
    element.classList.add('typing-cursor');

    for (let i = 0; i < text.length; i++) {
      element.textContent += text.charAt(i);
      await sleep(30);
    }

    element.classList.remove('typing-cursor');
  }

  // --- FUNCIÓN 2: SCROLL REVEAL ---
  function initScrollReveal() {
    const selector = 'h2, h3, p, .btn, .card, .tech-item, .network-panel, .sys-stats, .ascii-separator, footer, .social-links a';
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0,
      rootMargin: "0px"
    });

    elements.forEach((el) => {
      if (el.id === 'linea1' || el.id === 'linea2' || el.id === 'main-title') {
        return;
      }
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

  // --- SECUENCIA PRINCIPAL ---
  async function runBootSequence() {
    if (!bootTextElement) return; // Seguridad por si no existe

      for (const line of bootLines) {
      await sleep(Math.random() * 100 + 5);
      const p = document.createElement('div');
      p.innerHTML = line
        .replace(/\[\s*OK\s*\]/g, '<span class="log-ok">[  OK  ]</span>')
        .replace(/\[\s*\d+\.\d+\]/g, (match) => `<span class="log-time">${match}</span>`);
      bootTextElement.appendChild(p);
      window.scrollTo(0, document.body.scrollHeight);
    }

    await sleep(300);
    window.scrollTo(0, 0);

    if (bootScreen) {
      bootScreen.style.transition = "opacity 0.5s ease-out";
      bootScreen.style.opacity = "0";

      setTimeout(async () => {
        bootScreen.remove();
        initScrollReveal();
        await typeLine('linea1', txt1);

        const h1 = document.getElementById('main-title');
        if (h1) {
          h1.classList.add('typing-cursor');
          for (let i = 0; i < title_start.length; i++) {
            h1.textContent += title_start.charAt(i);
            await sleep(50);
          }
          h1.innerHTML += title_name;
          h1.classList.remove('typing-cursor');
        }

        await sleep(1500);

        const p2 = document.getElementById('linea2');
        if (p2) {
          p2.classList.add('typing-cursor');
          for (let i = 0; i < txt2_part1.length; i++) {
            p2.innerHTML += txt2_part1.charAt(i);
            await sleep(30);
          }
          p2.innerHTML += "<br>";
          await sleep(200);

          for (let i = 0; i < txt2_part2.length; i++) {
            p2.innerHTML += txt2_part2.charAt(i);
            await sleep(30);
          }
          p2.classList.remove('typing-cursor');
        }

      }, 1000);
    }
  }

  runBootSequence();
});