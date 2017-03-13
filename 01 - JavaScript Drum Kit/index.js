const LIST = Array.from(document.getElementsByClassName("key")).map(element => parseInt(element.dataset.key));

validatePush = (event) => {LIST.includes(event.which) ? acceptedPush(event.which) : null};

acceptedPush = (target) => {
  let element = Array.from(document.querySelectorAll('[data-key="' + target +'"]'));
  displayAnimation(element[0]);
  playSound(element[1]);
}

displayAnimation = (element) => {element.classList.add('playing')}

playSound = (audio) => {
  audio.currentTime = 0;
  audio.play();
}

removeTransition = (element) => {
  element.classList.remove('playing');
}

window.addEventListener('keydown', validatePush);
window.addEventListener('transitionend', removeTransition);
