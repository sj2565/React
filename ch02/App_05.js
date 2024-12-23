function App() {
  var func01 = (first, second) => {
    return first + second;    // 화살표 함수
  };
  console.log('func01(14, 5) : ' +func01(14, 5));

  var func02 = (first, second) => first + second;
  console.log('func02(10, 20) : ' +func02(10, 20));

  var func03 = (first, second) => ({add:first + second, mul:first * second});
  console.log('func03(11, 22)[\'add\'] : ' +func03(11, 22)['add']);
  console.log('func03(11, 22)[\'mul\'] : ' +func03(11, 22)['mul']);

  return (
    <div className="App">
      안녕하세요.
    </div>
  );
}

export default App;
