function getAverage() { // 함수 정의
    sum = kor + mat + eng; // 전역 변수
}
var kor = 100; // 전역 변수
var mat = 90;
var eng = 80;
// function getAverage() { // 함수 정의
//     var kor = 100; // 지역 변수
//     var mat = 90;
//     var eng = 80;
        
//     var sum = kor + mat + eng; // 지역 변수
//     return sum;
// }

getAverage(); // 함수 호출
document.write("국어점수와 영어점수, 수학점수를 받아서 합산 결과를 표출하도록 변경해 보세요");
document.write("합산점수:" + sum + "<br/>");