const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_s8arpbk';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Mensaje enviado correctamente');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});


/* Transition */

window.sr = ScrollReveal();

sr.reveal('.cards', {
    duration: 4000,
    origin: 'bottom',
    distance: '-140px',
});