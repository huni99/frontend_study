const clickedUl = document.querySelector('ul');
const menu=document.querySelector('.menu_icon');

menu.addEventListener('click',function(){
  if(clickedUl.classList.contains('clicked')){
    clickedUl.classList.remove('clicked');
  }
else{
  clickedUl.classList.add('clicked');}
  
  });

  
  

