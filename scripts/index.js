// Store the wallet amount to your local storage with key "amount"
let wallet1=JSON.parse(localStorage.getItem("amount"))||[];
   



 function addwallet(){
   
 

   document.querySelector("#wallet").innerHTML=null;
    
  let wallet=document.getElementById("amount").value;
 // let newwallet= wallet+; 
 


 // let moneywallet=addmoney+wallet;

 document.querySelector("#add_to_wallet").addEventListener("click",function (){
 
  addmoneywallet(wallet);

 })


 function addmoneywallet(wallet){
wallet=+(wallet)
   localStorage.setItem("amount",JSON.stringify(wallet));
 }
 document.querySelector("#wallet").append(wallet);
 }
