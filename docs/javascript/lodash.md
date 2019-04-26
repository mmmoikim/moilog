# lodash

- 자주 쓰는거 정리
- [document](https://lodash.com/docs/4.17.11)

### _.isEqual(object, other)

객체 깊은 비교

### _.cloneDeep(value)

객체 깊은 복사

### _.debounce(func, [wait=0], [options={}])

일정시간 딜레이 시키기  
검색 1초뒤에 실행

```js
debounce(() => {
      //DO 검색
    }, 1000);
```