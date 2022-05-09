let divImage = document.querySelectorAll(".container div");
let parg = document.querySelectorAll("p");
let oneP = document.querySelector("p");


divImage.forEach(function (ele) {
    ele.onclick = function () {
        divImage.forEach( function (ele) {
            ele.classList.remove('active');
        });
        parg.forEach(function (p) {
            p.classList.remove('visible');
        })
        this.classList.add('active');
        this.firstElementChild.classList.add('visible');
        
    }
})