const sec1 = document.getElementById("sec1");

const section = document.querySelectorAll(".sec");

// for (const section of sections) {
//     section.style.backgroundColor = "red";
//     console.log(section.getAttribute("class"));
//     section.setAttribute("name", "section");
//     console.log(section.getAttribute("name"));
//     if (section.innerText == "1") {
//         section.style.backgroundColor = "blue";
//     }
// }

//..............innerhtml.....................

// const sec = document.getElementById("sec");
// const para = document.getElementById("para")

// // sec.innerHTML += "<b> This is bold</b>";

// //.............outerHTML......................
// console.log(para.outerHTML);
// console.log(sec.outerHTML);

// //..............innerTEXT / textcontent.................
// para.innerText = "This is not a paragraph";
// console.log (para.textcontent);

// //.......................Hidden.................
// para.hidden = true;


//...............................create Element........................

// let bold = document.createElement("b");

// bold.textContent = "I'm bold";

// sec4.appendChild(bold);

const anotherExample =document.querySelector(".anotherExample");

const h2 = document.createElement("h2");

h2. innerText = "I'm big";

anotherExample.appendChild(h2);


//...............Mouse Event ................

// click

const button = document.getElementById("btn");

function changeColor () {
   if (button.innerText === "clicked") {
    anotherExample.style.background = "transparent";
    button.innerText = "Click me";
   } else  {
    anotherExample.style.background = "blue";
    button.innerText = "Clicked!";
   }
}

const like = document.getElementById("like");
const likeCount = document.getElementById("h1")


function clickme() {
   if (like.innerHTML === '<i class="bi bi-hand-thumbs-up-fill"></i>') {
      like.innerHTML = '<i class="bi bi-hand-thumbs-up"></i>';
      likeCount.innerText--;
   } else {
      like.innerHTML = '<i class="bi bi-hand-thumbs-up-fill"></i>';
     likeCount.innerText++;
   }
   console.log(likeCount);
}


// generate random number

function randomNumbers () {
   let random = document.getElementById("random");
   random.innerText = Math.random();
}


// submit input 

function submitText() {
   let input = document.getElementById("Input");
   let bar = document.querySelector(".bar");
   bar.submitText += `${input.value}`;
   bar.innerText +=` ${input.value}` ; // Template String
   input.value = "";
 }



 // Mouseover / Mouseout

 function mouseIn() {
   let bar = document.querySelector(".bar");
   bar.style.background = "red";
   bar.style.padding = "50px";
 }
 

 function mouseOut() {
   let bar = document.querySelector(".bar");
   bar.style.background = "transparent";
   bar.style.padding = "30px";
 }

const buttons = document.querySelector(".button");

buttons.addEventListener("click", function (event) {
   event.preventDefault();
   let name = document.querySelector(".name");
   let email = document.querySelector(".email");
   let bar = document.querySelector(".bar");

   bar.innerHTML = `<h1>Name:${name.value} </h1>
                     <h1>Email:${email.value} </h1>`;

   name.value = "";
   email.value = "";
});