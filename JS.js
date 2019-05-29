/*웹프로그래밍 프로젝트 3차 보고서(html,css,js,JQ)*/

/* JS ---------------------------------------------------------------------------------*/


 /*새창 띄우기*/
  
 function openWin()
 {
   window.open("presite.html","","height=350,width=450,left=550,top=250");
 }
 

 /* 회원가입 페이지 이동 */

 function Click_button()
 {
    location.href='Join.html';
 }


 /* 비평 검색 */

 function Serch()
 {
     if(serch.value=="") {
           alert("비평 영화명을 입력해 주세요");
           serch.focus();
       }

       else if(serch.value=="어벤져스"){
           alert("어벤져스 엔드게임 비평으로 이동합니다");
           location.href='culture_shock.html';
       }

       else if(serch.value=="그린북"){
           alert("그린북 비평으로 이동합니다");
           location.href='culture_shock2.html';
       }
       else if(serch.value=="보헤미안랩소디"){
           alert("보헤미안 랩소디 비평으로 이동합니다");
           location.href='culture_shock3.html';
       }
       else if(serch.value=="증인"){
           alert("증인 비평으로 이동합니다");
           location.href='culture_shock4.html';
       }
       else{
           alert("정확한 영화명을 입력해 주세요");
           serch.focus();
       }
 }


/* JQ ---------------------------------------------------------------------------------*/


  /* 왼쪽 배너 슬라이드*/

  $(document).ready(function(){
 
 var imgList = ["엑스맨.jpg", "대한극장.jpg"]; // 배너 이미지 배열


 banner(".banner", imgList, 2000);
});

function banner(selector, imgList, speed){
 
  /*
   selector : 선택자
   imgList  : 이미지 배열
   speed    : 슬라이드 시간
 */

 var currentIndex = 0;
 var $banner = $(selector);
  $banner.attr("src", imgList[currentIndex]);

 setInterval(function(){

     currentIndex ++;
     if( currentIndex == imgList.length )
     {
         currentIndex = 0;
     }

     $banner.attr("src", imgList[currentIndex]);

 }, speed);
}    


/* 별점 주기 */

$(document).ready(function(){
      
    $('.starRev span').click(function(){
      $(this).parent().children('span').removeClass('on');
      $(this).addClass('on').prevAll('span').addClass('on');
      return false;
    });
    
});


/* 라이트 박스 */

$(document).ready(function (){
    $('a.lightbox').colorbox({rel:'lightbox'});
});