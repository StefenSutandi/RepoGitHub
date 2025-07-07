// === SPA Logic, dark/light mode, horizontal slide ===
const views = [
  "home", "experience", "skills", "projects", "awards",
  "project-pid-maglev", "project-hybrid-power", "project-composting", "project-mips32", "project-boost", "project-oscillator", "project-ppg", "project-gtk4-clinic", "project-bjt-amplifier", "project-fpga-calc"
];
function showView(view) {
  views.forEach(v => {
    const el = document.getElementById('view-' + v);
    if (!el) return;
    el.classList.remove('active', 'prev');
    el.hidden = true;
  });
  const idx = views.indexOf(view);
  const prevIdx = idx > 0 ? idx - 1 : null;
  if (prevIdx !== null && document.getElementById('view-' + views[prevIdx])) {
    document.getElementById('view-' + views[prevIdx]).classList.add('prev');
  }
  const activeView = document.getElementById('view-' + view);
  if (activeView) {
    activeView.hidden = false;
    setTimeout(() => activeView.classList.add('active'), 10);
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    document.querySelectorAll('nav a[data-view="' + view + '"]').forEach(a => a.classList.add('active'));
  }
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const view = link.dataset.view;
      if (views.includes(view)) {
        history.pushState({ view }, '', '#' + view);
        showView(view);
      }
    });
  });
  const initial = (location.hash || '#home').replace('#', '');
  showView(views.includes(initial) ? initial : 'home');
  window.addEventListener('popstate', () => {
    const view = (location.hash || '#home').replace('#', '');
    showView(views.includes(view) ? view : 'home');
  });
  // Dark/Light mode
  const modeBtn = document.getElementById('mode-toggle');
  function setMode(light) {
    document.body.classList.toggle('light-mode', light);
    localStorage.setItem('mode', light ? 'light' : 'dark');
  }
  modeBtn.addEventListener('click', () => setMode(!document.body.classList.contains('light-mode')));
  setMode(localStorage.getItem('mode') === 'light');
});
