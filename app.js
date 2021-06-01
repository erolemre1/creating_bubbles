


function bubble (){
    const container =document.querySelector(".container");

    const balloon = document.createElement("span");



    

    const height = Math.random()*100;

    balloon.style.width = height +"px";
    balloon.style.height = height +"px";

    balloon.style.left = Math.random()* innerWidth +"px";

 


    container.appendChild(balloon);
    setTimeout (()=> {
        balloon.remove();
    } ,2000);


}



///Set interval devamlı döngü için  normalde functionı buble(); olarak da
// çağırabiliriz ama döngü tek seferlik olur
setInterval(bubble,50);

