navigator.geolocation.getCurrentPosition((position)=>{
    document.body.innerText=position.coords.latitude+" "+position.coords.longitude;
},
(error)=>{
console.log("error occured",error)
document.write("error occured")
})