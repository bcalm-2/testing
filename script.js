console.log("NEW SCRIPT LOADED");
function showSurprise() {

    const gift = document.getElementById("giftBox");

if(gift){
    gift.style.transition = "0.5s";
    gift.style.transform = "scale(0) rotate(360deg)";
}

    document.getElementById("hero").style.display = "none";

    document.getElementById("surprise").style.display = "block";

    document.getElementById("surprise").scrollIntoView({
        behavior: "smooth"
    });

    if (typeof confetti === "function") {
        confetti({
            particleCount: 200,
            spread: 120,
            origin: { y: 0.6 }
        });
    }

    const music = document.getElementById("music");

    music.currentTime = 0.3;

    music.play()
    .then(() => {
        console.log("Music started");
    })
    .catch((err) => {
        console.log(err);
    });
}

let sliderInterval;

function showGallery() {

    document.getElementById("surprise").style.display = "none";
    document.getElementById("gallery").style.display = "block";
    document.getElementById("videoSection").style.display = "block";

    document.getElementById("gallery").scrollIntoView({
        behavior: "smooth"
    });

    if (!sliderInterval) {
        sliderInterval = setInterval(nextPhoto, 3000);
    }
}
const text = "You are the best friend ever ❤️";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    }
}

window.addEventListener("load", function () {
    typeWriter();
});

const photos = [
    "image/photo1.jpg",
    "image/photo2.jpg",
    "image/photo3.jpg",
    "image/photo4.jpg",

    "image/photo5.jpg",
    "image/photo6.jpg",
    "image/photo7.jpg",
    "image/photo8.jpg",

    "image/photo9.jpeg",
    "image/photo10.jpeg"
];
let current = 0;

function nextPhoto() {

    current++;

    if (current >= photos.length) {
        current = 0;
    }
    document.getElementById("slider").style.opacity = "0";
    
    setTimeout(() => {

        document.getElementById("slider").src = photos[current];
        document.getElementById("slider").style.opacity = "1";

    }, 300);

}

function prevPhoto() {

    current--;

    if (current < 0) {
        current = photos.length - 1;
    }

    document.getElementById("slider").style.opacity = "0";

    setTimeout(() => {

        document.getElementById("slider").src = photos[current];
        document.getElementById("slider").style.opacity = "1";

    }, 300);

}
function showLetter(){

    document.getElementById("letterSection").style.display = "block";

    document.getElementById("letterSection").scrollIntoView({
        behavior:"smooth"
    });

  setTimeout(function(){

    const miniGame = document.getElementById('miniGame');
    if (miniGame) {
        miniGame.style.display = 'block';
        miniGame.scrollIntoView({ behavior: 'smooth' });
    }

    setTimeout(() => {
        fireworkShow();
    }, 800);

},1000);
}

let quizAnswered = false;

window.addEventListener('load', function () {
    typeWriter();

    const quizOptions = document.querySelectorAll('.quiz-option');
    const quizResult = document.getElementById('quizResult');

    quizOptions.forEach((button) => {
        button.addEventListener('click', () => {
            const isCorrect = button.dataset.answer === 'correct';
            if (isCorrect) {
                quizResult.style.display = 'block';
                quizResult.textContent = 'Correct! You are my favorite part of every day ❤️';
                quizResult.style.color = '#2e7d32';
                button.style.background = '#2e7d32';
                quizOptions.forEach((opt) => {
                    if (opt !== button) {
                        opt.disabled = true;
                        opt.style.opacity = '0.5';
                    }
                });
            } else {
                quizResult.style.display = 'block';
                quizResult.textContent = 'Not quite... try again 😄';
                quizResult.style.color = '#d94f77';
            }
        });
    });
});
const fireworkDuration = 5000;
const fireworkInterval = 200;

