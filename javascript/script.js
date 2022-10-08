const app = {};

app.token = "ZLv4DuWOXJMDJjtoemNuEtwro"


app.url = "https://data.cityofnewyork.us/resource/p937-wjvj.json"


app.getRecords = function() {
  
  const url = new URL (app.url);
 
  url.search = new URLSearchParams({
    "$$app_token": app.token,
    "$limit": 1,
    "house_number": 20,
    "street_name": "LOCUST STREET",
    "borough": 'Brooklyn'
  });

   
    //shorthand for fetch. then then 
  fetch(url).then((rodent) =>{
    return rodent.json();
  })
  .then((jsonData) =>{
    document.querySelector('.inspectionResults').innerHTML = '';
    app.displayResults(jsonData);
    console.log(jsonData)
  })
};

// For each object within the array show selected results and append to li then append all to 
app.displayResults = (arrayOfObjects) => {
  arrayOfObjects.forEach((Object) =>{
    
    const resultContainer = document.createElement("div")
    resultContainer.classList.add('resultContainer');
    
    const number = document.createElement("p");
    number.innerText = Object.house_number

    const address = document.createElement("p");
    address.innerText = Object.street_name;

    const zipCode = document.createElement("p");
    zipCode.innerText = Object.zip_code;

    const date = document.createElement("p");
    date.innerText = Object.inspection_date;
    
    const initial = document.createElement("p");
    initial.innerText = Object.inspection_type;
    
    const iResult = document.createElement("p");
    iResult.innerText = Object.result;
    
    document.querySelector('.inspectionResults').append(number, address, zipCode, date, initial, iResult);

    console.log(address)
 
  })
}

app.events = () => { 
 // Add eventListener on submit when user input address
  document.querySelector("form").addEventListener('submit', function(e){
    const userChoice = e.target.value;
    app.getRecords(userChoice);
    e.preventDefault();
  });
};
 
 //ACCORDION MENU
  app.accordionItemHeader = document.querySelectorAll(".accordionItemHeader");
  app.accordionItemHeader.forEach(header => {
    
    header.addEventListener("click", event => {
      header.classList.toggle("active");
    
      const accordionItemBody = header.nextElementSibling;

      if (header.classList.contains("active")) {    
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";  
      } else {
        accordionItemBody.style.maxHeight = 0;
      }
    });
  });


app.init = () => {
  app.getRecords();
  app.events();
};

app.init();


//ACCORDION