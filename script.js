// Create Elements
let mainDiv = document.createElement('div');
let allDiv = document.createElement('div');
let myP = document.createElement('p');

// Create Array Text Node
const txt = [
'Explore The World', 
'Wild Forest', 
'Sunny Beach', 
'City on Winter', 
'Mountains - Clouds'
];

// Append Childes
document.body.appendChild(mainDiv);

for (let i = 0; i < 5; i++) {
    myP.innerHTML = txt[i];
    allDiv.appendChild(myP);
    mainDiv.appendChild(allDiv.cloneNode(true)) * i;    
};


// Set attributes
let firstDiv = document.querySelectorAll('div')[0];
firstDiv.setAttribute('class', 'container');

let firstDivChild = document.querySelectorAll('.container div')[0];
firstDivChild.setAttribute('class', 'active');

let firstP = document.querySelectorAll('p')[0];
firstP.setAttribute('class', 'visible   ');

// Create variables
let divImage = document.querySelectorAll(".container div");
let parg = document.querySelectorAll("p");
let oneP = document.querySelector("p");

divImage.forEach(ele => {
    ele.onclick = function () {
        divImage.forEach(ele => {
            ele.classList.remove('active');
        });
        parg.forEach(p => {
            p.classList.remove('visible');
        })
        this.classList.add('active');
        this.firstElementChild.classList.add('visible');  
    }
})