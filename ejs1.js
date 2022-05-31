function getGrade() { // 함수 정의
  let kor = 95; // 지역 변수
  let eng = 50;
  let mat = 60;
  let sum = kor + eng + mat;
  return sum;
}

let sum2 = getGrade(); // 함수 호출
document.write("합산 점수 : " + sum2 + "<br>");