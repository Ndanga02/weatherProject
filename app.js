// INSTALL EXPRESS
const express=require('express');
const app=express();

// INSTALL HTTPS
const https=require('https');

// GET

app.get("/", function(req,res){

const address= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=germiston&APPID=a541e86f1d8ca4d60c778daf6cef8223";
    
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