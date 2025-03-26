let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');
let notFirstTime = false;

/*animating first time log --------------------------------------------------------------------------------------*/
window.addEventListener('DOMContentLoaded', ()=>{

    if(!sessionStorage.getItem('notFirstTime')){
        setTimeout(()=>{
            logoSpan.forEach((span, idx) =>{
                setTimeout(()=>{
                    span.classList.add('active');
                },(idx + 1) * 400)
            })
    
            setTimeout(()=>{
                logoSpan.forEach((span, idx) =>{
                    setTimeout(()=>{
                        span.classList.remove('active');
                        span.classList.add('fade');
                    },(idx + 1) * 50)
                })
            }, 2000)
    
            setTimeout(()=>{
                intro.style.opacity = '0';
            }, 2300) /*-> time for animation normally is 2300 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
        })

        sessionStorage.setItem('notFirstTime', true);
    }else{
        intro.style.opacity = '0';
    }
})

/*cursor character animation --------------------------------------------------------------------------------------*/
const character = document.getElementById("character");

let mouseX = 0, mouseY = 0; // Start in center
let charX = mouseX, charY = mouseY; // Character's actual position
let isMoving = true;
const speed = 1.5; // Adjust speed
const stopRadius = 40; // Distance at which the character stops moving

document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

// Function to force animation refresh
function setRunningAnimation() {
    character.style.animation = "none"; // Reset animation
    void character.offsetWidth;
    character.style.animation = "run-animation 0.5s steps(8) infinite";
    character.style.backgroundImage = "url('images/CursorCharacter/Ch_Run_SH.png')";
}

// Function to force idle animation
function setIdleAnimation() {
    character.style.animation = "none"; // Reset animation
    void character.offsetWidth;
    character.style.animation = "idle-animation 2s steps(8) infinite";
    character.style.backgroundImage = "url('images/CursorCharacter/Ch_idle_SH.png')";
}

// Smooth movement using requestAnimationFrame
function updateCharacter() {
    const dx = mouseX - charX;
    const dy = mouseY - charY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > stopRadius) {
        charX += (dx / distance) * speed;
        charY += (dy / distance) * speed;
        character.style.transform = `translate(${charX}px, ${charY}px) scaleX(${dx > 0 ? 1 : -1})`;

        if(!isMoving){
            isMoving = true;
            setRunningAnimation();
        }
    }
    else{
        if (isMoving) {
            isMoving = false;
            setIdleAnimation();
        }
    }
    
    requestAnimationFrame(updateCharacter);
}

updateCharacter();
/*character reactions --------------------------------------------------------------------------------------------------*/
const imageList = [ // List of image URLs
    "images/Reactions_love.png",
    "images/Reactions_happy.png",
    "images/Reactions_tired.png",
    "images/Reactions_disappointed.png",
    "images/Reactions_sad.png",
    "images/Reactions_worried.png",
    "images/Reactions_love.png"
];

// Create a container for the random image
const reactImage = document.getElementById("reactImage");

function showRandomImage() {
    // Pick a random image from the list
    const imagePath = imageList[Math.floor(Math.random() * imageList.length)];
    reactImage.src = imagePath;

    reactImage.style.display = "block";
    reactImage.style.opacity = "1";


    // Hide the image after 2 seconds
    setTimeout(() => {
        reactImage.style.opacity = "0"; // Fade out
        setTimeout(() => {
            reactImage.style.display = "none"; // Completely hide
        }, 500);
    }, 2000);


    scheduleNextImage();
}

function scheduleNextImage() {
    const interval = Math.random() * (25000 - 15000) + 15000; // Random time between 15-20 seconds
    setTimeout(showRandomImage, interval);
}

scheduleNextImage();


/*logo randomly changing on click --------------------------------------------------------------------------------------*/
let images = new Array();
images[0]= "images/Reactions_disappointed.png";
images[1]= "images/Reactions_sad.png";
images[2]= "images/Reactions_love.png";
images[3]= "images/Reactions_happy.png";
images[4]= "images/Reactions_tired.png";
images[5]= "images/Reactions_worried.png";
let currentpic=0;

function nextslide(){
    currentpic = Math.floor((Math.random() * images.length));
    document.getElementById('slide').src = images[currentpic];
}

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';
}
/*random character generator --------------------------------------------------------------------------------------*/

/*Head Left*/
let randomHeadLeft = new Array();
randomHeadLeft[0]= "images/Head_1_resize.png";
randomHeadLeft[1]= "images/Head_2_resize.png";
randomHeadLeft[2]= "images/Head_3_resize.png";
randomHeadLeft[3]= "images/Head_4_resize.png";
let currentHeadLeft=0;

function nextsHeadLeft(){
    currentHeadLeft = Math.floor((Math.random() * randomHeadLeft.length));
    document.getElementById('headLeft').src = randomHeadLeft[currentHeadLeft];
}
/*Body Left*/
let randomBodyLeft = new Array();
randomBodyLeft[0]= "images/Body_1_resize.png";
randomBodyLeft[1]= "images/Body_2_resize.png";
randomBodyLeft[2]= "images/Body_3_resize.png";
randomBodyLeft[3]= "images/Body_4_resize.png";
let currentBodyLeft=0;

function nextsBodyLeft(){
    currentBodyLeft = Math.floor((Math.random() * randomBodyLeft.length));
    document.getElementById('bodyLeft').src = randomBodyLeft[currentBodyLeft];
}
/*Legs Left*/
let randomLegsLeft = new Array();
randomLegsLeft[0]= "images/Legs_1_resize.png";
randomLegsLeft[1]= "images/Legs_2_resize.png";
randomLegsLeft[2]= "images/Legs_3_resize.png";
randomLegsLeft[3]= "images/Legs_4_resize.png";
let currentLegsLeft=0;

function nextLegsLeft(){
    currentLegsLeft = Math.floor((Math.random() * randomLegsLeft.length));
    document.getElementById('legsLeft').src = randomLegsLeft[currentLegsLeft];
}

/*Head Right*/
let randomHeadRight = new Array();
randomHeadRight[0]= "images/Head_1_resize.png";
randomHeadRight[1]= "images/Head_2_resize.png";
randomHeadRight[2]= "images/Head_3_resize.png";
randomHeadRight[3]= "images/Head_4_resize.png";
let currentHeadRight=0;

function nextsHeadRight(){
    currentHeadRight = Math.floor((Math.random() * randomHeadRight.length));
    if(currentHeadRight == currentHeadLeft){
        if(currentHeadLeft != randomHeadRight.length-1){
            currentHeadRight = currentHeadLeft+1;
        }else{currentHeadRight = 0;}
    }
    document.getElementById('headRight').src = randomHeadRight[currentHeadRight];
}
/*Body Right*/
let randomBodyRight = new Array();
randomBodyRight[0]= "images/Body_1_resize.png";
randomBodyRight[1]= "images/Body_2_resize.png";
randomBodyRight[2]= "images/Body_3_resize.png";
randomBodyRight[3]= "images/Body_4_resize.png";
let currentBodyRight=0;

function nextsBodyRight(){
    currentBodyRight = Math.floor((Math.random() * randomBodyRight.length));
    if(currentBodyRight == currentBodyLeft){
        if(currentBodyLeft != randomBodyRight.length-1){
            currentBodyRight = currentBodyLeft+1;
        }else{currentBodyRight = 0;}
    }
    document.getElementById('bodyRight').src = randomBodyRight[currentBodyRight];
}
/*Legs Right*/
let randomLegsRight = new Array();
randomLegsRight[0]= "images/Legs_1_resize.png";
randomLegsRight[1]= "images/Legs_2_resize.png";
randomLegsRight[2]= "images/Legs_3_resize.png";
randomLegsRight[3]= "images/Legs_4_resize.png";
let currentLegsRight=0;

function nextLegsRight(){
    currentLegsRight = Math.floor((Math.random() * randomLegsRight.length));
    if(currentLegsRight == currentLegsLeft){
        if(currentLegsLeft != randomLegsRight.length-1){
            currentLegsRight = currentLegsLeft+1;
        }else{currentLegsRight = 0;}
    }
    document.getElementById('legsRight').src = randomLegsRight[currentLegsRight];
}

/*Projects --------------------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".image-slider");

    sliders.forEach(slider => {
        let images = slider.querySelectorAll("img");
        let prevButton = slider.querySelector(".prev");
        let nextButton = slider.querySelector(".next");
        let currentIndex = 0;

        if (images.length > 0) {
            images[currentIndex].classList.add("active");
        }

        function showSlide(index) {
            images.forEach(img => img.classList.remove("active"));
            images[index].classList.add("active");
        }

        function prevSlide() {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            showSlide(currentIndex);
        }

        function nextSlide() {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            showSlide(currentIndex);
        }

        if (prevButton && nextButton) {
            prevButton.addEventListener("click", prevSlide);
            nextButton.addEventListener("click", nextSlide);
        }
    });
});
