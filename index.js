var random1=Math.floor(Math.random()*6)+1;
var r="./dice"+random1+".png";
var set=document.querySelectorAll('img')[0]
set.setAttribute('src',r);
var random2=Math.floor(Math.random()*6)+1;
var r2="./dice"+random2+".png";
var set2=document.querySelectorAll("img")[1]
set2.setAttribute("src",r2);
if(random1>random2){
    document.querySelector("h1").innerHTML="Player 1 Wins ";
}
else if(random2>random1){
    document.querySelector("h1").innerHTML="Player 2 Wins ";
}
else{
    document.querySelector("h1").innerHTML='Draw';
}
