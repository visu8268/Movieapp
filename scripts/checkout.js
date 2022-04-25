// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time




   
let arrmovie=JSON.parse(localStorage.getItem("movie")) || [];
   
arrmovie.map(function(el){

  
 let header=document.createElement("h2");

 header.innerText=el.Title;

 let image=document.createElement("div");
 let img=document.createElement("img");
 img.src=el.Poster;
 image.append(img);

 
 document.getElementById("movie").append(header,image);

})