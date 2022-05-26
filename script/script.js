
let btn = document.querySelector('.navbar-toggler');
let changed = document.querySelector('.wrapper__caption');


console.log(window.innerWidth);

btn.onclick = () => changed.style.display = (changed.style.display == "none") ? "flex" : "none";

// btn.onclick = () => document.body.classList.toggle('_lock'); // для блокирования скролла при открытом меню

btn.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock'); // для блокирования скролла при открытом меню
})
