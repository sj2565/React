function App(){
  class Human{
    static create(name, age){
      return new Human(name, age);
    }
    constructor(name, age){
      this.name = name;
      this.age = age;
    }
    information(){
      return('이름 : ' +this.name + ', 나이 : ' +this.age);
    }
  }

  var kang = new Human('강감찬', 10);
  console.log(kang.information());

  var kim = Human.create('김유신', 30);
  console.log(kim.information());
  console.log('-------------------------------------');

  class Staff extends Human {
    constructor(name, age, dept){
      super(name, age);
      this.dept = dept;
    }
    information(){
      console.log(super.information());
      return('부서 : ' +this.dept);
    }
  }

  var na = new Staff('나총무', 20, '총무부');
  console.log(na.information());

  return(
    <div className="App">
      안녕하세요
    </div>
  );
}

export default App;
