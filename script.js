function openModalHtml() {
   
   const modal = document.getElementById('modal-window-html');
   modal.classList.add('open');

   modal.addEventListener('click', (e) =>{
      if (e.target.id == 'modal-window-html' || e.target.id == "close"){
          modal.classList.remove('open');
          localStorage.fechaModal = 'modal-window-html';
      }
  })
}

function openModalCss() {
   
   const modal = document.getElementById('modal-window-css');
   modal.classList.add('open');

   modal.addEventListener('click', (e) =>{
      if (e.target.id == 'modal-window-css' || e.target.id == "close"){
          modal.classList.remove('open');
          localStorage.fechaModal = 'modal-window-css';
      }
  })
}

function openModalJava() {
   
   const modal = document.getElementById('modal-window-java');
   modal.classList.add('open');

   modal.addEventListener('click', (e) =>{
      if (e.target.id == 'modal-window-java' || e.target.id == "close"){
          modal.classList.remove('open');
          localStorage.fechaModal = 'modal-window-java';
      }
  })
}

function openModalPostgres() {
   
   const modal = document.getElementById('modal-window-postgres');
   modal.classList.add('open');

   modal.addEventListener('click', (e) =>{
      if (e.target.id == 'modal-window-postgres' || e.target.id == "close"){
          modal.classList.remove('open')
          localStorage.fechaModal = 'modal-window-postgres'
      }
  });
}