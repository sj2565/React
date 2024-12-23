function App() {
  console.log('ES5 방식의 코딩 기법');
  var members = ['김유신', '이순신']
  var element01 = members[0];
  var element02 = members[1];
  var element03 = members[2] || '윤봉길';
  console.log('element01 : ' +element01);
  console.log('element02 : ' +element02);
  console.log('element03 : ' +element03);

  var temp = element02;
  element02 = element01;
  element01 = temp;

  console.log('swapping 기법 사용하기(ES5)');
  console.log('element01 : ' +element01);
  console.log('element02 : ' +element02);

  var obj = {
    name:'강감찬', age:30,
  }

  var name = obj.name;
  var age = obj.age;
  var address = obj.address || '수원시';
  console.log('name : ' + name);
  console.log('age : ' + age);
  console.log('address : ' + address);

//---------------------------------------------------------------------
  console.log('ES6 방식의 코딩 기법');
  var members02 = ['황진이', '신사임당'];
  var [element04, element05, element06 = '유관순'] = members02;
  var [element04, element05] = members02;
  console.log('element04 : ' +element04);
  console.log('element05 : ' +element05);
  console.log('element06 : ' +element06);

  [element04, element05] = [element05, element04];
  console.log('swapping 기법 사용하기(ES6)');
  console.log('element04 : ' +element04);
  console.log('element05 : ' +element05);

  var {...humaninfo} = {name:'강감찬', age:30, address:'가산'};
  console.log('humaninfo[\'name\'] : ' +humaninfo['name']);
  console.log('humaninfo[\'age\'] : ' +humaninfo['age']);
  console.log('humaninfo[\'address\'] : ' +humaninfo['address']);
  console.log('humaninfo[\'gender\'] : ' +humaninfo['gender']);

  return (
    <div className="App">
      안녕하세요.
    </div>
  );
}

export default App;
