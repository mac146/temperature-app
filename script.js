async function finding(){
    const city=document.getElementById("a");
     const cityName=city.value;
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3ed39163b3cedc75ba8e26223bc56ca2&units=metric`)
  const data=await response.json();
   document.getElementById("result").innerHTML= "temperature" + data.main.temp + "°c";
   console.log(data);

}