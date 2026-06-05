const targetDate =
new Date("August 25, 2026 17:00:00").getTime();

setInterval(() => {

const now = new Date().getTime();

const distance = targetDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));

const hours = Math.floor(
(distance % (1000 * 60 * 60 * 24))
/
(1000 * 60 * 60)
);

const minutes = Math.floor(
(distance % (1000 * 60 * 60))
/
(1000 * 60)
);

const seconds = Math.floor(
(distance % (1000 * 60))
/
1000
);

document.getElementById("days").innerText = days;
document.getElementById("hours").innerText = hours;
document.getElementById("minutes").innerText = minutes;
document.getElementById("seconds").innerText = seconds;

},1000);

document.getElementById("btnAbrir")
.addEventListener("click", function(){

    const musica =
        document.getElementById("musica");

    musica.play();

});

/* PETALOS */

const flores = [
    /*"🌸",*/
    "🌷",
    "🌺",
    /*"💮",*/
    "🌹"
];

function crearPetalo(){

    const petalo = document.createElement("div");

    petalo.classList.add("petal");

    petalo.innerHTML =
        flores[Math.floor(Math.random() * flores.length)];

    petalo.style.left =
        Math.random() * window.innerWidth + "px";

    petalo.style.fontSize =
        (18 + Math.random() * 22) + "px";

    petalo.style.animationDuration =
        (6 + Math.random() * 6) + "s";

    document.body.appendChild(petalo);

    setTimeout(() => {
        petalo.remove();
    },12000);
}

setInterval(crearPetalo,800);

for(let i=0;i<25;i++){

    setTimeout(() => {

        crearPetalo();

    }, i * 120);
}