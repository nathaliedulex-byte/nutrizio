(function () {
  const root = document.documentElement;
  const toggle = document.querySelector('[data-theme-toggle]');
  const header = document.querySelector('[data-header]');
  const form = document.querySelector('[data-signup-form]');
  const message = document.querySelector('[data-form-message]');

  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  function renderTheme() {
    root.setAttribute('data-theme', theme);
    if (!toggle) return;
    toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    toggle.innerHTML =
      theme === 'dark'
        ? '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
        : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>';
  }

  renderTheme();

  toggle?.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    renderTheme();
  });

  function updateHeader() {
    header?.classList.toggle('is-scrolled', window.scrollY > 12);
  }

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = new FormData(form).get('email');
    message.textContent = email
      ? `Thanks. ${email} is on the Nutrizio preview waitlist.`
      : 'Add an email address to join the Nutrizio preview waitlist.';
    form.reset();
  });
})();
