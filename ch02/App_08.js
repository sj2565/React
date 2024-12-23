function App() {
  const humans = ['김유신', '이순신', '강감찬', '신사임당'];

  console.log('기존 for 구문 사용 방식');
  for(let i=0; i < humans.length; i++){
    console.log(humans[i]);
  }

  console.log('forEach 구문 사용 방식');
  // 복수개념.forEach(단수개념의 변수 => {
  humans.forEach(hero => {
    console.log(hero);
  });

  return (
    <div className="App">
      안녕하세요.
    </div>
  );
}

export default App;
