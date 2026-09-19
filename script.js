{`const fish=document.getElementById("fish");

document.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*20;
const y=(e.clientY/window.innerHeight-.5)*12;

fish.style.filter=\`drop-shadow(${x/4}px ${20+y/4}px 40px rgba(0,0,0,.45))\`;

});`}
