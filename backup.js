
const app = {
}

app.token = "ZLv4DuWOXJMDJjtoemNuEtwro";

app.getRecords = () => {
  const url = new URL ("https://data.cityofnewyork.us/resource/p937-wjvj.json");
  url.search = new URLSearchParams({
    "$$app_token": app.token,
  });


  //shorthand for fetch. then then 
  fetch(url)
    .then(result => result.json())
    .then(data => console.log(data))
};

app.init = () => {
  app.getRecords();
};

app.init();










//ACCORDION

const accordionItemHeader = document.querySelectorAll(".accordionItemHeader");

accordionItemHeader.forEach(accordionItemHeader => {
  
  accordionItemHeader.addEventListener("click", event => {
    accordionItemHeader.classList.toggle("active");
  
    const accordionItemBody = accordionItemHeader.nextElementSibling;

    if (accordionItemHeader.classList.contains("active")) {    
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";  
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});