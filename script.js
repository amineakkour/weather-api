let villeChoisie = "paris";
recevoirTemperature(villeChoisie);

let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () => {
  villeChoisie = prompt('¨Please insert a city: ');
  recevoirTemperature(villeChoisie);
});

function recevoirTemperature(ville) {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';

  let requete = new XMLHttpRequest();
  requete.open('GET', url);
  requete.responseType = 'json'; 
  requete.send(); 

  requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        
        let temperature = reponse.main.temp;
        let ville       = reponse.name;
        
        document.querySelector('#temperature_label').textContent = temperature;
        document.querySelector('#ville').textContent = ville;
      }
      else {
        alert('Something went wrong, please come back later.');
      }
    }
  }
}