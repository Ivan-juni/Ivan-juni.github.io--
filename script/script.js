
let btn = document.querySelector('.navbar-toggler');
let changed = document.querySelector('.wrapper__caption');


console.log(window.innerWidth);

btn.onclick = () => changed.style.display = (changed.style.display == "none") ? "flex" : "none";