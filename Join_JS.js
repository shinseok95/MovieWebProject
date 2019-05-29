/*웹프로그래밍 프로젝트 3차 보고서(html,css,js,JQ)*/


   function validate() {

       var re = /^[a-zA-Z0-9]{4,12}$/ // 아이디와 패스워드가 적합한지 검사할 정규식
       var re2 = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;  // 이메일이 적합한지 검사할 정규식

       var id = document.getElementById("id");
       var pw = document.getElementById("pw");
       var email = document.getElementById("email");
       var num1 = document.getElementById("num1");
       var num2 = document.getElementById("num2");

       var arrNum1 = new Array(); // 주민번호 앞자리숫자 6개를 담을 배열
       var arrNum2 = new Array(); // 주민번호 뒷자리숫자 7개를 담을 배열

       // ------------ 이메일 까지 ----------- //

       if(!check(re,id,"아이디는 4~12자의 영문 대소문자와 숫자로만 입력")) {
           return false;
       }

       if(!check(re,pw,"패스워드는 4~12자의 영문 대소문자와 숫자로만 입력")) {
           return false;
       }

       if(join.pw.value != join.checkpw.value) {
           alert("비밀번호가 다릅니다. 다시 확인해 주세요.");
           join.checkpw.value = "";
           join.checkpw.focus();
           return false;
       }

       if(email.value=="") {
           alert("이메일을 입력해 주세요");
           email.focus();
           return false;
       }

       if(!check(re2, email, "적합하지 않은 이메일 형식입니다.")) {
           return false;
       }

       if(join.name.value=="") {
           alert("이름을 입력해 주세요");
           join.name.focus();
           return false;
       }


       // 관심분야, 자기소개 미입력시 하라는 메시지 출력 //
       
       if(join.inter[0].checked==false &&
           join.inter[1].checked==false &&
           join.inter[2].checked==false &&
           join.inter[3].checked==false &&
           join.inter[4].checked==false) {
           alert("관심분야를 골라주세요");
           return false;
       }

       if(join.self.value=="") {
           alert("자기소개를 적어주세요");
           join.self.focus();
           return false;
       }
       
       alert("회원가입이 완료되었습니다.");
   }

   // 입력값 체크 함수 //

   function check(re, what, message) {
       if(re.test(what.value)) {
           return true;
       }
       alert(message);
       what.value = "";
       what.focus();
   }