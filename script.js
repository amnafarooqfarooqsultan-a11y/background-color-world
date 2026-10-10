let bgColor = "light";
let body = document.querySelector("body")

let head1 = document.querySelector("h1");
console.dir(head1);

let head2 = document.querySelector("h4");
console.dir(head2);

let btn =document.querySelector("#bgMode");
console.dir(btn);
btn.addEventListener("click",() => {
if(bgColor === "light"){
  bgColor = "color1";
  body.classList.add("color1") ;  
  body.classList.remove("light"); 

} else if(bgColor === "color1"){
         bgColor = "color2";
          body.classList.add("color2") ;  
         body.classList.remove("color1"); 
}
else if(bgColor === "color2"){
         bgColor = "color3";
          body.classList.add("color3") ;  
         body.classList.remove("color2"); 
}
else if(bgColor === "color3"){
         bgColor = "color4";
          body.classList.add("color4") ;  
         body.classList.remove("color3"); 
}
else if(bgColor === "color4"){
         bgColor = "color5";
          body.classList.add("color5") ;  
         body.classList.remove("color4"); 
}
else if(bgColor === "color5"){
         bgColor = "color6";
          body.classList.add("color6") ;  
         body.classList.remove("color5"); 
}
else if(bgColor === "color6"){
         bgColor = "color7";
          body.classList.add("color7") ;  
         body.classList.remove("color6"); 
}
else if(bgColor === "color7"){
         bgColor = "color8";
          body.classList.add("color8") ;  
         body.classList.remove("color7"); 
}
else if(bgColor === "color8"){
         bgColor = "color9";
          body.classList.add("color9") ;  
         body.classList.remove("color8"); 
}
else if(bgColor === "color9"){
         bgColor = "color10";
          body.classList.add("color10") ;  
         body.classList.remove("color9"); 
}
else if(bgColor === "color10"){
         bgColor = "color11";
          body.classList.add("color11") ;  
         body.classList.remove("color10"); 
}
else if(bgColor === "color11"){
         bgColor = "color12";
          body.classList.add("color12") ;  
         body.classList.remove("color11"); 
}
else if(bgColor === "color12"){
         bgColor = "color13";
          body.classList.add("color13") ;  
         body.classList.remove("color12"); 
}
else if(bgColor === "color13"){
         bgColor = "color14";
          body.classList.add("color14") ;  
         body.classList.remove("color13"); 
}
else if(bgColor === "color14"){
         bgColor = "color15";
          body.classList.add("color15") ;  
         body.classList.remove("color14"); 
}
else if(bgColor === "color15"){
         bgColor = "black";
          body.classList.add("black") ;  
         body.classList.remove("color15"); 
}
else{
    bgColor = "light";
    body.classList.add("white")
    body.classList.remove("black")
}
console.log(bgColor)
})