let loc = document.getElementById('loca');
let icon = document.getElementById('temp-icon');
let descr = document.getElementById('temp-descr');
let temp = document.getElementById('temp-value');

const searchInput=document.getElementById("search-input");
const searchButton=document.getElementById("search-button");

searchButton.addEventListener('click', (e)=>
{

e.preventDefault();
getWeather(searchInput.value);
searchInput.value='';


});



const getWeather=async (city)=>
{
    try{

        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=42b7a289d1977cb059f802c1fd04c7d8`,

            {mode: 'cors'}
        );

        const weatherData= await response.json();
        console.log(weatherData);
        const{name}=weatherData;
        const{feels_like}=weatherData.main;
        const{id,main}=weatherData.weather[0];
        loc.textContent=name;
        descr.textContent=main;
        temp.textContent=Math.round(feels_like-273);
        if(id<300 && id>200)
        {
            icon.src="storm.png"
        }
       else  if(id<400 && id>300)
        {
            icon.src="cloudy.png"
        }
       else if(id<600 && id>500)
        {
            icon.src="rain.png"
        }
       else  if(id<700 && id>600)
        {
            icon.src="cold.png"
        }
       else  if(id<800 && id>700)
        {
            icon.src="mist.png"
        }
         else if(id==800)
        {
            icon.src="sun.png"
        }




    }
catch(error)
{
    alert('city not found');
}





};










// we are fetching weather using geographic coords ie latitude and longitude(if user allows location access) and by city name also
window.addEventListener("load" ,()=>{

let long;
let lat;

if(navigator.geolocation)
{

    navigator.geolocation.getCurrentPosition((position)=>
    {



    long=position.coords.longitude;
    lat=position.coords.latitude;
    const proxy="https://cors-anywhere.herokuapp.com/";

        const api=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=42b7a289d1977cb059f802c1fd04c7d8`

        fetch(api).then((response)=>{

            return response.json();


        })

        .then (data =>
            {

                    const{name}=data;
                    const{feels_like}=data.main;
                    const{id,main}=data.weather[0];


                    loc.textContent=name;
                    descr.textContent=main;
                    temp.textContent=Math.round(feels_like-273);
                    if(id<300 && id>200)
                    {
                        icon.src="storm.png"
                    }
                   else  if(id<400 && id>300)
                    {
                        icon.src="cloudy.png"
                    }
                   else if(id<600&& id>500)
                    {
                        icon.src="rain.png"
                    }
                   else  if(id<700 && id>600)
                    {
                        icon.src="cold.png"
                    }
                   else  if(id<800 && id>700)
                    {
                        icon.src="mist.png"
                    }
                     else if(id==800)
                    {
                        icon.src="sun.png"
                    }





                    console.log(data);


            })



}



    )}


})
