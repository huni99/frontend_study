// HTML에서 해당 요소를 검색하여 찾은 모든 요소들을 반환
const boxEls = document.querySelectorAll('.box');
console.log(boxEls[3]);
boxEls[3].classList.add('active');
//찾은 요소들의 리스트가 반환됨=> 앞에서 사용한 DOM API들을 바로 쓸 수가 없음 

// forEach() 메소드 사용: 배열에서 각 요소에 대한 반복 처리를 수행
// 인수(인작값)으로 반복을 돌면서 꺼내온 요소를 처리하는 함수 작성
// 처리 함수 작성 시 매개변수(현재 가져온 요소, 요소의 인덱스) 순서가 중요
boxEls.forEach(function(boxEl,index){
  console.log(boxEl,index);
  // boxEl.classList.add('order'+(index+1));
  boxEl.classList.add(`order-${index+1}`);

});
// 요소의 내용 확인 및 수정
const boxEl= document.querySelector('.box');
console.log(boxEl.textContent);

boxEl.textContent= 'CHANGE!!';
console.log(boxEl.textContent);
// (참고) innerHTML:HTML 태그까지 조작하거나 삽입하고 싶을 때
boxEl.innerHTML= '<b>CHANGE!!</b>';








