//// Dom Manipulation
//
//
//const first = document.getElementById("first");
//
//first.innerHTML = "Text changed";
//
//
//// 
//const sec = document.getElementsByClassName("sec");
//sec[0].style.color =  "green";
//console.log(sec[0]);
//
//// append div in body
//const body =  document.querySelector("body");
//const div =document.createElement('div')
//div.innerHTML = "This is a new element created by createElement";
//body.appendChild(div);
//
//
//
//// 
const ul = document.querySelector("ul");
// const lis = document.querySelectorAll("li")
//const li = document.createElement('li');
//console.log(ul,li);
//li.innerHTML = "second";
//ul.appendChild(li);
// ul.removeChild(lis[lis.length -1])

//
//
//// remove from dom
//const btn = document.querySelector("button")
//btn.remove(); 
//ul.removeChild(li);
//ul.removeChild(li);
//
//
// const img = document.querySelector('img')
// console.log(img);
// img.setAttribute("src","https://images.pexels.com/photos/10161899/pexels-photo-10161899.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load");


// add
ul.classList.add('active');

// remove
ul.classList.remove('inactive');


const p = document.querySelector('p')
const btn = document.querySelector('.btn')
btn.addEventListener("click",()=>{
    p.innerHTML ="voluptatibus dolores, illo doloribus veritatis harum quidem, nesciunt tempore voluptates illum aspernatur. Provident, cupiditate fugit id eaque minima  consectetur adipisicing elit. Accusamus vero iste ipsum rerum ex animi, expedita incidunt adipisci. "
})

const box = document.querySelector(".boarder")
box.addEventListener("mouseover",()=>{
    box.style.border = "2px solid green";
})