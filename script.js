{`const koi = document.getElementById("koi");

document.addEventListener("mousemove", (e) => {

  const x = (e.clientX / window.innerWidth - 0.5) * 12;
  const y = (e.clientY / window.innerHeight - 0.5) * 12;

  koi.style.transform = \`
    translate(-50%, -50%)
    rotate(${-8 + x * 0.15}deg)
    translate(${x}px, ${y}px)
  \`;

});`}
