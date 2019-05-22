# lifecycle

![lifecycle](~@assets/img/vue/vue-lifecycle-1.png)

## 1. creation

- 컴포넌트가 돔이 추가 되기 전 상태, this.$el에 접근 할 수 없다.

- beforeCreate : 컴포넌트 매우 초기에 발생하며 이벤트나 데이터를 인지하는 상태이지만 반응은 하지않는다. 이 훅 안에서 this에 접근하면 undefined 뜸.
- created : 데이터와 이벤트 obsercation이 셋업 됐을 때 불린다. 데이터와 이벤트에 접근 할 수 있지만 templates는 마운트 되지 않은 상태이다.

## 2. Mountion

- 첫 렌더 전후에 컴포넌트의 접근을 허용한다.

- beforeMount : 템플릿과 렌더함수 컴파일 후 랜더링 직전에 실행 된다.
- mounted : 모든 컴포넌트, 템플릿, 렌더링 된 돔에 접근 할 수 있다.

## 3.Updating

- 컴포넌트에서 사용되는 속성이 변경되거나 재 렌더링이 발생 되면 실행 된다.
- beforeUpdate : 데이터 변경이 일어난 후 업데이트 사이클이 실행 될 때 발생한다. 돔이 바뀌기 전
- updated : 리랜더 된 후 실행된다. 자식 컴포넌트의 리랜더는 보장 하지 않음.

## 4. Destruction

- 인스턴스가 제거되기 직전에 호출 된다. 이벤트를 비우거나  reactive subscription를 제거할 때 적합
- **destroyed** : 해체된 후 호출, 하위 인스턴스도 삭제 된다.

## 부모-자식

![부모-자식](~@assets/img/vue/vue-lifecycle-2.png)

- 부모 컴포넌트는 자식이 마운트 되기 전까지 기다린다.
- props는 부모 마운트 후에 변화 추적이 가능하기 때문에 props 셋팅은 부모 mounted 에서 하면 된다.

## references

- [옵션-라이프사이클-훅](https://kr.vuejs.org/v2/api/#%EC%98%B5%EC%85%98-%EB%9D%BC%EC%9D%B4%ED%94%84%EC%82%AC%EC%9D%B4%ED%81%B4-%ED%9B%85)
- [nderstanding Vue.js Lifecycle Hooks](https://alligator.io/vuejs/component-lifecycle/)
- [Vue Parent and Child lifecycle hooks](https://medium.com/@brockreece/vue-parent-and-child-lifecycle-hooks-5d6236bd561f)