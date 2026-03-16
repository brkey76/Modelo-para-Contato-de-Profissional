function contact(){
   document.querySelector('.contact-form').style.left  = '50vw'; 
   document.querySelector('.contact-form').style.transform = 'translateX(-50%)';
   document.querySelector('.overlay').style.visibility = 'visible';
}
function closeContact(){
   document.querySelector('.contact-form').style.left  = '-300px'; 
   document.querySelector('.contact-form').style.transform = 'translateX(0)';
   document.querySelector('.overlay').style.visibility = 'hidden';
}