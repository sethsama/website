document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed(".autoType", {
        strings: [" Seth here", " សិដ្ធ here", " セス here"],
        typeSpeed: 150,    // typing speed per character
        backSpeed: 150,     // deleting speed per character
        backDelay: 3000,   // pause before deleting
        loop: true
    });
});
const numStars = 20;
const colors = ['#ffffff'];

for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.style.position = 'absolute';
  star.style.top = `${Math.random() * window.innerHeight}px`;
  star.style.left = `${Math.random() * window.innerWidth}px`;
  star.style.width = '2px';
  star.style.height = '100px';
  star.style.background = colors[Math.floor(Math.random() * colors.length)];
  star.style.animation = `shoot ${Math.random() * 2 + 1.5}s linear infinite`;

  document.body.appendChild(star);
}

const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const modal = document.getElementById("modal");

openBtn.addEventListener("click", () => {
  modal.classList.add("open");
  modal.classList.remove("closing");
})
closeBtn.addEventListener("click", () => {
  modal.classList.add("closing")
  modal.classList.remove("open");

   modal.addEventListener("transitionend", function handler() {
    modal.classList.remove("closing"); // reset
    modal.removeEventListener("transitionend", handler);
  });
});
modal.addEventListener("mousedown", function(e) {
  if (getComputedStyle(e.target).cursor === "text") return; // stop if over text

  let offsetX = e.clientX - modal.offsetLeft;
  let offsetY = e.clientY - modal.offsetTop;

  function mouseMove(e) {
    modal.style.left = (e.clientX - offsetX) + "px";
    modal.style.top = (e.clientY - offsetY) + "px";
  }

  function mouseUp() {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  }

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);
});

const openBtn2 = document.getElementById("openBtn2");
const closeBtn2 = document.getElementById("closeBtn2");
const modal2 = document.getElementById("modal2");

openBtn2.addEventListener("click", () => {
  modal2.classList.add("open");
  modal2.classList.remove("closing");
})
closeBtn2.addEventListener("click", () => {
  modal2.classList.add("closing")
  modal2.classList.remove("open");

  modal2.addEventListener("transitionend", function handler() {
    modal2.classList.remove("closing"); // reset
    modal2.removeEventListener("transitionend", handler);
  });
});

modal2.addEventListener("mousedown", function(e) {
  if (getComputedStyle(e.target).cursor === "text") return; // stop if over text

  let offsetX = e.clientX - modal2.offsetLeft;
  let offsetY = e.clientY - modal2.offsetTop;

  function mouseMove(e) {
    modal2.style.left = (e.clientX - offsetX) + "px";
    modal2.style.top = (e.clientY - offsetY) + "px";
  }

  function mouseUp() {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  }

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);
});

const openBtn3 = document.getElementById("openBtn3");
const closeBtn3 = document.getElementById("closeBtn3");
const modal3 = document.getElementById("modal3");

openBtn3.addEventListener("click", () => {
  modal3.classList.add("open");
  modal3.classList.remove("closing");
})
closeBtn3.addEventListener("click", () => {
  modal3.classList.add("closing")
  modal3.classList.remove("open");
  noBtn.style.top = 25 + "%";
  noBtn.style.right = 30 + "%";

  modal3.addEventListener("transitionend", function handler() {
    modal3.classList.remove("closing"); // reset
    modal3.removeEventListener("transitionend", handler);
  });
});

modal3.addEventListener("mousedown", function(e) {
  if (getComputedStyle(e.target).cursor === "text") return; // stop if over text

  let offsetX = e.clientX - modal3.offsetLeft;
  let offsetY = e.clientY - modal3.offsetTop;

  function mouseMove(e) {
    modal3.style.left = (e.clientX - offsetX) + "px";
    modal3.style.top = (e.clientY - offsetY) + "px";
  }

  function mouseUp() {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  }

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);
});

const noBtn = document.getElementById("noBtn");

function runBtn(){
  const parent = document.getElementById("modal3")
  const MaxX = parent.offsetWidth - noBtn.offsetWidth;
  const MaxY = parent.offsetHeight- noBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * MaxX);
  const randomY = Math.floor(Math.random() * MaxY);

  noBtn.style.top = randomY + "px"
  noBtn.style.right = randomX + "px"

  console.log(MaxX)
}
noBtn.addEventListener("mouseenter", runBtn)

const yesBtn = document.getElementById("yesBtn");
const snoop = document.getElementById("snoopy");
let liked = false;
function blueBtn(){
  if(liked === false){
    yesBtn.classList.add("liked");
    snoop.classList.add("show");
    liked = true;
  }else{
    yesBtn.classList.remove("liked");
    snoop.classList.remove("show");
    liked = false;
  }}
yesBtn.addEventListener("click", blueBtn)

const theMoon = document.getElementById("theMoon");
let moonyellow = false;
function yellowfy() {
  if (moonyellow === false) {       // proper comparison
    theMoon.classList.add("yellow"); // add the class
    moonyellow = true;               // update the variable
  }else{
    theMoon.classList.remove("yellow")
    moonyellow = false;
  }
}
theMoon.addEventListener("click", yellowfy)


