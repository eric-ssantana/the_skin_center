/**
 * TSC - The Skin Center | Master Interactive Controller
 * Handles Language Switching (EN, PT, ES), Services Catalog, Modals,
 * Before/After Slider, Accordions, and Form Submissions.
 */

// Current Language State (Default: English as requested)
let currentLang = localStorage.getItem('tsc_lang') || 'en';
let activeCategory = 'all';

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initStickyHeader();
  initMobileDrawer();
  initTechnologies();
  initServicesShowcase();
  initBeforeAfterSliders();
  initFaqAccordion();
  initModals();
  initBookingForm();
});

/* ================= 1. LANGUAGE CONTROLLER ================= */
function initLanguage() {
  setLanguage(currentLang);

  // Bind desktop & mobile language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selected = e.target.getAttribute('data-lang');
      if (selected) {
        setLanguage(selected);
      }
    });
  });
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('tsc_lang', lang);

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update active state on language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update all standard translation keys
  const langObj = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (langObj[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = langObj[key];
      } else {
        el.innerHTML = langObj[key];
      }
    }
  });

  // Re-render services & tabs in active language
  renderCategoryTabs();
  renderServices();
  renderTechnologies();

  // Update Kollektiva testimonials slider with active language
  if (typeof window.updateKollektivaLanguage === 'function') {
    window.updateKollektivaLanguage(lang);
  }
}

/* ================= 2. STICKY HEADER & ACTIVE NAV ================= */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ================= 3. MOBILE MENU DRAWER ================= */
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.mobile-overlay');

  if (!toggleBtn || !drawer || !overlay) return;

  function toggleMenu() {
    toggleBtn.classList.toggle('open');
    drawer.classList.toggle('open');
    overlay.classList.toggle('active');
  }

  function closeMenu() {
    toggleBtn.classList.remove('open');
    drawer.classList.remove('open');
    overlay.classList.remove('active');
  }

  toggleBtn.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMenu);

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ================= 4. SERVICES SHOWCASE & FILTERING ================= */
const categoryKeys = [
  { id: 'all', key: 'serviceCategoryAll' },
  { id: 'rostro', key: 'serviceCategoryRostro' },
  { id: 'cuerpo', key: 'serviceCategoryCuerpo' },
  { id: 'depilacion', key: 'serviceCategoryDepilacion' },
  { id: 'cabello', key: 'serviceCategoryCabello' },
  { id: 'bienestar', key: 'serviceCategoryBienestar' },
  { id: 'medicina', key: 'serviceCategoryMedicina' },
  { id: 'micropigmentacion', key: 'serviceCategoryMicropigmentacion' },
  { id: 'remociones', key: 'serviceCategoryRemociones' }
];

function initServicesShowcase() {
  renderCategoryTabs();
  renderServices();
}

function renderCategoryTabs() {
  const tabsContainer = document.getElementById('services-tabs-container');
  if (!tabsContainer) return;

  tabsContainer.innerHTML = '';
  categoryKeys.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `services-tab-btn ${cat.id === activeCategory ? 'active' : ''}`;
    btn.setAttribute('data-category', cat.id);
    btn.textContent = translations[currentLang][cat.key] || cat.id;

    btn.addEventListener('click', () => {
      activeCategory = cat.id;
      document.querySelectorAll('.services-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderServices();
    });

    tabsContainer.appendChild(btn);
  });
}

