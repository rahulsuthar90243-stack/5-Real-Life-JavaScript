// let istatus = document.querySelector("")
let istatus = document.querySelector("h5");
let addBtn = document.querySelector("#add");

let detail = document.querySelector("#detail");

// only one button friend add and remove
// let removeBtn = document.querySelector("#remove");

// removeBtn.addEventListener("click", ()=>{
//     alert("remove friend!");
//     istatus.style.color = "red";
//     detail.innerHTML =" "
// })

// addBtn.addEventListener("click", ()=>{
//     alert("Add Friend!");
//     istatus.style.color = "green";
//      detail.innerHTML = `<a href="https://www.linkedin.com/in/rahul-suthar-41364330a/">linkedin</a>
//                          <a href="">Instagram</a>
//                          <a href="https://github.com/rahulsuthar90243-stack">GitHub</a>`
// })

let flag = 0;
addBtn.addEventListener("click", () => {
  if (flag == 0) {
    alert("Add Friend!");
    istatus.style.color = "green";
    detail.innerHTML = `<a href="https://www.linkedin.com/in/rahul-suthar-41364330a/">linkedin</a>
                            <a href="">Instagram</a>
                            <a href="https://github.com/rahulsuthar90243-stack">GitHub</a>`;
    addBtn.innerHTML = "Remove Friend"
    addBtn.style.backgroundColor = "red";
    flag = 1;                        
  } else {
    alert("remove friend!");
    istatus.style.color = "red";
    detail.innerHTML =" "
    addBtn.innerHTML = "Add Friend";
    addBtn.style.backgroundColor = "#99b3e7";

    flag = 0;
  }
});
