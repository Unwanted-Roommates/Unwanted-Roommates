
const app = {}

app.token = "ZLv4DuWOXJMDJjtoemNuEtwro";

app.getRecords = () => {
  const url = new URL ("https://data.cityofnewyork.us/resource/p937-wjvj.json");
  url.search = new URLSearchParams({
    "$$app_token": app.token,
  });

  fetch(url)
    .then(result => result.json())
    .then(data => console.log(data))
};


//ACCORDION MENU

app.events = () => { 
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
};


app.init = () => {
  app.getRecords();
  app.events();
};

app.init();


//ACCORDION

