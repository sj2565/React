function App() {
  var name = '김철수';
  var korean = 60;
  var english = 80;

  console.log('ES5 방식의 코딩 방법');
  var obj = {name:name, korean:korean, english:english};
  console.log(obj);

  var firstname = 'gildong';
  var combined = { }; // empty object
  combined['hong' + firstname] = '이서준';   // setter
  console.log('combined : ' +combined);
  console.log('combined[\'hong gildong\'] : ' +combined['honggildong']); // getter

  var methodList = {
    sayHello : function(saram) {console.log('안녕하세요~~~' +saram + '님');},
    goodLuck : function(){return '행운을 빌어요'},
  };
  methodList.sayHello('김유신');
  console.log(methodList.goodLuck());

  //---------------------------------------------------------------------------------

  console.log('ES6 방식의 코딩 방법');
  // 키 이름을 명시하지 않으면 변수의 이름이 키가 된다.
  obj = {name, korean, english};
  console.log(obj);

  combined = {
    ['hong' + firstname] : '강감찬',
  }
  console.log('combined : ' +combined);
  console.log('combined[\'hong gildong\'] : ' +combined['honggildong']); // getter

  console.log('객체에 함수를 추가하는 경우 function 키워드를 적지 않아도 된다.');
  methodList = {
    korean,
    sayHello (saram) {console.log('안녕하세요~~~' +saram + '님');},
    goodLuck(){return '행운을 빌어요'},
  };
  console.log('국어 점수 : ' +methodList.korean);
  methodList.sayHello('오징어');
  console.log(methodList.goodLuck());

  return (
    <div className="App">
      안녕하세요.
    </div>
  );
}

export default App;
