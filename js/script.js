// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: 
//             costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
//             Al click dell'utente sulle frecce verso alto o basso, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, 
//             la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.

// Array di oggetti che rappresentano le immagini
const images = [
    {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts and chaos.",
    },
    {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    },
  ];
  
  // imposta l'indice dell'immagine attiva a 0 
  let activeItem = 0;
  
  // mettere nella costante i container per le immagini e le miniature
  const imagesContainer = document.querySelector('.images-container');
  const thumbnailsContainer = document.querySelector('.thumbnails-container');
  
  // creare ciclo per creare le immagini e le miniature
  images.forEach((imageObject, index) => {
    // creare l'elemento "image"
    const imageElement = createImage(imageObject.image);
  
    // creare l'elemento "thumbnail"
    const thumbnailElement = createThumbnail(imageObject.image);
  
    // aggiungere l'elemento "image" al container
    imagesContainer.appendChild(imageElement);
  
    // aggiungere l'elemento "thumbnail" al container
    thumbnailsContainer.appendChild(thumbnailElement);
  
    // aggiungere la classe "active" al primo elemento di entrambe le gallerie
    // creare condizione che se l'indice dell'immagine corrente è uguale al contatore 
    // si attiva la classe active 
    if (index === activeItem) {
      imageElement.classList.add('active');
      thumbnailElement.classList.add('active');
    }
  });
  
  // creare il clic sul pulsante "next"
  const nextArrow = document.querySelector('.arrow.next');
  nextArrow.addEventListener('click', function () {
    // rimuovere la classe "active" dall'immagine e miniatura corrente
    document.querySelector('.image.active').classList.remove('active');
    // document.querySelector('.thumbnail.active').classList.remove('active');
  
    // carosello infinito 
    // calcolare l'indice dell'immagine successiva
    // Incrementare activeItem di 1
    activeItem++;
    // se activeItem è maggiore o uguale alla lunghezza dell'array images,
    // riportalo a 0 per tornare alla prima immagine
    if (activeItem >= images.length) {
      activeItem = 0;
    }
  
    // aggiungiere la classe "active" all'immagine e miniatura successiva
    imagesContainer.children[activeItem].classList.add('active');
    thumbnailsContainer.children[activeItem].classList.add('active');
  });
  
  // creare il clic sul pulsante "previous"
  const previousArrow = document.querySelector('.arrow.previous');
  previousArrow.addEventListener('click', function () {
    // rimuovere la classe "active" dall'immagine e miniatura corrente
    document.querySelector('.image.active').classList.remove('active');
    // document.querySelector('.thumbnail.active').classList.remove('active');
  
    
    // calcolare l'indice dell'immagine precedente
    // decrementa activeItem di 1
    activeItem--;
    // se activeItem diventa negativo, riportalo alla fine dell'array per tornare all'ultima immagine
    if (activeItem < 0) {
      activeItem = images.length - 1;
    }
  
    // aggiungiere la classe "active" all'immagine e miniatura precedente
    imagesContainer.children[activeItem].classList.add('active');
    thumbnailsContainer.children[activeItem].classList.add('active');
  });


//   FUNZIONI
  // funzione per creare un elemento "image"
//   imagePath-->limmagine dell'oggetto che si inserisce nel container
  function createImage(imagePath) {
    const image = document.createElement('div');
    image.classList.add('image');
    image.innerHTML = `<img src="css/${imagePath}" alt="">`;
    return image;
  }
  
  // funzione per creare un elemento "thumbnail"
  //   imagePath-->limmagine dell'oggetto che si inserisce nel container
  function createThumbnail(imagePath) {
    const thumbnail = document.createElement('div');
    thumbnail.classList.add('thumbnail');
    thumbnail.innerHTML = `<img src="css/${imagePath}" alt="">`;
    return thumbnail;
  }
  