//Adding an action to all elements with the class="region" --> open .modal-wrapper, close all .modal-content, open specific id
document.querySelectorAll('.region').forEach(i => {i.addEventListener('click', showModal)});

function showModal(){
  document.querySelector('.modal-wrapper').style.display = "flex";
  document.querySelectorAll('.modal-content').forEach(i => i.style.display = "none");

  function regionDescription(modal_name){
    document.querySelector(modal_name).style.display = "block";
  };
  
  if (this.id === "kraj-baskow") {regionDescription('#modal-kraj-baskow')}
  else if (this.id === "portugalia") {regionDescription('#modal-portugalia')}
  else if (this.id === "murcja") {regionDescription('#modal-murcja')}
  else if (this.id === "kastylia-lm") {regionDescription('#modal-kastylia-lm')}
  else if (this.id === "estremadura") {regionDescription('#modal-estremadura')}
  else if (this.id === "kastylia-leon") {regionDescription('#modal-kastylia-leon')}
  else if (this.id === "asturia") {regionDescription('#modal-asturia')}
  else if (this.id === "baleary") {regionDescription('#modal-baleary')}
  else if (this.id === "galicja") {regionDescription('#modal-galicja')}
  else if (this.id === "walencja") {regionDescription('#modal-walencja')}
  else if (this.id === "kantabria") {regionDescription('#modal-kantabria')}
  else if (this.id === "aragonia") {regionDescription('#modal-aragonia')}
  else if (this.id === "madryt") {regionDescription('#modal-madryt')}
  else if (this.id === "la-rioja") {regionDescription('#modal-la-rioja')}
  else if (this.id === "nawarra") {regionDescription('#modal-nawarra')}
  else if (this.id === "katalonia") {regionDescription('#modal-katalonia')}
  else if (this.id === "andaluzja") {regionDescription('#modal-andaluzja')} 

};


//Adding an action to the element with the class="modal-close" --> close the modal-wrapper
document.querySelector('.modal-close').addEventListener('click', closeModal);

function closeModal(){
  document.querySelector('.modal-wrapper').style.display = 'none';
}


