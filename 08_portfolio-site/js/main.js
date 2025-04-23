// scrollMagic 사용
const spyEls=document.querySelectorAll('section.scroll-spy');

const controller = new ScrollMagic.Controller();
spyEls.forEach(function(el,index){
  new ScrollMagic.Scene({//감시할 장면 추가 및 옵션 지정
    triggerElement : el, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.5 //화면의 50% 지점에서 보여짐 여부 감시 (0~1사이 지정)

  })
  .setClassToggle(el,'show')//요소가 화면에 보이면 show 클래스 추가
  .addTo(controller); // 컨트롤러에 장면을 할당(필수) - 라이브러리에서 지정한 문법으로 깊게 이해할 필요없다


});

// Swiper 사용

const swiper = new Swiper('.swiper', {
  // 슬라이드 옵션 지장
  // direction:'vertical' 수직 슬라이드
  direction: 'horizontal',//수평슬라이드(기본값)
  loop: true, //반복 재생 여부, 1 -> 2 -> 3 -> 다시 1
  autoplay: {//자동재생 여부
    delay:5000 //5초마다 슬라이드 바뀜(기본값:3000)
  },

  // 페이지네이션 옵션
  pagination: {
    el: '.project .swiper-pagination',
    clickable:true//사용자의 ㅠ페이지네이션 요소 제어 가능 여부 (기본값:false)
  },

  // 이전/다음 슬라이드 버튼 옵션
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// 모달창 띄우기 
const modalBtn = document.querySelector('.project .btn-modal');
const modalEl = document.querySelector('#modal');
const closeBtn = document.querySelector('#modal .btn-close');
const imageModalBtn = document.querySelectorAll('.project .btn-modal-image');
const imageModalEl = document.querySelector('#imageModal');
const imagecloseBtn = document.querySelector('#imageModal .btn-close');
const imageEl =document.querySelector('#imageModal img');

modalBtn.addEventListener('click',function(){
  modalEl.style.display="flex";
})
closeBtn.addEventListener('click',function(){
  modalEl.style.display="none";
})


imageModalBtn.forEach(function(imageElm,index){
  imageElm.addEventListener('click',function(){
    imageModalEl.style.display="flex";
    // if(index===0){
    //   imageEl.src=`./images/work_1.jpg`;
    // }
    // else if(index===1){
    //   imageEl.src=`./images/work_2.jpg`;
    // }
    
    // imageEl.src=`./images/work_${index+1}.jpg`;

    imageEl.src=imageElm.dataset.imageSrc;
    })
})
imagecloseBtn.addEventListener('click',function(){
  imageModalEl.style.display="none";
})
// 추가로 더 해볼 만한 것!
// 모달 바깥 영역 클릭 시 닫기
// ESC 키로 닫기
// fade 애니메이션 넣기