var images;
var optionContainer;
var dots;
var toggleBtn;
document.addEventListener('DOMContentLoaded',function(){
    images = document.getElementsByClassName('image-parent');
    optionContainer = document.querySelector('.options');
    toggleBtn = document.querySelector('.toggle-mode');
    toggleBtn.value='light';
    toggleBtn.innerText='Dark Mode';
    for(var i = 0 ; i < images.length ; i ++){
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.id=i;
        dot.addEventListener('click',function(event){
            slideShow(event.target.id);
        });
        optionContainer.appendChild(dot);
    }
     dots = document.getElementsByClassName('dot');
    dots[0].classList.add('active');

    setInterval(function(){
        var currentDot = document.querySelector('.dot.active');
        var nextDot  = currentDot.nextElementSibling || dots[0];
        slideShow(nextDot.id);
    },5000)
});
function slideShow(id){
    var selectedDot = document.getElementById(id);
    console.log(id);
    Array.from(dots).forEach(element => {
        element.classList.remove('active');
    });
    Array.from(images).forEach(element => {
        element.classList.add('hidden');
    });
    selectedDot.classList.add('active');
    selectedDot.classList.add('current');
    
    images[id].classList.remove('hidden');
    images[id].classList.add('after');
    
}
function toggleBtnClick(){
    console.log("clicked");
    if(toggleBtn.value === 'light'){
        toggleBtn.value='dark';
        document.body.classList.add('dark-mode');
        toggleBtn.innerText='Light Mode';
    }else{
        toggleBtn.value='light';
        document.body.classList.remove('dark-mode');
        toggleBtn.innerText='Dark Mode';
    }
}