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

특정값 제거

```js
_.without([2, 1, 2, 3], 1, 2);
// => [3]
```