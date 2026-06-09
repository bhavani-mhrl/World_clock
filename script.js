setInterval(function(){
    let losAngelesDateElement=document.querySelector("#los-angeles-date");
    let losAngelesTimeElement=document.querySelector("#los-angeles-time");
    let losAngelesTime=moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML=`${moment().format("MMMM Do YYYY")}`;
    losAngelesTimeElement.innerHTML=`${losAngelesTime.format(`h:mm:ss [<small>]A[</small>]`)}`;

    let parisDateElement=document.querySelector("#paris-date");
    let parisTimeElement=document.querySelector("#paris-time");
    let parisTime=moment().tz("Europe/Paris");
    parisDateElement.innerHTML=`${moment().format("MMMM Do YYYY")}`;
    parisTimeElement.innerHTML=`${parisTime.format(`h:mm:ss [<small>]A[</small>]`)}`;


},1000);