// manipulating the navbar
let menuBtn = document.getElementById('menu-btn')
let menu = document.getElementById('menu')
let header = document.getElementById('header')
let closeBtn = document.getElementById('close-btn')

if(window.innerWidth<=600){
    menuBtn.style.display = 'block';
}else{
    menuBtn.style.display = 'none';
}



function openMenu(){
    menu.style.display ='flex';
    header.style.flexDirection ='column';
    menuBtn.style.display='none';
    closeBtn.style.display ='block';
}
function closeMenu(){
    menu.style.display ='none';
    header.style.flexDirection ='row';
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';

}