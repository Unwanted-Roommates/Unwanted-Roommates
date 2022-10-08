const app = {
}

app.apiKey = "QYr38XnD";

app.getArt = (query) => {
  const url = new URL ("https://www.rijksmuseum.nl/api/en/collection");
  url.search = new URLSearchParams({
    key: app.apiKey,
    imgonly: true,
    q: query
  });


  //shorthand for fetch. then then 
  fetch(url)
    .then(result => result.json())
    .then(data => {
      document.querySelector("#artwork").innerHTML = "";
      app.displayArt(data.artObjects)
    });
};

app.displayArt = (arrayOfObjects) => {
  arrayOfObjects.forEach((artObject) => {
    //create new html elements and store art inside 
     //add those elements to our HTML markup 
     //artObject is just the number of the object in thearray

    const title = document.createElement("h2");
    title.innerText = artObject.title; 

    const artist = document.createElement("p");
    artist.innerHTML = artObject.principalOrFirstMaker; 

    const image = document.createElement("img");
    image.src = artObject.webImage.url;
    image.alt = artObject.longTitle;
    
    const artContainer = document.createElement("div");
    artContainer.classList.add("piece");

    artContainer.append(title, artist, image);

    //this takes all three above variables and drops them into art container 

    document.querySelector("#artwork").appendChild(artContainer);
  })
}
//this function holds all events /user generated events in the app // #animal is the id for the select inthe html
//this refers to the element an event just tookplace on
//you dont need to call or init this is because it is onchange or submit or click 
app.events = () => {
  document.querySelector("#animal").addEventListener("change", (event) =>{
    // console.log(event.target.value); //targets the target of the event
    const userSelection = event.target.value;
    app.getArt(userSelection);
  })
};

app.init = () => {
  app.getArt();
  app.events();
};

app.init();




