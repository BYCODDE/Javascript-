









( function main () {
  
  
  const searchBtnEl = document.getElementsByClassName("bx bx-search");
    const searchInputEl = document.getElementsByClassName("search-field");

   
    const root = document.getElementById("mainroot");
    
    
    const API = "https://restcountries.com/v3.1/all"
    
    
    const getCountries = async () => {
       
       
       const response  =  await fetch (API)
       const allCountires = await  response.json()
       
       for (let i= 0; i < allCountires.length; i ++) {
          const countryContainer = document.createElement("div")
          const countryFlag = document.createElement("img")
          countryFlag.src = allCountires[i].flags.png
          
          countryContainer.appendChild(countryFlag)
          
          
          
 
 
 
    const countryName = document.createElement("h2")
    countryName.innerText = allCountires[i].name.common
    countryContainer.appendChild(countryName)
    
 
 
 
 
    countryCapital = document.createElement("p")
    countryCapital.innerText =  "Capital:" + " " + allCountires[i].capital 
    countryContainer.appendChild(countryCapital)
    
 
 
 
 
 
 
 
 
    countryPopulation = document.createElement("p")
    countryPopulation.innerText =  "Population: " + allCountires[i].population 
    countryContainer.appendChild(countryPopulation)
    
 
 
 
    countryRegion = document.createElement("p")
    countryRegion.innerText = "Region: " + allCountires[i].region
    countryContainer.appendChild(countryRegion)
 
    root.append(countryContainer)
 
    
    
    
    
    
    
    
    
  }
  
  
};
   
 
 
 getCountries()
 
 })();
 
 









































const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }


          modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});











