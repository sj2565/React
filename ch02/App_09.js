function App() {
  const array = [1, 2, 3];

  // square를 변화 함수라고 합니다.
  const square = n => 2 * n;

  // 배열이름.map(변화함수);
  const squared = array.map(square);
  console.log(squared); // squared는 새로운 배열임

  const humans = ['김유신', '이순신', '강감찬', '신사임당'];

  console.log('map 함수 사용하기');  // one => '안녕하세요', 여기서 one : 매개변수(단수)
                                    // humans : 복수
  const result = humans.map(one => '안녕하세요~~' + one + '님');
  console.log(result); // result는 새로운 배열임

  return (
    <div className="App">
      안녕하세요.
    </div>
  );
}

export default App;
