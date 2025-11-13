document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Pega os dados do formulário
  const form = e.target;
  const infoConvite = {
    name: form.name.value,
    date: form.date.value,
    time: form.time.value,
    location: form.location.value,
    email: form.email.value
  };
  // Salva os dados no armazenamento local
  localStorage.setItem('infoConvite', JSON.stringify(infoConvite));
  // Redireciona para a página do convite
  window.location = 'paginaConvite.html';
});

window.onload = function() {
  // Pega as informações salvas do usuário
  const info = JSON.parse(localStorage.getItem('infoConvite')) || {};

  // Preenche a página do convite com as informações
  document.getElementById('hero-title').textContent = info.name || '';
  document.getElementById('section-title').textContent = info.location || '';
  document.getElementById('date-main').textContent = info.date || '';
  document.getElementById('date-sub').textContent = info.time || '';
};