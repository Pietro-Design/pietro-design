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
document.addEventListener('DOMContentLoaded', (event) => {
    const slider = document.querySelector('.carouselSlider');
        const prevButton = document.querySelector('.carouselButton--prev');
        const nextButton = document.querySelector('.carouselButton--next');

        //better buttons for desktop
        prevButton.addEventListener('click', () => {
            slider.scrollBy({ left: -slider.offsetWidth, behavior: 'smooth' });
        });

        nextButton.addEventListener('click', () => {
            slider.scrollBy({ left: slider.offsetWidth, behavior: 'smooth' });
        });

        //auto scroll
        const images = Array.from(slider.children);
        let currentIndex = 0;
        function goToSlide(index) {
            slider.scroll({
                left: images[index].offsetLeft,
                behavior: 'smooth'
            });
        }
        function goToNextSlide() {
            currentIndex = (currentIndex + 1) % images.length;
            goToSlide(currentIndex);
        }
        setInterval(goToNextSlide, 6000);
});