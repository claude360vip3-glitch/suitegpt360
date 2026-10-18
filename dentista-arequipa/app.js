const WA = '51900378240';
const $ = (s) => document.querySelector(s);

document.getElementById('y').textContent = new Date().getFullYear();

const root = document.documentElement;
const themeBtn = $('#theme');
const paintTheme = () => { themeBtn.textContent = root.dataset.theme === 'light' ? '☾' : '☀'; };
paintTheme();
themeBtn.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
  paintTheme();
});

const burger = $('.burger');
burger.addEventListener('click', () => {
  const open = $('#menu').classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
document.querySelectorAll('#menu a').forEach((a) => a.addEventListener('click', () => $('#menu').classList.remove('open')));

const fecha = $('#fecha');
fecha.min = new Date().toISOString().split('T')[0];

document.querySelectorAll('.svc').forEach((c) =>
  c.addEventListener('click', () => { $('#svc').value = c.dataset.svc; })
);

$('#reservar').addEventListener('submit', (e) => {
  e.preventDefault();
  const svc = $('#svc').value;
  const f = fecha.value ? fecha.value.split('-').reverse().join('/') : 'por coordinar';
  const msg = `Hola, quisiera reservar una cita.\nServicio: ${svc}\nFecha preferida: ${f}`;
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
});
