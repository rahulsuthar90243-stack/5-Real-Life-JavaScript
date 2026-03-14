let com = document.querySelector("#container");
let icon = document.querySelector("i");

com.addEventListener("dblclick", ()=>{
    icon.style.transform = 'translate(-50%, -50%) scale(1)';
    icon.style.opacity = 0.8;
    icon.style.color = "#ec6262";
    console.log("hello");

    setTimeout(function(){
    icon.style.opacity = 0;
    },1000)

    setTimeout(function(){
        icon.style.transform = 'translate(-50%, -50%) scale(0)';
    },2000);
})