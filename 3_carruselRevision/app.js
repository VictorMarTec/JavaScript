// local reviews data
const reviews = [
    {
      id: 1,
      name: "Katherine Boyer Waterston",
      job: "Actriz",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/3/3f/Katherine_Waterston_%2843001990584%29.jpg",
      text:
        "Katherine Boyer Waterston (Westminster, Londres; 3 de marzo de 1980) es una actriz estadounidense, más conocida por sus roles en la saga de Animales fantásticos y dónde encontrarlos (2016), en Alien: Covenant (2017), en la película dirigida por Paul Thomas Anderson, Inherent Vice (2015) entre otros.",
    },
    {
      id: 2,
      name: "David Jude Heyworth Law",
      job: "actor",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/4/4a/Jude_Law_-_Headshot.jpg",
      text:
        "David Jude Heyworth Law (Lewisham, Londres, 29 de diciembre de 1972), más conocido como Jude Law, es un actor de cine y teatro británico. Es considerado como uno de los actores ingleses más conocidos y respetados en el cine de Hollywood, mayormente por sus roles en películas como A.I. Inteligencia Artificial, Enemy at the Gates, El aviador, Lemony Snicket's A Series of Unfortunate Events, Sherlock Holmes, Hugo, Sherlock Holmes: Juego de sombras, El Gran Hotel Budapest y King Arthur: Legend of the Sword.",
    },
    {
      id: 3,
      name: "Ezra Matthew Miller",
      job: "actor",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/8/8b/Ezra_Miller_by_Gage_Skidmore.jpg",
      text:
        "Ezra Matthew Miller (Wyckoff, Nueva Jersey, 30 de septiembre de 1992) es un actor, músico, cantante y activista estadounidense. Su debut cinematográfico ocurrió en 2008 con su papel de Robert en Afterschool, mientras que su primer rol importante fue en el drama We Need to Talk About Kevin de 2011.",
    },
    {
      id: 4,
      name: "Mads Mikkelsen",
      job: "actor",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/f/f2/Mads_Mikkelsen_Cannes_2013_2.jpg",
      text:
        "Mads Mikkelsen (Copenhague, 22 de noviembre de 1965) es un actor danés. Es conocido internacionalmente por interpretar el papel de Hannibal Lecter en la serie de televisión Hannibal; por participar en la película de culto Pusher y en su secuela; y por hacer de Le Chiffre, el villano de Casino Royale, la 21.ª película de la saga James Bond. Es hermano del también actor Lars Mikkelsen.",
    },
  ];
  // select items
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener("click", function () {
    console.log("hello");
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });