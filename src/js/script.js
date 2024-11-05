const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");

let scaleSize = 1;
let contador = 0;
btnSi.addEventListener("click", function (e) {
  e.preventDefault();
  Toastify({
    text: "Gracias por permitirme seguir formando parte de tu vida espero nunca  decepcionarte te lo dice el niño que le encanta pasar solo, pero tratandose de estar a tu lado hace hasta lo imposible por estar todo el tiempo posible contigo angelito",
    duration: 8000,
    className: "info",
    style: {
      background: "linear-gradient(to right, #930DAB, #520297)",
    },
  }).showToast();
});

btnNo.addEventListener("mouseover", () => {
  // Generar posiciones aleatorias
  const randomX = Math.floor(Math.random() * 200) - 100; // Rango entre -100 y 100 px
  const randomY = Math.floor(Math.random() * 200) - 100;

  // Aplicar las posiciones al botón "No"
  btnNo.style.transform = `translate(${randomX}px, ${randomY}px)`;

  scaleSize += 0.1; // Aumenta la escala en 10%
  btnSi.style.transform = `scale(${scaleSize})`;
  contador++;
  if (contador == 5) {
    Toastify({
      text: "Heeeeey",
      duration: 2000,
      className: "warning",
      style: {
        background: "yellow",
        color: "black",
      },
    }).showToast();
  } else if (contador == 10) {
    Toastify({
      text: "Viejoooooo",
      duration: 2000,
      className: "warning",
      style: {
        background: "yellow",
        color: "black",
      },
    }).showToast();
  } else if (contador == 15) {
    Toastify({
      text: "dale click al otroooooo",
      duration: 2000,
      className: "warning",
      style: {
        background: "yellow",
        color: "black",
      },
    }).showToast();
  } else if (contador == 20) {
    Toastify({
      text: "Bueno tu sigue por mi no hay problema",
      duration: 5000,
      className: "warning",
      style: {
        background: "yellow",
        color: "black",
      },
    }).showToast();
  } else if (contador == 25) {
    Toastify({
      text: "Yo tengo todo el tiempo  del mundo",
      duration: 2000,
      className: "warning",
      style: {
        background: "yellow",
        color: "black",
      },
    }).showToast();
  } else if (contador == 30) {
    Toastify({
      text: "Ya?",
      duration: 2000,
      className: "warning",
      style: {
        background: "yellow",
        color: "black",
      },
    }).showToast();
  } else if (contador == 35) {
    Toastify({
      text: "se que estas mal de la vista pero vee el otro boton",
      duration: 3000,
      className: "warning",
      style: {
        background: "yellow",
        color: "black",
      },
    }).showToast();
  } else if (contador == 40) {
    Toastify({
      text: "Va a explotar el otro botoooooon",
      duration: 2000,
      className: "warning",
      style: {
        background: "yellow",
        color: "black",
      },
    }).showToast();
  } else if (contador == 45) {
    Toastify({
      text: "jeje este es el ultimo msj",
      duration: 2000,
      className: "warning",
      style: {
        background: "yellow",
        color: "black",
      },
    }).showToast();
  } else if (contador == 50) {
    Toastify({
      text: "mentiriiiiii",
      duration: 2000,
      className: "warning",
      style: {
        background: "yellow",
        color: "black",
      },
    }).showToast();
  } else if (contador == 55) {
    Toastify({
      text: "que dedicaion por llegar hasta aqui no?",
      duration: 2000,
      className: "warning",
      style: {
        background: "yellow",
        color: "black",
      },
    }).showToast();
  } else if (contador == 60) {
    Toastify({
      text: "jeje te esta gustando el regalo?",
      duration: 2000,
      className: "warning",
      style: {
        background: "yellow",
        color: "black",
      },
    }).showToast();
  } else {
  }
});
