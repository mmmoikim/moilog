# this

- default는 window가 this

```js
this.temp = 'a';
console.log(this === window); //true
console.log(window.temp) //a
console.log(temp) //a
```

- 생성자로 객체 생성

```js
function Student(name, grade){
this.name = name;
this.grade = grade;
console.log(this)
}
var hong = new Student('홍길동', 'A');
//Person {name : '홍길동', grade : 'A'}
```

- 클래스로 객체 생성

```js
class Employee{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}
var hong = new Employee('홍길동');
hong.getName();
```

- 프로토타입으로 메소드 선언하면 객체 스코프로 잡힘

```js
Student.prototype.isPass = function() {
  return this.grade == 'A';
}
console.log(hong.isPass()); //true
```

- new로 선언 안하면 this가 window라서 Person은 생성 안되고 window에 name, age가 선언 됨

```js
var kim = Student('김뫄뫄', 'B');
console.log(window.name, window.grade); // 김뫄뫄 B
```

- strict 모드로 함수 선언하면 함수 안에서 this는 undifined로 됨.

```js
function sum(a, b){
    'use strict';
    console.log(this);
    return a + b;
}
sum(1,2); //undifined
```

- window 객체에서 호출하면 this에 참조 가능

```js
window.sum(1,2); //Window {... }
```

- 내부함수에서는 부모 this가 참조되지 않음

```js
function test(a){
    this.a = a;
    console.log(this.a); //yee
    function inner(a){
        console.log(this.a); //undefined
    }
}
test('yee');
// yee
// undefined
```

- apply, call, bind 사용

```js
function Student(name, grade){
this.name = name;
this.grade = grade;
}

var lee = {};
Student.apply(lee, ['이뫄뫄','C']);
console.log(lee); // {name: "이뫄뫄", grade: "C"}

var shin = {};
Student.call(shin, '신뫄뫄', 'F');
console.log(shin) // {name: "신뫄뫄", grade: "F"}

var bak = {};
Student.bind(bak)('박뫄뫄', 'D');
console.log(bak) // {name: "박뫄뫄", grade: "D"}
```

- 화살표 함수
화살표 함수는 this, arguments, super 또는 new.target을 바인딩하지 않는다.

``` js
function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; //Person이 this 임
  }, 1000);
}

var p = new Person();
```