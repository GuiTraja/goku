const btn = document.getElementById('button');

document.getElementById('form-api')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'service_lup8ith';
   const templateID = 'template_964fgqr';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      const popUp = document.getElementById('pop-up')
      popUp.classList.add('closepopup')
      document.body.style.overflowY = 'visible'
    }, (err) => {
      btn.value = 'Send Email';
      alert('Erro ao enviar e-mail!');
    });

});