function renderServices() {
  const grid = document.getElementById('services-grid-container');
  if (!grid) return;

  grid.innerHTML = '';
  const filtered = activeCategory === 'all'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

  filtered.forEach(service => {
    const card = document.createElement('article');
    card.className = 'service-card';

    const title = service.title[currentLang] || service.title.en;
    const desc = service.shortDesc[currentLang] || service.shortDesc.en;
    const catLabel = service.categoryLabel[currentLang] || service.categoryLabel.en;
    const downtime = service.downtime[currentLang] || service.downtime.en;

    card.innerHTML = `
      <div class="service-card-media">
        <img src="${service.image}" alt="${title}" loading="lazy" />
        <span class="service-category-tag">${catLabel}</span>
      </div>
      <div class="service-card-body">
        <h3 class="service-card-title">${title}</h3>
        <p class="service-card-desc">${desc}</p>
        <div class="service-card-meta">
          <div class="service-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>${service.duration}</span>
          </div>
          <div class="service-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <span>${downtime}</span>
          </div>
        </div>
        <div class="service-card-actions">
          <button class="btn-card-details" onclick="openServiceDetailModal('${service.id}')">
            ${translations[currentLang].viewDetails}
          </button>
          <button class="btn-card-book" onclick="openBookingWithService('${title}')">
            ${translations[currentLang].bookThisService}
          </button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

/* ================= 5. SERVICE DETAIL MODAL ================= */
function openServiceDetailModal(serviceId) {
  const service = servicesData.find(s => s.id === serviceId);
  if (!service) return;

  const modal = document.getElementById('service-detail-modal');
  const title = service.title[currentLang] || service.title.en;
  const fullDesc = service.fullDesc[currentLang] || service.fullDesc.en;
  const downtime = service.downtime[currentLang] || service.downtime.en;
  const sessions = service.sessions[currentLang] || service.sessions.en;
  const idealFor = service.idealFor[currentLang] || service.idealFor.en;

  document.getElementById('modal-service-img').src = service.image;
  document.getElementById('modal-service-title').textContent = title;
  document.getElementById('modal-service-category').textContent = service.categoryLabel[currentLang] || service.categoryLabel.en;
  document.getElementById('modal-service-desc').textContent = fullDesc;
  document.getElementById('modal-service-duration').textContent = service.duration;
  document.getElementById('modal-service-downtime').textContent = downtime;
  document.getElementById('modal-service-sessions').textContent = sessions;
  document.getElementById('modal-service-ideal').textContent = idealFor;

  const bookBtn = document.getElementById('modal-service-book-btn');
  bookBtn.textContent = translations[currentLang].bookThisService;
  bookBtn.onclick = () => {
    closeModal('service-detail-modal');
    openBookingWithService(title);
  };

  openModal('service-detail-modal');
}

/* ================= 6. BEFORE & AFTER COMPARISON SLIDER ================= */
function initBeforeAfterSliders() {
  document.querySelectorAll('.ba-comparison-wrap').forEach(wrapper => {
    const slider = wrapper.querySelector('.ba-slider-input');
    const afterLayer = wrapper.querySelector('.ba-after-layer');
    const handle = wrapper.querySelector('.ba-slider-handle');

    if (!slider || !afterLayer || !handle) return;

    function updateSlider(val) {
      afterLayer.style.width = `${val}%`;
      handle.style.left = `${val}%`;
    }

    slider.addEventListener('input', (e) => {
      updateSlider(e.target.value);
    });

    // Touch and drag support
    updateSlider(50);
  });
}

/* ================= 7. FAQ ACCORDION ================= */
function initFaqAccordion() {
  document.querySelectorAll('.faq-question-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isActive = item.classList.contains('active');

      // Close all other items
      document.querySelectorAll('.faq-item').forEach(other => {
        other.classList.remove('active');
        const otherAnswer = other.querySelector('.faq-answer');
        if (otherAnswer) otherAnswer.style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

/* ================= 8. MODAL ENGINE ================= */
function initModals() {
  // Modal triggers
  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = btn.getAttribute('data-open-modal');
      openModal(modalId);
    });
  });

  // Modal close buttons
  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) modal.classList.remove('active');
    });
  });

  // Close on outside click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active'));
    }
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}

function openBookingWithService(serviceName) {
  const select = document.getElementById('booking-service-select');
  if (select && serviceName) {
    // If option exists, select it, otherwise set value
    let found = false;
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].text.toLowerCase().includes(serviceName.toLowerCase())) {
        select.selectedIndex = i;
        found = true;
        break;
      }
    }
    if (!found) {
      const opt = new Option(serviceName, serviceName, true, true);
      select.add(opt);
    }
  }
  openModal('booking-modal');
}

/* ================= 9. BOOKING FORM & WHATSAPP CONCIERGE ================= */
function initBookingForm() {
  const form = document.getElementById('tsc-booking-form');
  if (!form) return;

  // Populate treatment select dropdown options from servicesData
  populateBookingSelect();

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name').value;
    const phone = document.getElementById('form-phone').value;
    const service = document.getElementById('booking-service-select').value;
    const date = document.getElementById('form-date').value;
    const notes = document.getElementById('form-notes').value;

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = translations[currentLang].formSubmitting;
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      closeModal('booking-modal');
      form.reset();

      // Show toast
      showToast(translations[currentLang].formSuccessTitle);

      // Construct WhatsApp concierge message
      const greeting = currentLang === 'pt' ? 'Olá! Gostaria de confirmar meu agendamento na TSC (The Skin Center).' :
                       currentLang === 'es' ? '¡Hola! Quisiera confirmar mi cita en TSC (The Skin Center).' :
                       'Hello! I would like to confirm my consultation at TSC (The Skin Center).';

      const details = `\n👤 ${name}\n📱 ${phone}\n✨ ${service}\n📅 ${date || 'Soon'}\n📝 ${notes || '-'}`;
      const waUrl = `https://wa.me/13055558720?text=${encodeURIComponent(greeting + details)}`;
      
      // Prompt user to open WhatsApp if they wish
      setTimeout(() => {
        if (confirm(currentLang === 'pt' ? 'Deseja abrir o WhatsApp agora para falar com o Concierge?' :
                    currentLang === 'es' ? '¿Desea abrir WhatsApp ahora para comunicarse con la Conserjería?' :
                    'Would you like to open WhatsApp now to connect with our Concierge?')) {
          window.open(waUrl, '_blank');
        }
      }, 700);

    }, 800);
  });
}

