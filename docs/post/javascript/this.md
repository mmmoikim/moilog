# this

## Contents

- [this](#this)
  - [Contents](#contents)
  - [default는 window가 this](#default%EB%8A%94-window%EA%B0%80-this)
  - [생성자로 객체 생성](#%EC%83%9D%EC%84%B1%EC%9E%90%EB%A1%9C-%EA%B0%9D%EC%B2%B4-%EC%83%9D%EC%84%B1)
  - [클래스로 객체 생성](#%ED%81%B4%EB%9E%98%EC%8A%A4%EB%A1%9C-%EA%B0%9D%EC%B2%B4-%EC%83%9D%EC%84%B1)
  - [프로토타입 메소드](#%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85-%EB%A9%94%EC%86%8C%EB%93%9C)
  - [new로 생성](#new%EB%A1%9C-%EC%83%9D%EC%84%B1)
  - [strict 모드](#strict-%EB%AA%A8%EB%93%9C)
  - [내부함수](#%EB%82%B4%EB%B6%80%ED%95%A8%EC%88%98)
  - [apply, call, bind 사용](#apply-call-bind-%EC%82%AC%EC%9A%A9)
  - [화살표 함수](#%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98)
  - [참조](#%EC%B0%B8%EC%A1%B0)

## default는 window가 this

```js
this.temp = 'a';
console.log(this === window); //true
console.log(window.temp) //a
console.log(temp) //a
```

## 생성자로 객체 생성

```js
function Student(name, grade){
this.name = name;
this.grade = grade;
console.log(this)
}
var hong = new Student('홍길동', 'A');
//Person {name : '홍길동', grade : 'A'}
```

## 클래스로 객체 생성

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

## 프로토타입 메소드

- 프로토타입으로 메소드 선언하면 객체 스코프로 잡힘

```js
Student.prototype.isPass = function() {
  return this.grade == 'A';
}
console.log(hong.isPass()); //true
```

## new로 생성

- new로 생성 안하면 this가 window라서 Person은 생성 안되고 window에 name, age가 선언 됨
  
```js
var kim = Student('김뫄뫄', 'B');
console.log(window.name, window.grade); // 김뫄뫄 B
```

## strict 모드

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

## 내부함수

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

## apply, call, bind 사용

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

## 화살표 함수

- 화살표 함수는 this, arguments, super 또는 new.target을 바인딩하지 않는다.

``` js
function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; //Person이 this 임
  }, 1000);
}

var p = new Person();
```

## 참조

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
