const app = {};

app.token = "ZLv4DuWOXJMDJjtoemNuEtwro"


app.url = "https://data.cityofnewyork.us/resource/p937-wjvj.json"


app.getRecords = function() {
  
  const url = new URL (app.url);
 
  url.search = new URLSearchParams({
    "$$app_token": app.token,
    "$limit": 1,
    house_number: "255",
    street_name: '',
    borough: ''
  });

   
  
    //shorthand for fetch. then then 
  fetch(url).then((rodent) =>{
    return rodent.json();
  })
  .then((jsonData) =>{
    document.querySelector('.inspectionResults').innerHTML = '';
    // app.displayResults(jsonData);

  console.log(jsonData)
  })
};

// For each object within the array show selected results and append to li then append all to 
app.displayResults = function([]) {
  [].forEach((Object) =>{
    
    const number = document.createElement("li");
    number.innerText = Object.house_number

    const address = document.createElement("li");
    address.innerText = Object.street_name;

    const zipCode = document.createElement("li");
    zipCode.innerText = Object.zip_code;

    const date = document.createElement("li");
    date.innerText = Object.inspection_date;

    const initial = document.createElement("li");
    initial.innerText = Object.inspection_type;

    const iResult = document.createElement("li");
    iResult.innerText = Object.result;

    const resultContainer = document.createElement("ul")
    resultContainer.classList.add('resultContainer');

    resultContainer.append(number, address, zipCode, date, initial, iResult);

    document.querySelector('.inspectionResults').appendChild('.resultContainer');

  })
}
``




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

