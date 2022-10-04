
const baseURL = "https://data.cityofnewyork.us/resource/p937-wjvj.json";
const url = new URL(baseURL);

url.search = new URLSearchParams ({
  "$$app_token": "ZLv4DuWOXJMDJjtoemNuEtwro"
});

fetch(url)
.then ((response)=> {
  return response.json();
}).then ((data) =>{
  console.log(data)
})

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