function fireworkShow() {

    if (typeof confetti !== "function") {
        console.log("Confetti library not loaded");
        return;
    }

    for (let i = 0; i < 8; i++) {

        setTimeout(() => {

            confetti({
                particleCount: 150,
                spread: 120,
                startVelocity: 50,
                origin: {
                    x: Math.random(),
                    y: Math.random() * 0.6
                }
            });

        }, i * 500);

    }

}
window.addEventListener("load", function () {

    setTimeout(function () {

        const loader = document.getElementById("loader");

        if (loader) {
            loader.style.opacity = "0";

            setTimeout(function () {
                loader.style.display = "none";
            }, 500);
        }

    }, 2000);

    // START overlay logic
    function showStartOverlay(){
        const overlay = document.getElementById('startOverlay');
        if(overlay) {
            overlay.style.display = 'flex';
            // prevent background scrolling while modal is open
            document.body.style.overflow = 'hidden';
        }
    }

    function hideStartOverlay(){
        const overlay = document.getElementById('startOverlay');
        if(overlay) {
            overlay.style.display = 'none';
            // restore scrolling
            document.body.style.overflow = '';
        }
    }

    let candlesState = [false, false, false];

    function updateCandleText(){
        const remaining = candlesState.filter(v => !v).length;
        const label = document.getElementById('candlesLeft');
        const title = document.getElementById('startTitle');

        if (label) {
            label.textContent = remaining > 0 ? `Blow candles · ${remaining} left` : 'All blown out!';
        }

        if (title) {
            title.textContent = remaining > 0 ? 'Blow all three candles' : 'One last little moment';
        }
    }

    function initStartGame(){
        candlesState = [false, false, false];
        document.querySelectorAll('.candle').forEach((el) => {
            el.classList.remove('blowed');
            el.disabled = false;
            el.addEventListener('click', onCandleClick, { once: true });
        });

        const cakeArea = document.getElementById('cakeArea');
        if (cakeArea) cakeArea.style.display = 'none';

        const cutBtn = document.getElementById('cutCakeBtn');
        if (cutBtn) {
            cutBtn.onclick = () => {
                if (typeof confetti === 'function') {
                    confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 } });
                }
                hideStartOverlay();
                const hero = document.getElementById('hero');
                if (hero) hero.style.display = 'block';
                const surprise = document.getElementById('surprise');
                if (surprise) surprise.style.display = 'none';
                const gallery = document.getElementById('gallery');
                if (gallery) gallery.style.display = 'none';
                const videoSection = document.getElementById('videoSection');
                if (videoSection) videoSection.style.display = 'none';
                const letterSection = document.getElementById('letterSection');
                if (letterSection) letterSection.style.display = 'none';
                const thanksSection = document.getElementById('thanksSection');
                if (thanksSection) thanksSection.style.display = 'none';
                const music = document.getElementById('music');
                if (music) {
                    music.currentTime = 0.3;
                    music.play().catch(()=>{});
                }
                if (typeof confetti === 'function') {
                    setTimeout(() => confetti({ particleCount: 200, spread: 120, origin: { y: 0.6 } }), 200);
                }
            };
        }

        updateCandleText();
    }

    function onCandleClick(e){
        const btn = e.currentTarget;
        const idx = Number(btn.dataset.index);
        if (candlesState[idx]) return;

        candlesState[idx] = true;
        btn.classList.add('blowed');

        const remaining = candlesState.filter(v => !v).length;
        const label = document.getElementById('candlesLeft');
        const title = document.getElementById('startTitle');

        if (label) label.textContent = remaining > 0 ? `Blow each candle · ${remaining} left` : 'All blown out!';
        if (title) title.textContent = remaining > 0 ? 'Blow all three candles' : 'One last little moment';

        if (remaining === 0) {
            const cakeArea = document.getElementById('cakeArea');
            if (cakeArea) cakeArea.style.display = 'block';
            const text = document.getElementById('candlesLeft');
            if (text) text.textContent = 'All blown out!';
            const heading = document.getElementById('startTitle');
            if (heading) heading.textContent = 'One last little moment';
        }
    }

    // show overlay after loader hides, then init handlers
    setTimeout(() => { showStartOverlay(); initStartGame(); }, 2300);
});
document.addEventListener("mousemove", function(e){

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left = e.pageX + "px";
    sparkle.style.top = e.pageY + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 800);

});
setInterval(() => {

    const balloon = document.createElement("div");

    balloon.className = "balloon";

    balloon.innerHTML = "🎈";

    balloon.style.left = Math.random() * window.innerWidth + "px";

    balloon.style.fontSize = (40 + Math.random() * 30) + "px";

    document.body.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 10000);

}, 2500);

