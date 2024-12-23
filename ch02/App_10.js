function App() {
  const su = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const answer = su.reduce((total, current) => total + current, 0);
  console.log('총합 : ' + answer) ;
  console.log('--------------------------------------');

  const array = [10, 15, 25, 30];
  const result = array.reduce((acc, cur, index, items) => {
    console.log('index : ' + index);
    console.log('items : ' + items);
    acc.push(cur % 2 ? '홀수' : '짝수');
    return acc;
  }, []);
  console.log(result);

  return (
    <div className="App">
      안녕하세요.
    </div>
  );
}

export default App;
