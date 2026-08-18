(function () {
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  function prefixPath(path) {
    const isRelato = location.pathname.includes('/relatos/');
    if (!isRelato) return path;
    if (path.startsWith('index.html')) return `../${path}`;
    if (path.startsWith('assets/')) return `../${path}`;
    return path;
  }

  function renderNavigation() {
    const nav = $('#site-nav');
    if (!nav) return;
    nav.innerHTML = SITE_CONTENT.navigation.map(([label, href]) => `<a href="${prefixPath(href)}">${label}</a>`).join('');
  }

  function renderRelatoCards() {
    const grid = $('#relatos-grid');
    if (!grid) return;
    grid.innerHTML = SITE_CONTENT.relatos.map((relato, index) => `
      <article class="card relato-card reveal" style="--delay:${index * 70}ms">
        <span class="eyebrow">Relato ${String(index + 1).padStart(2, '0')}</span>
        <h3>${relato.title}</h3>
        <p>${relato.pregunta}</p>
        <p><strong>Tema:</strong> ${relato.tema}</p>
        <a class="text-link" href="relatos/${relato.slug}.html">Abrir ficha docente</a>
      </article>
    `).join('');
  }

  function renderLists() {
    $$('[data-content-list]').forEach((node) => {
      const key = node.dataset.contentList;
      const items = SITE_CONTENT.sections[key] || [];
      node.innerHTML = items.map((item) => `<li>${item}</li>`).join('');
    });
  }


  function renderAudience() {
    const courses = $('#courses-list');
    const subjects = $('#subjects-list');
    const skills = $('#skills-list');
    if (courses) courses.innerHTML = SITE_CONTENT.destinatarios.cursos.map((item) => `<li>${item}</li>`).join('');
    if (subjects) subjects.innerHTML = SITE_CONTENT.destinatarios.materias.map((item) => `<li>${item}</li>`).join('');
    if (skills) skills.innerHTML = SITE_CONTENT.destinatarios.competencias.map((item) => `<li>${item}</li>`).join('');
  }

  function renderRelatoPage() {
    const page = $('[data-relato-slug]');
    if (!page) return;
    const slug = page.dataset.relatoSlug;
    const relato = SITE_CONTENT.relatos.find((item) => item.slug === slug);
    if (!relato) return;
    document.title = `${relato.title} · ${SITE_CONTENT.book.title}`;
    $('#relato-title').textContent = relato.title;
    $('#relato-question').textContent = relato.pregunta;
    $('#relato-theme').textContent = relato.tema;
    $('#relato-idea').textContent = relato.idea;
    $('#relato-antes').textContent = relato.antes;
    $('#relato-durante').textContent = relato.durante;
    $('#relato-objetivos').innerHTML = relato.objetivos.map((item) => `<li>${item}</li>`).join('');
    $('#relato-debate').innerHTML = relato.debate.map((item) => `<li>${item}</li>`).join('');
    $('#relato-actividad').textContent = relato.actividad;
    $('#relato-recursos').innerHTML = relato.recursosIA.map((item) => `<li>${item}</li>`).join('');
  }

  function setupMenu() {
    const button = $('.menu-toggle');
    const nav = $('#site-nav');
    if (!button || !nav) return;
    button.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(open));
    });
  }

  function setupContact() {
    const form = $('#pilot-form');
    if (!form) return;
    form.addEventListener('submit', (event) => {
      if (!SITE_CONTENT.contact.formAction) {
        event.preventDefault();
        $('#form-status').textContent = 'Formulario preparado. Añade un endpoint en js/content.js para activarlo.';
      }
    });
  }

  function revealOnScroll() {
    const items = $$('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.15 });
    items.forEach((item) => observer.observe(item));
  }

  renderNavigation();
  renderRelatoCards();
  renderLists();
  renderAudience();
  renderRelatoPage();
  setupMenu();
  setupContact();
  revealOnScroll();
}());
