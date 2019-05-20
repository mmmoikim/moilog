---
date : 2019-04-26 13:32:00
---

# lodash

- 자주 쓰는거 정리
- [document](https://lodash.com/docs/4.17.11)

### _.isEqual(object, other)

객체 깊은 비교

``` js
_.isEqual(object, other);
```

### _.cloneDeep(value)

객체 깊은 복사

``` js
var deep = _.cloneDeep(objects);
```

### _.debounce(func, [wait=0], [options={}])

일정시간 딜레이 시키기  
검색 1초뒤에 실행

```js
let search = debounce(function(){}, 1000);
search();
```

### __.uniqBy(array, [iteratee=_.identity])

배열 중복 제거

```js
   let obj = [{ 'a': 1 , 'b' : 2}, { 'a': 1 , 'b' : 3}];
    obj = _.uniqBy(obj, 'a');
    //{ 'a': 1 , 'b' : 2}
```

### _.uniqWith(array, [comparator])

배열 중복 제거

``` js
    let obj = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
    obj = _.uniqWith(obj, _.isEqual);
    //[{x: 1, y: 2}, {x: 2, y: 1}]
```

### _.without(array, [values])

배열 특정 값 제거

```js
_.without([2, 1, 2, 3], 1, 2);
// => [3]
```

### _.remove(array, [predicate=_.identity])

객체 배열 특정 값 삭제 할 때

```js
var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});
console.log(array);
// => [1, 3]
console.log(evens);
// => [2, 4]
```

### _.difference(array, [values])

첫번째 배열 중 두번째 배열에 없는 값 알고 싶을 때

```js
_.difference([2, 1], [2, 3]);
// => [1]
```

### _.differenceBy(array, [values], [iteratee=_.identity])

객체 배열 일 때 특정 키로

```js
_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
// => [{ 'x': 2 }]
```

### _.differenceWith(array, [values], [comparator])

객체 배열 일 때

```js
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
// => [{ 'x': 2, 'y': 1 }]
```

