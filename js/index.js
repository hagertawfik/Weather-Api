let itemDay = document.querySelector('#item-day')
let itemMonth = document.querySelector('#item-month')
let itemNextDay = document.querySelector('#item-nextDay')
let itemnextNextDay = document.querySelector('#item-nextNextDay')
let myInput = document.querySelector('#myInput')
let monthsArray =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October','November','December']
let daysArray =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

async function searchforcountry(country){
    
let myresponse = await fetch (`https://api.weatherapi.com/v1/forecast.json?key=b7a95557a39f495f9da12349212609&q=${country}&days=3`);
let mydata = await myresponse.json();
// console.log(mydata);
displayCurrentData(mydata.location,mydata.current)
displaynextData(mydata.forecast.forecastday)
displaynextNextData(mydata.forecast.forecastday)
}

myInput.addEventListener("keyup",function(){
 searchforcountry(this.value) 
});

searchforcountry('london')
function displayCurrentData(location,currenttemp){
let date = new Date();
let temp = `<div class="item item1">
    <div class="item-nav-content d-flex justify-content-between align-items-center">
        <div id="item-day">
        ${daysArray[date.getDay()]}
        </div>
        <div id="item-month">
        ${date.getDate()+monthsArray[date.getMonth()]}
        </div>
    </div>
    <div class="item-body ">
        <div id="loction" >
        ${location.name}
        </div>
        <div class="temprature-body d-flex justify-content-between align-items-center">

            <div id="temprture" class="text-white ">
            ${currenttemp.temp_c}<sup>o</sup>C
            </div>
            <div id="temprture-img">
           
                <img  src="https:${currenttemp.condition.icon}" width="90px"  alt="">
            </div>
        </div>
        <div id="description" >${currenttemp.condition.text}</div>
        <span class="precentage "><img src="images/icon-umberella.png" alt="" >20%</span>
        <span class="precentage "><img src="images/icon-wind.png" alt="" >18km/h</span>
        <span class="precentage "><img src="images/icon-compass.png" alt="" >East</span>
      
    </div>
   
</div>`;

            document.getElementById("wither1").innerHTML=temp

}
function displaynextData(x){
let temp ="";
for (let index = 1; index < x.length-1; index++) {
   temp+=`     
   <div class="item item2 text-center" >
       <div class="item-nav-content">
           <div id="item-nextDay" class="text-center">
           ${daysArray[new Date(x[index].date).getDay()]}
           </div>
          
       </div>
       <div class="item-body ">
           <div id="nextDayImg" >
               <img src="https:${x[index].day.condition.icon}" alt="">
           </div>
               <div id="HighnextDaytemprture" class="text-white ">
               ${x[index].day.maxtemp_c}<sup>o</sup>C
               </div>
               <div id="LownextDaytemprture">
              ${x[index].day.mintemp_c}<sup>o</sup> 
               </div>
        
           <div id="description" >${x[index].day.condition.text}</div>

         
       </div>
      
   </div>
               `
               document.getElementById("wither2").innerHTML = temp
   
}
}
function displaynextNextData(x){
let temp ="";
for (let index = 2; index < x.length; index++) {
   temp+=` <div class="item item2 item3 text-center " >
   <div class="item-nav-content ">
       <div id="item-nextNextDay">
       ${daysArray[new Date(x[index].date.replace(" ","T")).getDay()]}
       </div>
   </div>
   <div class="item-body ">
       <div id="nextNextDayImg" >
           <img src="https:${x[index].day.condition.icon}" alt="">
       </div>
           <div id="HighnextNextDaytemprture" class="text-white ">
           ${x[index].day.maxtemp_c}<sup>o</sup>C
           </div>
           <div id="LownextNextDaytemprture">
           ${x[index].day.mintemp_c}<sup>o</sup> 
           </div>
 
       <div id="description" >${x[index].day.condition.text}</div>
     
   </div>
  
</div>  `
               document.getElementById("wither3").innerHTML = temp
   
}
}

