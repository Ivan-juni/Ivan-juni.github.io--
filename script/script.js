// ? бургер - меню

let btn = document.querySelector('.navbar-toggler');
let changed = document.querySelector('.wrapper__caption');

// console.log(window.innerWidth);

// btn.onclick = () => changed.style.display = (changed.style.display == "none") ? "flex" : "none";



// btn.addEventListener("click", function (e) {
//     document.body.classList.toggle('_lock'); // для блокирования скролла при открытом меню
// })

// ?

//! Функции для взаимодействия с формой 

function toggleButton() {
    let username = document.getElementById('firstname').value;
    let email = document.getElementById('email').value;

    if (username && email) {
        document.getElementById('submitButton').disabled = false;
        document.getElementById('submitButton').classList.remove('disabled');
    } else {
        document.getElementById('submitButton').disabled = true;
        document.getElementById('submitButton').classList.add('disabled');
    }
}

function toggleInputOther() {
    const inp = document.querySelector('.input__other');
    const sel = document.getElementById("form__select");

    if (inp.value !== '') {
        sel.classList.add('disabled');
        sel.disabled = true;
    } else {
        sel.classList.remove('disabled');
        sel.disabled = false;
    }
}
// !

// * Vue *


var app = new Vue({
    el: "#app",
    data: {
        products: [
            { id: 1, title: "TAG 1000 (TAG 853)", short_text: "Lemon Determinate Yellow Standard Round", image: 'lemons-1.jpg', desc: "Full desc" },
            { id: 2, title: "TAG 1001 (TAG 855)", short_text: "Lemon Determinate Yellow Standard Round", image: 'lemons-2.jpeg', desc: "Full desc" },
            { id: 3, title: "TAG 1002 (TAG 809)", short_text: "Lemon Determinate Yellow Standard Round", image: 'lemons-3.jpeg', desc: "Full desc" },
            { id: 4, title: "TAG 1003 (TAG 834)", short_text: "Lemon Determinate Yellow Standard Round", image: 'lemons-4.jpeg', desc: "Full desc" },
            { id: 5, title: "TAG 1004 (TAG 848)", short_text: "Lemon Determinate Yellow Standard Round", image: 'lemons-5.jpg', desc: "Full desc" },
        ]
    },
})

// *     *



