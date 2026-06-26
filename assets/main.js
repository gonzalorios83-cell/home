
const engines = {
  web: q => `https://www.google.com/search?q=${encodeURIComponent(q)}`,
  ia: q => `https://chat.openai.com/?q=${encodeURIComponent(q)}`,
  videos: q => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`,
  comprar: q => `https://www.google.com/search?tbm=shop&q=${encodeURIComponent(q)}`,
  comparar: q => `https://www.google.com/search?q=${encodeURIComponent(q + ' comparativa opiniones')}`,
  tramites: q => `https://www.google.com/search?q=${encodeURIComponent(q + ' trámite Argentina')}`
};
let activeEngine = 'web';
document.querySelectorAll('[data-engine]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-engine]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeEngine = btn.dataset.engine;
  });
});
const form = document.querySelector('#smartSearchForm');
if(form){
  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = document.querySelector('#searchInput');
    const q = (input?.value || '').trim();
    if(!q) return;
    const fn = engines[activeEngine] || engines.web;
    window.open(fn(q), '_blank', 'noopener');
  });
}
const clock = document.querySelector('#clock');
const dateText = document.querySelector('#dateText');
function tick(){
  const d = new Date();
  if(clock) clock.textContent = d.toLocaleTimeString('es-AR', {hour:'2-digit', minute:'2-digit'});
  if(dateText) dateText.textContent = d.toLocaleDateString('es-AR', {weekday:'short', day:'2-digit', month:'short'});
}
tick(); setInterval(tick, 30000);
