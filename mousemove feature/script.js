let elem = document.querySelectorAll('.elem');
// let elemImage = document.querySelector('#elem1 img');

elem.forEach(function(val){
//  console.log(val.childNodes[3]);
 val.addEventListener('mouseenter', ()=>{
   val.childNodes[3].style.opacity = 1;
 })
 val.addEventListener('mouseleave', ()=>{
   val.childNodes[3].style.opacity = 0;
 })
 val.addEventListener('mousemove', (dets)=>{
    val.childNodes[3].style.left = dets.x+"px";
    val.childNodes[3].style.top = dets.y+"px";
 })
})

// elem1.addEventListener("mousemove",(dets)=>{
//   elemImage.style.left = dets.x+'px';
//   elemImage.style.top = dets.y+'px';
// })

// elem1.addEventListener("mouseenter",(dets)=>{
//   elemImage.style.opacity = 1;
// })

// elem1.addEventListener("mouseleave",(dets)=>{
//   elemImage.style.opacity = 0;
// })