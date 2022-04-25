// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

//`http://www.omdbapi.com/?i=tt3896198&apikey=f83216a9&t=rrr






let moviearr=JSON.parse(localStorage.getItem("movie")) || [];




function getmovie(){
  let movie=document.getElementById("search").value;
    
  const url=`http://www.omdbapi.com/?i=tt3896198&apikey=f83216a9&t=${movie}`;

fetch(url)
.then(function (res){
return res.json();
}).then(function (res){

dataappend(res);

}).catch(function (err){
console.log(err);

})

}

function dataappend(data){
 console.log("hello")
let box=document.createElement("div");

let imagebox=document.createElement("div");
imagebox.setAttribute("id","image");

let image=document.createElement("img");
image.src=`${data.Poster}`
image.alt="Movie image";
imagebox.append(image);

let nametitle=document.createElement("p");
  nametitle.innerText=`${data.Title}`;

let btn=document.createElement("button");
btn.innerText="Book Now";

btn.addEventListener("click",function (){
  
 moviedata(data);

})


box.append(imagebox,nametitle,btn);
document.getElementById("movies").append(box);

function moviedata(data){

moviearr.push(data);
localStorage.setItem("movie",JSON.stringify(moviearr));

window.location.href="checkout.html";

}



}
