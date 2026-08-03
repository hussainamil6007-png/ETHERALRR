// Force browser to scroll to top on refresh and clear manual history positioning
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
});

window.addEventListener('load', () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 10);
});

/**
 * Ethereal Cosmic Dynamic Engine Interactivity
 */
document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll down indicator anchor focus 
    const exploreTrigger = document.querySelector('.explore-trigger');
    if (exploreTrigger) {
        exploreTrigger.addEventListener('click', () => {
            const targetSection = document.querySelector('.dream');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

// Moon Collection Premium Separate Toggle Handler
function toggleMoonCards() {
    const hiddenCards = document.querySelectorAll('#moonGrid .hidden-card');
    const button = document.getElementById('seeMoreMoon');
    
    const isHidden = hiddenCards[0].style.display === 'none' || hiddenCards[0].style.display === '';

    hiddenCards.forEach((card, index) => {
        if (isHidden) {
            card.style.display = 'flex';
            setTimeout(() => {
                card.classList.add('moon-reveal-active');
            }, index * 100); 
            
            button.querySelector('span').innerText = 'COLLAPSE LUNAR CYCLE';
        } else {
            card.classList.remove('moon-reveal-active');
            card.style.display = 'none';
            
            button.querySelector('span').innerText = 'SEE MORE LUNAR';
            document.getElementById('moonGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

// Cloud Chronicles Premium Separate Toggle Handler
function toggleCloudCards() {
    const hiddenCards = document.querySelectorAll('#cloudGrid .hidden-card');
    const button = document.getElementById('seeMoreCloud');
    
    const isHidden = hiddenCards[0].style.display === 'none' || hiddenCards[0].style.display === '';

    hiddenCards.forEach((card, index) => {
        if (isHidden) {
            card.style.display = 'block';
            setTimeout(() => {
                card.classList.add('cloud-reveal-active');
            }, index * 100); 
            
            button.querySelector('span').innerText = 'COLLAPSE SKY ARCHIVE';
        } else {
            card.classList.remove('cloud-reveal-active');
            card.style.display = 'none';
            
            button.querySelector('span').innerText = 'SEE MORE SKIES';
            document.getElementById('cloudGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

// Mountain Section Separate Toggle Handler
function toggleMountainCards() {
    const hiddenCards = document.querySelectorAll('.mountain-hidden-card');
    const button = document.getElementById('mountainBtn');
    
    const isHidden = hiddenCards[0].style.display === 'none' || hiddenCards[0].style.display === '';

    hiddenCards.forEach((card, index) => {
        if (isHidden) {
            card.style.display = 'block';
            setTimeout(() => {
                card.classList.add('mountain-reveal-active');
            }, index * 120); 
            
            button.querySelector('span').innerText = 'COLLAPSE ALPINE CHRONICLES';
        } else {
            card.classList.remove('mountain-reveal-active');
            card.style.display = 'none';
            
            button.querySelector('span').innerText = 'SEE MORE HEIGHTS';
            document.getElementById('mountainGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

// Forest Section Separate Toggle Handler
function toggleForestCards() {
    const hiddenCards = document.querySelectorAll('.forest-hidden-card');
    const button = document.getElementById('forestBtn');
    
    const isHidden = hiddenCards[0].style.display === 'none' || hiddenCards[0].style.display === '';

    hiddenCards.forEach((card, index) => {
        if (isHidden) {
            card.style.display = 'block';
            setTimeout(() => {
                card.classList.add('forest-reveal-active');
            }, index * 120); 
            
            button.querySelector('span').innerText = 'COLLAPSE WOODLANDS';
        } else {
            card.classList.remove('forest-reveal-active');
            card.style.display = 'none';
            
            button.querySelector('span').innerText = 'EXPLORE DEEPER WOODS';
            document.getElementById('forestGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

// Desert Section Separate Toggle Handler
function toggleDesertCards() {
    const hiddenCards = document.querySelectorAll('.desert-hidden-card');
    const button = document.getElementById('desertBtn');
    
    const isHidden = hiddenCards[0].style.display === 'none' || hiddenCards[0].style.display === '';

    hiddenCards.forEach((card, index) => {
        if (isHidden) {
            card.style.display = 'block';
            setTimeout(() => {
                card.classList.add('desert-reveal-active');
            }, index * 100); 
            
            button.querySelector('span').innerText = 'COLLAPSE DESERT CHRONICLES';
        } else {
            card.classList.remove('desert-reveal-active');
            card.style.display = 'none';
            
            button.querySelector('span').innerText = 'TRAVERSE DEEPER DUNES';
            document.getElementById('desertGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

// Aurora Section Separate Toggle Handler
function toggleAuroraCards() {
    const hiddenCards = document.querySelectorAll('.aurora-hidden-card');
    const button = document.getElementById('auroraBtn');
    
    const isHidden = hiddenCards[0].style.display === 'none' || hiddenCards[0].style.display === '';

    hiddenCards.forEach((card, index) => {
        if (isHidden) {
            card.style.display = 'block';
            setTimeout(() => {
                card.classList.add('reveal-active');
            }, index * 120); 
            
            button.querySelector('span').innerText = 'COLLAPSE SKY CHRONICLES';
        } else {
            card.classList.remove('reveal-active');
            card.style.display = 'none';
            
            button.querySelector('span').innerText = 'SEE MORE EXPLORATION';
            document.getElementById('auroraGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const oceanBtn = document.getElementById("ocean-toggle-btn");
    const oceanExtraContent = document.querySelector(".ocean-extra-content");

    if (oceanBtn && oceanExtraContent) {
        oceanBtn.addEventListener("click", function () {
            // Toggle hidden class
            oceanExtraContent.classList.toggle("hidden");

            // Text change logic
            if (oceanExtraContent.classList.contains("hidden")) {
                oceanBtn.textContent = "SEE MORE";
                
                // Content close hone par screen wapas upar smooth scroll ho jaye
                document.querySelector(".ocean-section").scrollIntoView({ behavior: "smooth" });
            } else {
                oceanBtn.textContent = "SEE LESS";
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const umamaBtn = document.getElementById("umama-toggle-btn");
    const hiddenCards = document.querySelectorAll(".umama-hidden-card");

    if (umamaBtn && hiddenCards.length > 0) {
        umamaBtn.addEventListener("click", function () {
            // Check if cards are currently showing or hidden
            const opening = umamaBtn.textContent === "SEE MORE";

            hiddenCards.forEach(card => {
                if (opening) {
                    card.classList.add("umama-show-card");
                } else {
                    card.classList.remove("umama-show-card");
                }
            });

            // Toggle Text
            if (opening) {
                umamaBtn.textContent = "SEE LESS";
            } else {
                umamaBtn.textContent = "SEE MORE";
                // Smoothly scroll back up to the section header
                document.querySelector(".umama-cosmic-section").scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const skyBtn = document.getElementById("sky-toggle-btn");
    const hiddenSkyCards = document.querySelectorAll(".sky-hidden-card");

    if (skyBtn && hiddenSkyCards.length > 0) {
        skyBtn.addEventListener("click", function () {
            const isOpening = skyBtn.textContent === "OPEN THE DIARY";

            hiddenSkyCards.forEach(card => {
                if (isOpening) {
                    card.classList.add("sky-show-card");
                } else {
                    card.classList.remove("sky-show-card");
                }
            });

            if (isOpening) {
                skyBtn.textContent = "CLOSE THE DIARY";
            } else {
                skyBtn.textContent = "SEE MORE";
                // Smoothly returns scroll back up to center header focus point
                document.querySelector(".umama-sky-section").scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});















document.addEventListener("DOMContentLoaded", function () {
    const amilBtn = document.getElementById("amil-toggle-btn");
    const hiddenAmilCards = document.querySelectorAll(".amil-hidden-card");

    if (amilBtn && hiddenAmilCards.length > 0) {
        amilBtn.addEventListener("click", function () {
            // 3. Condition updated to match new OPEN THE DIARY text
            const isOpening = amilBtn.textContent === "OPEN THE DIARY";

            hiddenAmilCards.forEach(card => {
                if (isOpening) {
                    card.classList.add("amil-show-card");
                } else {
                    card.classList.remove("amil-show-card");
                }
            });

            if (isOpening) {
                // Button text toggled dynamically to CLOSE THE DIARY
                amilBtn.textContent = "CLOSE THE DIARY";
            } else {
                amilBtn.textContent = "OPEN THE DIARY";
                document.querySelector(".amil-sky-section").scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});
















document.addEventListener("DOMContentLoaded", function () {
    const diveBtn = document.getElementById("ocean-dive-btn");
    const abyssContent = document.getElementById("ocean-abyss-expanded-content");
    const oceanSection = document.querySelector(".ocean-section");

    if (diveBtn && abyssContent) {
        diveBtn.addEventListener("click", function () {
            // Toggle active status wrapper class
            const isOpening = !abyssContent.classList.contains("active-abyss");

            if (isOpening) {
                abyssContent.classList.add("active-abyss");
                diveBtn.textContent = "SURFACE BACK UP";
            } else {
                abyssContent.classList.remove("active-abyss");
                diveBtn.textContent = "DIVE MORE TO SEE";
                
                // Smooth scroll up to top of the section when closed
                oceanSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});













document.addEventListener("DOMContentLoaded", function () {
    const rainBtn = document.getElementById("split-rain-trigger");
    const hiddenCards = document.querySelectorAll(".rain-hidden-card");
    const rainRoot = document.getElementById("split-rain-root");

    if (rainBtn && hiddenCards.length > 0 && rainRoot) {
        rainBtn.addEventListener("click", function () {
            const isExpanded = hiddenCards[0].classList.contains("rain-card-reveal");

            hiddenCards.forEach(card => {
                if (!isExpanded) {
                    card.classList.add("rain-card-reveal");
                } else {
                    card.classList.remove("rain-card-reveal");
                }
            });

            if (!isExpanded) {
                // Text updates cleanly to handle close state
                rainBtn.textContent = "CONCEAL THE CORES";
            } else {
                rainBtn.textContent = "EXPLORE THE SHORE";
                
                // Pulls workspace safely back up to header focus anchor points
                rainRoot.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});



















document.addEventListener("DOMContentLoaded", function () {
    const volcanoBtn = document.getElementById("volcano-trigger-btn");
    const volcanoContent = document.getElementById("volcano-expanded-content");
    const volcanoRoot = document.getElementById("volcano-root");

    if (volcanoBtn && volcanoContent && volcanoRoot) {
        volcanoBtn.addEventListener("click", function () {
            const isExpanding = !volcanoContent.classList.contains("active-volcano");

            if (isExpanding) {
                volcanoContent.classList.add("active-volcano");
                volcanoBtn.textContent = "CONCEAL THE FLAMES";
            } else {
                volcanoContent.classList.remove("active-volcano");
                volcanoBtn.textContent = "FEEL THE HEAT";
                
                // Snaps the viewport smoothly back up to section top header
                volcanoRoot.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});


















// ===== Universal Image Lightbox =====

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");


let currentIndex = 0;

const prevBtn = document.querySelector(".lightbox-prev");
const nextBtn = document.querySelector(".lightbox-next");
const counter = document.querySelector(".lightbox-counter");

// Website ki saari images select karo
const allImages = document.querySelectorAll("img");
allImages.forEach((img) => {
    const preload = new Image();
    preload.src = img.src;
});



allImages.forEach((img) => {
    img.style.cursor = "pointer";


    img.addEventListener("click", () => {
        currentIndex = [...allImages].indexOf(img);
       showImage(currentIndex);
       
        document.body.style.overflow = "hidden";
    });
});

// Close button
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
});

lightbox.addEventListener("click", (e) => {
    if (
        e.target === lightbox ||
        e.target === lightboxImg
    ) {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";
    }
});

function showImage(index) {
    currentIndex = (index + allImages.length) % allImages.length;

    lightboxImg.src = allImages[currentIndex].src;
    lightboxImg.alt = allImages[currentIndex].alt || "";
}

nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    showImage(currentIndex + 1);
});

prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    showImage(currentIndex - 1);
});

// ESC key
document.addEventListener("keydown", (e) => {

    if (lightbox.style.display !== "flex") return;

    if (e.key === "Escape") {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";
    }

    if (e.key === "ArrowRight") {
        showImage(currentIndex + 1);
    }

    if (e.key === "ArrowLeft") {
        showImage(currentIndex - 1);
    }

});


function showImage(index) {
    currentIndex = index;

    lightbox.style.display = "flex";
    lightboxImg.src = allImages[currentIndex].src;
    lightboxImg.alt = allImages[currentIndex].alt || "";

    if (counter) {
        counter.textContent = `${currentIndex + 1} / ${allImages.length}`;
    }
}

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        showImage(currentIndex - 1);
    } else {
        showImage(allImages.length - 1);
    }
});

nextBtn.addEventListener("click", () => {
    if (currentIndex < allImages.length - 1) {
        showImage(currentIndex + 1);
    } else {
        showImage(0);
    }
});

/* ==========================
   HERO MUSIC CONTROL
========================== */

const heroAudio = document.getElementById("heroAudio");
const hero = document.querySelector(".hero");

let started = false;
let fadeInterval = null;

// Smooth volume animation
function fadeAudio(target) {

    clearInterval(fadeInterval);

    fadeInterval = setInterval(() => {

        if (Math.abs(heroAudio.volume - target) < 0.02) {
            heroAudio.volume = target;

            if (target === 0) {
                heroAudio.pause();
            }

            clearInterval(fadeInterval);
            return;
        }

        if (heroAudio.volume < target) {
            heroAudio.volume += 0.02;
        } else {
            heroAudio.volume -= 0.02;
        }

    }, 60);

}

// Start music after first interaction
function startHeroMusic() {

    if (started) return;

    started = true;

    heroAudio.volume = 0;

    heroAudio.play().then(() => {

        fadeAudio(0.35);

    }).catch(() => {});

}

document.addEventListener("click", startHeroMusic, { once: true });
document.addEventListener("scroll", startHeroMusic, { once: true });
document.addEventListener("touchstart", startHeroMusic, { once: true });

// Detect Hero visibility
const observer = new IntersectionObserver((entries) => {

    if (!started) return;

    if (entries[0].isIntersecting) {

        if (heroAudio.paused) {
            heroAudio.play().catch(() => {});
        }

        fadeAudio(0.35);

    } else {

        fadeAudio(0);

    }

}, {
    threshold: 0.4
});

observer.observe(hero);










const dream=document.querySelector(".dream");
const dreamVideo=document.querySelector(".dream-video");

dream.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*15;

const y=(e.clientY/window.innerHeight-.5)*15;

gsap.to(dreamVideo,{

x:x,

y:y,

duration:2,

ease:"power3.out"

});

});
const dreamAudio=document.getElementById("dreamAudio");

function startDreamAudio(){

dreamAudio.volume=0.35;

dreamAudio.play().catch(()=>{});

}

document.addEventListener("click",startDreamAudio,{once:true});
document.addEventListener("scroll",startDreamAudio,{once:true});
let aboutFade;

function fadeDream(target){

clearInterval(aboutFade);

aboutFade=setInterval(()=>{

if(Math.abs(dreamAudio.volume-target)<0.02){

dreamAudio.volume=target;

clearInterval(aboutFade);

return;

}

dreamAudio.volume+=(target-dreamAudio.volume)*0.15;

},60);

}
const aboutObserver=new IntersectionObserver((entries)=>{

if(entries[0].isIntersecting){

fadeDream(0.35);

}else{

fadeDream(0);

}

},{
threshold:.55
});

aboutObserver.observe(document.querySelector(".dream"));