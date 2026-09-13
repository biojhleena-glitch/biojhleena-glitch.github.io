(() => {
  const root = document.documentElement;
  const appearance = document.querySelector('.appearance-toggle');
  const updateThemeLabel = () => {
    const dark = root.dataset.theme === 'dark';
    appearance?.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} appearance`);
    appearance?.setAttribute('aria-pressed', String(dark));
  };
  updateThemeLabel();
  appearance?.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = theme;
    try { localStorage.setItem('jl-theme', theme); } catch (_) {}
    updateThemeLabel();
  });
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-links');
  menu?.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    nav?.classList.toggle('is-open', open);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
      menu.setAttribute('aria-expanded', 'false');
      nav?.classList.remove('is-open');
      menu.focus();
    }
  });
  const search = document.querySelector('#publication-search');
  if (!search) return;
  document.querySelector('.publication-tools').hidden = false;
  const items = [...document.querySelectorAll('[data-publication]')];
  const buttons = [...document.querySelectorAll('[data-filter]')];
  let activeFilter = 'all';
  const update = () => {
    const query = search.value.trim().toLocaleLowerCase();
    let count = 0;
    items.forEach(item => {
      const visible = (activeFilter === 'all' || item.dataset.kind === activeFilter) && item.textContent.toLocaleLowerCase().includes(query);
      item.hidden = !visible;
      if (visible) count++;
    });
    document.querySelector('#publication-count').textContent = `Showing ${count} publication${count === 1 ? '' : 's'}`;
    document.querySelector('#no-publications').hidden = count !== 0;
  };
  search.addEventListener('input', update);
  buttons.forEach(button => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    buttons.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    update();
  }));
})();
