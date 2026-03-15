let storys = [
  {
    dp: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    story: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    dp: "https://images.unsplash.com/photo-1773240306707-2a07fc569fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
    story: "https://images.unsplash.com/photo-1773240307047-8412fcf1d866?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D",
  },
   {
    dp: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    story: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
    {
    dp: "https://images.unsplash.com/photo-1613323593608-abc90fec84ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    story: "https://images.unsplash.com/photo-1613322800337-581785ea9f33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  },
    {
    dp: "https://plus.unsplash.com/premium_photo-1698405202949-1313de4a437d?q=80&w=820&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story: "https://plus.unsplash.com/premium_photo-1736900468357-13dc6acdba01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  },
];

let storiyan = document.querySelector("#storiya")

let current = "";

storys.forEach((val, index) => {
  current += `
    <div class="story">
      <img id="${index}" src="${val.dp}" alt="">
    </div>`;
});

storiyan.innerHTML = current;

storiyan.addEventListener("click", (dets)=>{
 document.querySelector("#full-screen").style.display = "block";
 document.querySelector("#full-screen").style.backgroundImage = `url(${storys[dets.target.id].story})`

 setTimeout(function(){
    document.querySelector("#full-screen").style.display = "none";
 }, 2000)
})