---
date: 2020-08-03
---

# flexbox

- [css-layout-masterclass](https://nomadcoders.co/css-layout-masterclass) 정리


## flex-direction, justify-content, align-items
```css
.container {
    display: flex;
    flex-direction : row // (default)
    justify-content: center;
    align-items: center;
}
```
- flex-direction : 진행 방향, main axis가 가로, cross axis는 세로
- justify-content : main axis에서 배치 속성
- align-items : cross axis 에서 배치 속성

```css
.container {
    display: flex;
    flex-direction : column 
    justify-content: start;
    align-items: start;
}
```
- main axis 세로, cross axis 가로
- justify-content 세로 배치
- align-items 가로 배치

```css
.container {
    flex-direction: row-reverse;
}
```
- 돔 순서 역으로 바꿈

## align-self, order
```css
.item {
    align-self : center;
    order: 1;
}
```
- align-self : align-items랑 같은 효과인데 개별 자식한테 효과 줄 수 있음
- order : 자식 순서 정할 수 있음, default : 0

## flex-wrap
``` css
.container {
    // flexbox는 자식 width 무시하고 같은 줄에 위치시킴
    flex-wrap: nowarp; // default
    // 자식 width 유지 시킴, 줄 바꿈 됨
    flex-wrap: wrap;
    //자식 width 유지 + 돔 순서 바꿈 
    flex-wrap: wrap-reverse;
}
```

## aline-content
``` css
.container {
    aline-content : flex-start; //center, space-around
}
```
- justify-content처럼 line(cross axis) 사이 공간 정의

## flex-shrink, flex-grow
```css
.item {
    flex-shrink : 1; // default
    flex-grow  : 0; // defualt
}
```
- flex-shrink : 자식한테 주는 속성으로, flex-wrap : nowarp 일때 줄어드는 배수 정의 할 수 있음, 2면 두배로 줄어 들음
- flex-grow  : flex-shrink 와 반대, 늘어 날 때 더 많이 늘어나게 할 수 있음

## flex-basis
```css
.container {
    flex-basis : 100px;
}

.container {
    height : 50vh;
    flex-basis : 30%;
}
```
- flex-basis : 늘어나거나 줄이 전 기본 엘리먼트 사이즈 main axis가 가로면 width, 세로면 height, 
- 부모에 height 주고 퍼센트로 지정 가능
- width로 대체 할 수 있어서 많이 사용 하진 않음

## flex-flow
```css
.container {
    flex-flow : column wrap
}
```
- flex-direction, flex-wrap 합침

## flexboxfroggy
- 연습 사이트
- [flexboxfroggy](https://flexboxfroggy.com/#ko)
