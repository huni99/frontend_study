// scrollMagic 사용
const spyEls=document.querySelectorAll('section.scroll-spy');

const controller = new ScrollMagic.Controller();
spyEls.forEach(function(el,index){
  new ScrollMagic.Scene({//감시할 장면 추가 및 옵션 지정
    triggerElement : el, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.6 //화면의 50% 지점에서 보여짐 여부 감시 (0~1사이 지정)

  })
  .setClassToggle(el,'show')//요소가 화면에 보이면 show 클래스 추가
  .addTo(controller); // 컨트롤러에 장면을 할당(필수) - 라이브러리에서 지정한 문법으로 깊게 이해할 필요없다


});
// 메뉴 
const clickedUl = document.querySelector('.container-1 ul');
const menu=document.querySelector('.menu_icon');

menu.addEventListener('click',function(){
  if(clickedUl.classList.contains('clicked')){
    clickedUl.classList.remove('clicked');
  }
else{
  clickedUl.classList.add('clicked');}
  
  });
//메뉴 스크롤 정도에 따라 색상 변경
const menuEl= document.querySelectorAll('.menu li a');




window.addEventListener('scroll',function(){
  console.log(window.scrollY);
  for(let i=0; i <5; i++ ){
    menuEl[i].style.color=' #000';
  }
  if(this.scrollY<600){
    menuEl[0].style.color=' #425a73';
  }
  else if(this.scrollY<1400){
    menuEl[1].style.color=' #425a73';
  }
  else if(this.scrollY<2100){
    menuEl[2].style.color=' #425a73';
  }
  else if (this.scrollY<2800){
    menuEl[3].style.color=' #425a73';
  }
  else{
    menuEl[4].style.color=' #425a73';
  }
  
})


// about_me 화살표
let index=0;
const arrow=document.querySelectorAll('.arrow_com');
const text = document.querySelectorAll('.text');
text[0].classList.add('text_on');
arrow[0].classList.add('arrow_off');

arrow[0].addEventListener('click',function(){
  
  index--;

  if(index<0){
    arrow[0].classList.add('arrow_off');
    index++;
  }else if(index==0){
    arrow[0].classList.add('arrow_off');
    text[index].classList.add('text_on');
    text[index+1].classList.remove('text_on');
  }
  else{
    text[index].classList.add('text_on');
    text[index+1].classList.remove('text_on');
    arrow[1].classList.remove('arrow_off');    
  }
})
arrow[1].addEventListener('click',function(){
  
  index++;
  if(index>2){
    arrow[1].classList.add('arrow_off');
    index--;
  }
  else if(index==2){
    arrow[1].classList.add('arrow_off');
    text[index].classList.add('text_on');
    text[index-1].classList.remove('text_on');
  }
  else{
    text[index].classList.add('text_on');
    text[index-1].classList.remove('text_on');
    arrow[0].classList.remove('arrow_off');
  }
  
})

// contact 버튼 클릭시 모달창

const btnModal = document.querySelector('.btn-modal');
const modal = document.querySelector('.modal');
const btnClose =document.querySelector('.btn-close');
btnModal.addEventListener('click',function(){
  modal.style.top=0;
  modal.style.opacity=1;
})
btnClose.addEventListener('click',function(){
  modal.style.top='-100vh';
  modal.style.opacity=0;
})

  
  
  
  

