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
let lastpic= images.lenth-1;

function nextslide(){
    currentpic = Math.floor((Math.random() * images.length));
    document.getElementById('slide').src = images[currentpic];
}