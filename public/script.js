

async function fetchweather(){
      const citydisplay  = document.getElementById("cityDisplay1");
      const tempDisplay  = document.getElementById("cityDisplay2");
      const humidityDisplay  = document.getElementById("cityDisplay3");
      const descDisplay  = document.getElementById("cityDisplay4");
      const weatherEmoji  = document.getElementById("cityDisplay5");
 
    try{
      const cityName = document.getElementById("cityname12").value;
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&id=1170157&appid=24683317574536f604cebeb141c4fa0f`)
        
      if(!response.ok){
        throw new Error("The Resource is Not Available");  
      }
      
      else{
        const data  = await response.json(response);
        console.log(data);
        const kelvin = data.main.temp_max;
        const fahrenheit = Math.trunc((kelvin - 273.15) * 9/5 + 32);
        const blockopen = document.getElementById("cardzz");
        blockopen.style.display = "block";
         citydisplay.textContent = data.name;
          descDisplay.textContent = `${data.weather[0].description}`;
          humidityDisplay.textContent = `Humidity: ${data.main.humidity}%`;
          tempDisplay.textContent = `${fahrenheit}°F`;

     switch (true) {
     case(fahrenheit >= 85):
       weatherEmoji.textContent = "☀️"; 
       break;

     case(fahrenheit > 65 && fahrenheit < 85):
      weatherEmoji.textContent = "🌤️"; 
       break;

     case(fahrenheit > 45 && fahrenheit <= 65):
       weatherEmoji.textContent = "🌥️"; 
       break;

     case(fahrenheit > 32 && fahrenheit <= 45):
       weatherEmoji.textContent = "🧥"; 
       break;

     case(fahrenheit <= 32):
       weatherEmoji.textContent = "❄️"; 
       break;

     default:
       weatherEmoji.textContent = "🌈"; 
}


          

      }

      

    }

    catch{

        console.error("This Resource cant be Fetched")

    }


}
