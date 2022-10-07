const characters =["A","B", "C","D","E","F","G","H","I", "J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","@","#","$","_","&","-","+",")","(","/","*","!",",","?","[","}","%",

]
let passlength =13
let passONE =document.getElementById("pass1")
let passTWO =document.getElementById("pass2")
function togen() {
function generate() {
let chat= Math.floor(Math.random()*characters.length)
let mhat= Math.floor(Math.random()*characters.length)
return characters[chat]
return characters[mhat]
}
function gen() {
let randomPassword=""
for(i=0;i<passlength;i++){

			randomPassword+=generate()	
}
return randomPassword
}
passONE.textContent=gen()
passTWO.textContent=gen()
}