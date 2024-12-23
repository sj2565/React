function App(){
  console.log('ES5 방식의 코딩 기법');
  var arr01 = ['김유신', '이순신'];
  var arr02 = ['강감찬', '을지문덕'];
  var merge01 = [arr01[0], arr01[1], arr02[0], arr02[1]];
  var merge02 = arr01.concat(arr02);
  var merge03 = [].concat(arr01, arr02);

  console.log('merge01 : ' +merge01);
  console.log('merge02 : ' +merge02);
  console.log('merge03 : ' +merge03);
// ------------------------------------------------------------
  console.log('배열 슬라이싱');
  var slice01 = arr01[0];
  var slice02 = arr01[1];

  // 배열  arr01[2]가 없으므로 출력 안 됨
  // || 연산자는 요소가 없을 때 기본 값을 지정해 준다.
  var slice03 = arr01[2] || '김구';

  console.log('slice01 : ' +slice01);
  console.log('slice02 : ' +slice02);
  console.log('slice03 : ' +slice03);
// ------------------------------------------------------------
  console.log('ES6 방식의 코딩 기법');
  var arr03 = ['유관순', '신사임당'];
  var arr04 = ['이이', '이황'];
// ------------------------------------------------------------
  console.log('전개 연산자 (...) 사용하기');
  var merge04 = [...arr03, ...arr04];
  console.log('merge04 : ' +merge04);
// ------------------------------------------------------------
  var arr05 = ['갑', '을', '병', '정', '무', '기'];
  var [item01, item02, item03 = 'empty', ...others] = arr05;

  console.log('item01 : ' +item01);
  console.log('item02 : ' +item02);
  console.log('item03 : ' +item03);
  console.log('others : ' +others);

  function func01(args){ // 함수 정의
    var [first, second, ...others] = args;
    console.log('first : ' +first);
    console.log('second : ' +second);
    console.log('others : ' +others);
  }
  func01(arr05);  // 함수 호출

  return(
    <div className="App">
      안녕하세요
    </div>
  );
}

export default App;
