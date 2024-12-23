function App() {
  // let을 사용한 변수
  let su = 10;
  su += 3;
  console.log(su);

  let str = 'hohoho';
  str = 'hahaha';
  console.log(str);

  let arr = [];
  arr = [10, 20, 30];
  console.log(arr);

  let obj = {};
  obj = {name: 'hong', password :'1234'};
  console.log(obj);

  // // const을 사용한 상수
  // const su = 10;
  // su += 3;
  // console.log(su);
  //
  // const str = 'hohoho';
  // str = 'hahaha';
  // console.log(str);
  //
  // const arr = [];
  // arr = [10, 20, 30];
  // console.log(arr);
  //
  // const obj = {};
  // obj = {name: 'hong', password :'1234'};
  // console.log(obj);

  return (
    <div className="App">
      안녕하세요.
    </div>
  );
}

export default App;