function populateBookingSelect() {
  const select = document.getElementById('booking-service-select');
  if (!select) return;

  select.innerHTML = '<option value="">-- Select Treatment / Selecione o Procedimento --</option>';
  servicesData.forEach(s => {
    const title = s.title[currentLang] || s.title.en;
    const opt = document.createElement('option');
    opt.value = title;
    opt.textContent = title;
    select.appendChild(opt);
  });
}

function showToast(message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

/* ================= 10. ADVANCED TECHNOLOGIES CAROUSEL & MODAL ================= */
function initTechnologies() {
  renderTechnologies();
  setupTechCarousel();
  setupTechModal();
}

function renderTechnologies() {
  const container = document.getElementById('tech-cards-container');
  if (!container || typeof technologiesData === 'undefined') return;

  container.innerHTML = '';
  technologiesData.forEach(tech => {
    const card = document.createElement('article');
    card.className = 'tech-card';
    card.setAttribute('data-tech-id', tech.id);

    const cat = tech.category[currentLang] || tech.category.en;
    const desc = tech.shortDesc[currentLang] || tech.shortDesc.en;
    const btnText = (translations[currentLang] && translations[currentLang].techExploreBtn) || 'EXPLORE TECHNOLOGY';

    card.innerHTML = `
      <img src="${tech.image}" alt="${tech.name}" class="tech-card-bg" loading="lazy" />
      <div class="tech-card-overlay"></div>
      <div class="tech-card-content">
        <span class="tech-card-category">${cat}</span>
        <h3 class="tech-card-title">${tech.name}</h3>
        <p class="tech-card-desc">${desc}</p>
        <span class="tech-card-action">
          ${btnText} &rarr;
        </span>
      </div>
    `;

    card.addEventListener('click', () => {
      openTechModal(tech.id);
    });

    container.appendChild(card);
  });
}

function setupTechCarousel() {
  const track = document.getElementById('tech-cards-container');
  const prevBtn = document.getElementById('tech-prev-btn');
  const nextBtn = document.getElementById('tech-next-btn');
  const discoverBtn = document.getElementById('tech-discover-btn');

  if (!track || !prevBtn || !nextBtn) return;

  const scrollAmount = 360;

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  if (discoverBtn) {
    discoverBtn.addEventListener('click', () => {
      if (technologiesData && technologiesData.length > 0) {
        openTechModal(technologiesData[0].id);
      }
    });
  }
}

function setupTechModal() {
  const modal = document.getElementById('tech-detail-modal');
  if (modal) {
    const closeBtn = modal.querySelector('.modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        closeModal('tech-detail-modal');
      });
    }
  }

  const bookBtn = document.getElementById('modal-tech-book-btn');
  if (bookBtn) {
    bookBtn.addEventListener('click', () => {
      closeModal('tech-detail-modal');
      openModal('booking-modal');
    });
  }
}

function openTechModal(techId) {
  if (typeof technologiesData === 'undefined') return;
  const tech = technologiesData.find(t => t.id === techId);
  if (!tech) return;

  const cat = tech.category[currentLang] || tech.category.en;
  const fullDesc = tech.fullDesc[currentLang] || tech.fullDesc.en;
  const indications = tech.indications[currentLang] || tech.indications.en;

  const imgEl = document.getElementById('modal-tech-img');
  if (imgEl) imgEl.src = tech.image;
  const catEl = document.getElementById('modal-tech-cat');
  if (catEl) catEl.textContent = cat;
  const mfgEl = document.getElementById('modal-tech-manufacturer');
  if (mfgEl) mfgEl.textContent = tech.manufacturer;
  const nameEl = document.getElementById('modal-tech-name');
  if (nameEl) nameEl.textContent = tech.name;
  const descEl = document.getElementById('modal-tech-desc');
  if (descEl) descEl.textContent = fullDesc;
  const waveEl = document.getElementById('modal-tech-wavelengths');
  if (waveEl) waveEl.textContent = tech.wavelengths;
  const depthEl = document.getElementById('modal-tech-depth');
  if (depthEl) depthEl.textContent = tech.depth;
  const indEl = document.getElementById('modal-tech-indications');
  if (indEl) indEl.textContent = indications;
  const treatEl = document.getElementById('modal-tech-treatments');
  if (treatEl) treatEl.textContent = tech.treatments;

  openModal('tech-detail-modal');
}

