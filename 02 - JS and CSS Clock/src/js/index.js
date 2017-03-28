const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const allHands    = document.querySelectorAll('.hand')

setHand = (hand, degree) =>  {
  [hand][0].style.transform = "rotate(" + degree + "deg)";
}

setDate = () =>  {
  const FULLROUND = 360;
  const BASEROTATION = 90;
  let now = new Date();
  let secDegree = now.getSeconds() / 60 * FULLROUND + BASEROTATION;
  let minDegree = now.getMinutes() / 60 * FULLROUND + BASEROTATION;
  let hourDegree = now.getHours() / 12 * FULLROUND + BASEROTATION;
  setHand(secHand, secDegree);
  setHand(minHand, minDegree);
  setHand(hourHand, hourDegree);
  secDegree === 90 ? allHands.forEach(hand => hand.style.transition = 'none') : allHands.forEach(hand => hand.style.transition = '');
}

initClock = () =>  {
  setInterval(setDate, 1000);
  setDate();
}

initClock();
