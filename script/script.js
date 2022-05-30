let btn = document.querySelector('.navbar-toggler');
let changed = document.querySelector('.wrapper__caption');


console.log(window.innerWidth);

btn.onclick = () => changed.style.display = (changed.style.display == "none") ? "flex" : "none";

// btn.onclick = () => document.body.classList.toggle('_lock'); // для блокирования скролла при открытом меню

btn.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock'); // для блокирования скролла при открытом меню
})


// input.addEventListener("click", function (e) {
//     sel.classList.toggle('disabled');
// })

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

// $(document).ready(function () {
// });



