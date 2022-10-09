const app = {};

app.token = "ZLv4DuWOXJMDJjtoemNuEtwro"


app.url = "https://data.cityofnewyork.us/resource/p937-wjvj.json"


app.getRecords = (house, street, borough)=> {
  
  const url = new URL (app.url);
 
  url.search = new URLSearchParams({
    "$$app_token": app.token,
    "$limit": 5,
    "house_number": house,
    "street_name": street,
    "borough": borough
  });

  fetch(url).then((rodent) =>{

    if (rodent.ok) {
      return rodent.json();
    } else {
      throw new Error("There was an unexpected problem with the API. Please try again later.")
    }
  })
  .then((jsonData) =>{
    // if (jsonData.length === 0) {

    //   console.log("error")
    // } else {
    document.querySelector('.inspectionResults').innerHTML = '';
    app.displayResults(jsonData);
    // }
  })
  // .catch((error)=> {
  // console.log("error")
  // });
};

app.displayResults = (arrayOfObjects) => {
  arrayOfObjects.forEach((obj) =>{
    const number = obj.house_number;
    const address = obj.street_name;
    const zipCode = obj.zip_code;
    const borough = obj.borough;
    const date = obj.inspection_date;
    const initial = obj.inspection_type;
    const iResult = obj.result;
  
    const resultContainer = document.createElement("div");
    resultContainer.classList.add('resultContainer');
    
    const innerHTML = `
    <div class = "labels">
    <p class = "recordDetails"> ADDRESS:</p>
    <p class = "recordDetails"> BOROUGH:</p>
    <p class = "recordDetails"> ZIP CODE:</p>
    <p class = "recordDetails"> INSPECTION DATE:</p>
    <p class = "recordDetails"> INSPECTION TYPE:</p>
    <p class = "recordDetails"> RESULT:</p>
    
    </div>
  `
    const innerHTML2 = `
    <div class ="information">
      <p class = "recordDetails"> ${number} ${address}</p>
      <p class = "recordDetails"> ${borough}</p>
      <p class = "recordDetails"> ${zipCode}</p>
      <p class = "recordDetails"> ${date}</p>
      <p class = "recordDetails"> ${initial}</p>
      <p class = "recordDetails"> ${iResult}</p>
    </div>
  `
    const record = document.createElement("div");
    record.classList.add('record');
    record.innerHTML = `${innerHTML}`

    const details = document.createElement("div");
    details.classList.add("details");
    details.innerHTML = `${innerHTML2}`
    
    resultContainer.append(record, details); 


    document.querySelector('.inspectionResults').append(resultContainer); 
  })
}

app.events = () => { 

//FORM 
  document.querySelector("form").addEventListener('submit', function(event){
    event.preventDefault();

    // document.querySelector(".resultsContainer").classList.remove();

    const house =  document.querySelector("#houseNumber").value;
    const street = document.querySelector("#streetName").value.toUpperCase();
    const borough = document.querySelector("#borough").value;

  app.getRecords(house, street, borough)
  });
};
 
 //ACCORDION MENU
  app.accordionItemHeader = document.querySelectorAll(".accordionItemHeader");
  app.accordionItemHeader.forEach(header => {
    
    header.addEventListener("click", (event) => {
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

