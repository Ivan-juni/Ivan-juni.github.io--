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
        ],
        product: [],
        cart: [],
        contactFields: [],
        btnVisible: 0,
        fieldsVisible: 0,
    },
    methods: {
        getProduct: function () {
            if (window.location.hash) {
                var id = window.location.hash.replace('#', '');
                if (this.products && this.products.length > 0) {
                    for (i in this.products) {
                        if (this.products[i] && this.products[i].id && id == this.products[i].id) {
                            this.product = this.products[i];
                        }
                    }
                }
            }
        },
        addToCart: function (id) {
            var cart = [];
            if (window.localStorage.getItem('cart')) {
                cart = window.localStorage.getItem('cart').split(',');
            }
            if (cart.indexOf(String(id)) == -1) {
                cart.push(id);
                window.localStorage.setItem('cart', cart.join());
                setTimeout(() => this.btnVisible = 1, 100);
            };
        },
        removeFromCart: function (id) {

            let cart = [];
            item = id.toString();

            if (window.localStorage.getItem('cart')) {
                cart = window.localStorage.getItem('cart').split(',');
            }
            console.log('cart: ' + cart);
            console.log("ID: " + id);
            console.log("ITEM: " + item);
            console.log("cart length: " + cart.length);
            cart.sort(function (a, b) {
                return a - b;
            });

            let index = cart.indexOf(item);
            // console.log("index: " + index);

            cart.splice(index, 1);
            this.cart.splice(index, 1);

            // if (cart.length == 1) {
            //     cart = [];
            //     this.cart = [];
            // }
            // else {
            //     for (i in this.cart) {
            //         if (this.cart[i] == id) {
            //             this.cart.splice(id, 1);
            //         }
            //     }
            //     for (i in cart) {
            //         if (cart[i] == item) {
            //             cart.splice(item, 1);
            //         }
            //     }
            //     console.log("ID in If: " + id);
            //     console.log("typeOfCart: " + typeof (cart));
            //     console.log("typeOfThisCart: " + typeof (this.cart));
            //     // this.cart.splice(id, 1);
            //     // cart.splice(item, 1);
            //     // delete cart.id;
            //     // delete this.cart.id;
            // }
            // }
            // if (cart.indexOf(String(id)) == -1) {
            // for (let index = 0; index < cart.length; index++) {
            //     const element = cart[index];
            //     // temp = cart.indexOf(id);
            //     console.log("ID:" + id);
            //     if (element == id) {
            //         console.log("ID:" + id);
            //         cart.splice(index, 1);
            //         this.cart.splice(index, 1); // тут нужно удалить элемент, у которого айди(не в массиве "корзина") равен приходящему
            //     }
            // }

            window.localStorage.setItem('cart', cart.join());

            // cart.includes(id.toString())
            // console.log('ID:' + id);
            // }
            // if (this.cart.indexOf(String(id)) == -1) {
            //     item = window.localStorage.getItem('cart');
            //     if (item.includes(id)) {
            //         this.cart.splice(id, 1);
            //         // for (i = 0; i < window.localStorage.length; i++) {
            //         //     var myKey = window.localStorage.key(i);
            //         //     myKey.slice(id);
            //         for (i in item) {
            //             // console.log('myKey');
            //             // console.log(myKey);
            //             if (item.includes(id)) {
            //                 window.localStorage.removeItem(id);
            //             }
            //         }
            //     }
            //     // window.localStorage.removeItem('cart'); // весь
            //     // [id].forEach((item) => localStorage.removeItem(item));
            // }
            // console.log('REMOVE_CLICK');
            // console.log('this.cart');
            // console.log(this.cart);
            // console.log('local storage');
            // console.log(window.localStorage);
        },
        getCart: function () {

            item = window.localStorage.getItem('cart');

            for (i in this.products) {
                if (item != null && item.includes(this.products[i].id)) {
                    this.cart.push(this.products[i]);
                }
            }

            // console.log("id");
            // console.log(id);
            // console.log('getcart');
            // console.log('this.products');
            // console.log(this.products);
            // console.log('this.cart');
            // console.log(this.cart);
            // console.log('local storage');
            // console.log(window.localStorage);
            return this.cart;
        },
        checkInCart: function () {
            if (this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id)) != -1) {
                this.btnVisible = 1;
            }
        },
        makeOrder: function () {
            if (this.cart.length > 0 && window.localStorage.length > 0) {
                this.fieldsVisible = 1;
                this.cart.splice(0, this.cart.length);
                window.localStorage.clear();
                document.getElementById("form").reset();
            } else {
                alert("Add at least one product in the cart");
            }
        }
    },
    mounted: function () {
        this.getProduct();
        this.checkInCart();
        this.getCart();
    }
})

// *     *



