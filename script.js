function updateTime(){
    let losAngelesDateElement=document.querySelector("#los-angeles-date");
    let parisDateElement=document.querySelector("#paris-date");
    if(parisDateElement){
        let losAngelesTimeElement=document.querySelector("#los-angeles-time");
        let losAngelesTime=moment().tz("America/Los_Angeles");
        losAngelesDateElement.innerHTML=`${moment().format("MMMM Do YYYY")}`;
        losAngelesTimeElement.innerHTML=`${losAngelesTime.format(`h:mm:ss [<small>]A[</small>]`)}`;
    
        let parisTimeElement=document.querySelector("#paris-time");
        let parisTime=moment().tz("Europe/Paris");
        parisDateElement.innerHTML=`${moment().format("MMMM Do YYYY")}`;
        parisTimeElement.innerHTML=`${parisTime.format(`h:mm:ss [<small>]A[</small>]`)}`;
    }
}

function updateCity(e){
    let cityElement=e.target.value;
    let cityTimezone=moment().tz(cityElement);
    let cityName=cityElement.replace("_"," ").split("/")[1];
    let citiesContainerSelect=document.querySelector("#cities");
    citiesContainerSelect.innerHTML=`
        <div class="city-container">
            <div>
                <h2>${cityName}</h2>
                <div class="date" id="los-angeles-date">${cityTimezone.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time" id="los-angeles-time">${cityTimezone.format("h:mm:ss")} <small>${cityTimezone.format("A")}</small></div>    
    `;
    console.log(cityElement);
}


updateTime();
setInterval(updateTime,1000);


let citySelectElement=document.querySelector("#city-select");
citySelectElement.addEventListener("change",updateCity);