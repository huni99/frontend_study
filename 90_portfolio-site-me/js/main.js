// 메뉴 
const clickedUl = document.querySelector('ul');
const menu=document.querySelector('.menu_icon');

menu.addEventListener('click',function(){
  if(clickedUl.classList.contains('clicked')){
    clickedUl.classList.remove('clicked');
  }
else{
  clickedUl.classList.add('clicked');}
  
  });


// about_me 화살표
let index=0;
const arrow=document.querySelectorAll('.arrow_com');
const text = document.querySelectorAll('.text');

arrow[index].addEventListener('click',function(){

})

  
  
  
  

