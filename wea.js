let maintemp = document.querySelector(".firstchld #tem")
let mainwin = document.querySelector(".firstchld #win")
let maindis = document.querySelector(".firstchld #dis")
let day1 = document.querySelector(".center .days h3");
let temp1 = document.querySelector(".center .days p");
let wind1 = document.querySelector(".center .days h5");
let day2 = document.querySelector(".center #days1 h3");
let temp2 = document.querySelector(".center  #days1 p");
let wind2 = document.querySelector(".center  #days1 h5");
let day3 = document.querySelector(".center #days2 h3");
let temp3 = document.querySelector(".center #days2 p");
let wind3 = document.querySelector(".center #days2 h5");
let state = document.querySelector(".main .firstchld .nab input")
let searchbtn = document.querySelector(".main .firstchld .nab button")
const mainupdate = (temp,wind,disc)=>{
    maintemp.innerHTML=`Temperature:- ${temp}`;
    mainwin.innerHTML=`Wind:- ${wind}`;
    maindis.innerHTML=`Discription:- ${disc}`;
}
const update1 =(day,temp,wind) =>{
    day1.innerHTML=`DAY:- ${day}`;
    temp1.innerHTML=`TEMP:- ${temp}`;
    wind1.innerHTML=`WIND:- ${wind}`;
}
const update2 =(day,temp,wind) =>{
    day2.innerHTML=`DAY:- ${day}`;
    temp2.innerHTML=`TEMP:- ${temp}`;
    wind2.innerHTML=`WIND:- ${wind}`;
}
const update3 =(day,temp,wind) =>{
    day3.innerHTML=`DAY:- ${day}`;
    temp3.innerHTML=`TEMP:- ${temp}`;
    wind3.innerHTML=`WIND:- ${wind}`;
}
searchbtn.addEventListener("click",()=>{
    fetch(`https://goweather.herokuapp.com/weather/${state.value}`).then((response)=>response.json()).then((value0)=>{
        try {
            mainupdate(value0.temperature,value0.wind,value0.description)
            update1(value0.forecast[0].day,value0.forecast[0].temperature,value0.forecast[0].wind)
            update2(value0.forecast[1].day,value0.forecast[1].temperature,value0.forecast[1].wind)
            update3(value0.forecast[2].day,value0.forecast[2].temperature,value0.forecast[2].wind)
            console.log(value0)
            console.log(value0.forecast[0].day+ " " +value0.forecast[0].temperature +" " + value0.forecast[0].wind )
        } catch (error) {
            console.log(error)
        }
    })
})




