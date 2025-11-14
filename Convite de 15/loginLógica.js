// script.js

document.addEventListener('DOMContentLoaded', () => {
  console.log('script.js carregado!');

  // Página de login
  const btnModelos = document.getElementById('btnModelos');

  if (btnModelos) {
    btnModelos.addEventListener('click', () => {
      console.log('Clique em "Escolher modelos"');

      const infoConvite = {
        name: document.getElementById('nome').value.trim(),
        date: document.getElementById('data').value.trim(),
        time: document.getElementById('horario').value.trim(),
        location: document.getElementById('local').value.trim(),
        email: document.getElementById('email').value.trim()
      };

      console.log('Salvando no localStorage:', infoConvite);

      // Salva no armazenamento local
      localStorage.setItem('infoConvite', JSON.stringify(infoConvite));

      // Redireciona para a página do convite
      window.location.href = 'paginaConvite.html';
    });
  }
  
  // Página do convite
  const infoRaw = localStorage.getItem('infoConvite');

  if (infoRaw) {
    const info = JSON.parse(infoRaw);
    console.log('Dados carregados na página do convite:', info);

    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && info.name) heroTitle.textContent = info.name;

    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle && info.location) sectionTitle.textContent = info.location;

    const dateMain = document.querySelector('.date-main');
    if (dateMain && info.date) dateMain.textContent = info.date;

    const dateSub = document.querySelector('.date-sub');
    if (dateSub && info.time) dateSub.textContent = info.time;
  }
});