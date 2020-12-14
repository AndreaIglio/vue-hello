// Istruzioni:
// TASK 1 Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

let app = new Vue({
  el: "#title",
  data: {
    message: `Ciao Ajeje it's ` + new Date().toLocaleString(),
    image: "http://qnimate.com/wp-content/uploads/2014/03/images2.jpg",
  },
});



// Bonus: Aggiungere un’immagine presa anch’essa da un data
