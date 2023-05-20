
const express=require('express');
const app=express();
require('dotenv').config(); 

const apiKey = process.env.API_KEY;  



const https=require('https');



app.get("/", function(req,res){

const address= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=germiston&APPID=${apiKey}";
    
https.get(address, function(response){
console.log(response.statusCode);
response.on('data',(data)=>{
    const weatherData=JSON.parse(data);
    console.log(weatherData);
    const icon=weatherData.weather[0].icon;
    const imgUrl="https:openweathermpa.org/img/wn/"+icon+"/@2x.png"
    const temp = weatherData.main.temp;
    const descr = weatherData.weather[0].description;
    res.write("<h1>Temperature in Germiston is "+temp+" c°, "+descr+"</h1>")
    res.write("<img src="+imgUrl+">")
    res.send()
})

})

})


// SERVER
app.listen('3000',function(){
    console.log('Server 3000 is running')
});