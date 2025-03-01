//let p = document.querySelectorAll('.janr>p');

//p.addEventListener('click',() => {p.classList.toggle('s_1_active');})

let fast_button = document.getElementById("fast");
let popup = document.getElementById("popup");
let close_button = document.getElementById("close");

fast_button.addEventListener("click", () =>{
    popup.classList.toggle("show");
})
close_button.addEventListener("click", () =>{
    popup.classList.toggle("show");
})