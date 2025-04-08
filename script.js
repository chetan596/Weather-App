let input = document.querySelector(".sharch");
let input2 = document.querySelector("input");
let icon = document.querySelector("#chetan");
let locationwww;
let locationChange = document.querySelector("#loctionchange");
let body = document.querySelector("body");
let errr = document.querySelector(".erro")


let weather;
hhhh();
locationChange.addEventListener("click", () => {
  input2.focus();
  input.classList.add("mmm");
 
});

icon.addEventListener("click", () => {
  input2.autofocus = false;
  locationwww = input2.value;
  input.classList.remove("mmm");
  input2.value = "";
  hhhh();
});

  input2.addEventListener("keydown",(e)=>{
      if(e.key === "Enter"){
       
    locationwww = input2.value;
    input2.autofocus = false;
    input.classList.remove("mmm");
    input2.value = "";
    hhhh();

      }
    })
function hhhh() {
  if (locationwww == undefined) {
    let weather = `http://api.weatherapi.com/v1/current.json?key=e3ebc41c384f4fe6af5175140250504&q=multai&aqi=no`;
    ddd(weather);
  } else {
    let weather = `http://api.weatherapi.com/v1/current.json?key=e3ebc41c384f4fe6af5175140250504&q=${locationwww}&aqi=no`;
    ddd(weather);

  }
}

function ddd(weather) {
  fetch(weather)
    .then((result) => {
      return result.json();
    })
    .then((data) => {
       
      dataChange(data);
      name(data);
    })
    .then(() => {
      bgchange();
      
    })
    .catch((err) => {
      console.log("-------Error--------" ,err)
      error()
    });
}
function error(){
  errr.classList.add("show")
 setTimeout(()=>{
  errr.classList.remove("show")
 },3000)
}
const boxes = document.querySelectorAll('.foot-box1');
const data = [
  
];
function name(tttt) {
  if (data.length >=7) {
    data.pop();

      } else if (data.length <= 7) {
    data.unshift(tttt)
    
  }

  
 
  
  boxes.forEach((box, index) => {
    const timeP = box.querySelector('p.time');
    const cityP = box.querySelector('p.city');
    const tempH1 = box.querySelector('h1');
    
    if (data[index]) {
    
      
      let oo = data[index].location.name;
      if(oo.length > 11){
        cityP.innerText = oo.slice(0,11) + "...."
      }else{
        cityP.innerText = oo
      }
      
      tempH1.innerHTML = `${Math.floor(data[index].current.temp_c)} <sup>o</sup>c`;

    
    function formatTimeToAMPM(dateTimeStr) {
      const date = new Date(dateTimeStr); // creates date from string
      let hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
    
      hours = hours % 12 || 12; // convert 0 to 12 for 12-hour clock
    
      return `${hours}${ampm}`;
    }
    
    // Example
    const input =data[index].current.last_updated.replace(' ', 'T'); // convert to ISO format
    const timeFormatted = formatTimeToAMPM(input);
    timeP.innerText =timeFormatted;
    console.log(data[index].current.last_updated);
    
    
  
      
    }
  });
}

let city = document.querySelector(".city");
let condition = document.querySelector("#condition");
let temp = document.querySelector("#temp");
let Humidty = document.querySelector("#Humidty");
let Airpressure = document.querySelector("#Airpressure");
let cfr = document.querySelector("#cfr");
let windspeed = document.querySelector("#windspeed");
let contt = document.querySelector("#contt");

function dataChange(data) {

   city.innerText = `${data.location.name} City`;
  condition.innerText = data.current.condition.text;
  weather = data.current.condition.text;
  temp.innerHTML = `${data.current.temp_c} <sup>O</sup>C `;
  Humidty.innerText = `${data.current.humidity}%`;
  Airpressure.innerText = `${data.current.pressure_mb} PS`;
  cfr.innerText = `${data.current.precip_mm}%`;
  windspeed.innerText = `${data.current.wind_kph} km/h`;
  contt.innerText = data.location.country;
}



function bgchange() {
  // let weather = "ddddd";
  if (weather === "Clear") {
    body.style.backgroundImage =
      "url(https://c4.wallpaperflare.com/wallpaper/111/619/590/nature-landscape-trees-plants-wallpaper-preview.jpg)";
  } else if (weather === "Partly cloudy") {
    body.style.backgroundImage =
      "url(https://images.unsplash.com/photo-1495933925743-bb94d1d4ea4c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
  } else if (weather === "Overcast") {
    body.style.backgroundImage =
      "url(https://c4.wallpaperflare.com/wallpaper/635/733/259/landscape-daniel-casson-coast-shore-wallpaper-preview.jpg)";
  } else if (weather === "Light rain") {
    body.style.backgroundImage =
      "url(https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
  } else if (weather === "Moderate rain") {
    body.style.backgroundImage =
      "url(https://images.unsplash.com/photo-1601116780183-d2e80a0bd47f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
  } else if (weather === "Heavy rain") {
    body.style.backgroundImage =
      "url(https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
  } else if (weather === "Thunderstorm") {
    body.style.backgroundImage =
      "url(https://images.unsplash.com/photo-1500674425229-f692875b0ab7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
  } else if (weather === "Snow showers") {
    body.style.backgroundImage =
      "url(https://images.unsplash.com/photo-1500413702358-48b1daad8ddc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
  } else if (weather === "Blizzard") {
    body.style.backgroundImage =
      "url(https://plus.unsplash.com/premium_photo-1725829208074-c7df6c4460f5?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
  } else if (weather === "Foggy") {
    body.style.backgroundImage =
      "url(https://c4.wallpaperflare.com/wallpaper/706/809/291/schwarzwald-germany-mountains-smoke-wallpaper-preview.jpg)";
  } else if (weather === "Freezing fog") {
    body.style.backgroundImage =
      "url(https://plus.unsplash.com/premium_photo-1711572322915-0106714be1af?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://c4.wallpaperflare.com/wallpaper/706/809/291/schwarzwald-germany-mountains-smoke-wallpaper-preview.jpghttps://plus.unsplash.com/premium_photo-1711572322915-0106714be1af?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
  } else if (weather === "Breezy") {
    body.style.backgroundImage =
      "url(https://images.unsplash.com/photo-1726469429876-a52c21902e36?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
  } else if (weather === "Gale") {
    body.style.backgroundImage =
    "url(https://plus.unsplash.com/premium_photo-1733342555665-b856ceb5126c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
  } else if (weather === "Dry heat") {
    body.style.backgroundImage =
      "url(https://images.unsplash.com/photo-1579061354438-da92cc4ee39b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
  } else if (weather === "Humid heat") {
    body.style.backgroundImage =
      "url(https://images.unsplash.com/photo-1561473880-3b8b12de0a71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  } else if (weather === "Heatwave") {
    body.style.backgroundImage =
      "url(https://images.unsplash.com/photo-1626503963428-11265c265f41?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
  } else if (weather === "Cold snap") {
    body.style.backgroundImage =
      "url(https://plus.unsplash.com/premium_photo-1675715923852-ec99a48deffa?q=80&w=1529&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
  }else if (weather === "Sunny") {
    body.style.backgroundImage =
      "url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
  } else {
    body.style.backgroundImage =
      "url(https://images.unsplash.com/photo-1658279165324-454de0ee3da6?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
  }
}


