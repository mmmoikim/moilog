---
date: 2020-08-03
---

## grid

- [css-layout-masterclass](https://nomadcoders.co/css-layout-masterclass) 정리

## grid-template-columns, grid-template-rows
- 각 컬럼 width, height 지정
- grid-template-row는 높이 지정 안하면 자식의 폰트 사이즈에 따라서 높이 결정 됨
```css
.grid { 
    display: grid
    grid-template-columns : 20px 55px 89px 100px
    grid-template-rows : 100px 500px 300px
}
//repeat 함수
.grid { 
    display: grid
    grid-template-columns : repeat(4, 200px)
}
```

## column-gap, row-gap, gap
- 행, 렬 사이 공간
```css
.grid { 
    display : grid;
    column-gap: 5px;
    row-gap: 5px;
    gap: 5px;
}
```

## grid-template-areas, grid-area
- 자식에 이름 지정하고 영역 템플릿으로 정의
```css
.grid { 
    display : grid;
    grid-template-areas:
"header header header header"
"content content content nav"
"content content content nav"
"footer footer footer footer";
}

.header {
    grid-area : header
}
```

## grid-column-start, grid-column-end

- grid-area 안쓰고 행,열 시작/끝 지점 정의

```css
.header {
    grid-column-start: 1;
    grid-column-end: 5;
}

// 짧게 쓰기
.header {
    grid-column: 1 / 5 
}

// 끝에서 부터 마이너스로 쓸 수 있음
.header {
    grid-column: 1 / -1 
}

// span
// span은 셀 몇개 차지할지, 시작점 지정 안하면 아래로 붙음
.header {
    grid-column: 1 / span 4
}
```

## 이름 붙이기

```css
.grid {
    display : grid;
    grid-template-columns: [first-line] 100px [second-line] 100px [third-line] 100px [fourth-line] 100px [fifth-line];
    grid-template-rows: repeat(4, 100px [sexy-line]);
}

.header {
    grid-column: first-line / fourth-line;
    grid-row: sexy-line 1 / sexy-line 3;
}
```

## fraction
- 그리드에서 사용 가능 한 공간을 비율로 지정 할 수 있음.
- grid-template-rows에서 사용하려면 height 지정해야됨

```css
.grid {
    display : grid;
    grid-template-columns:  repeat(4, 1fr)
    grid-template-columns: 4fr 1fr 1fr 1fr
}

// grid-template-areas 에서 쓰는 법
// 이름 붙이기
// grid-template-areas 에서는 repeat 못 씀
.grid {
    display : grid;
    gap : 5px;
    height : 50vh;
    grid-template-areas:
    [header-start]"header header header header" 1fr [header-end]
    [content-start]"content content content nav" 2fr [content-end]
    [footer-start]"footer footer footer footer"; 1fr [footer-end] / 1fr 1fr 1fr 1fr
}
```

## justify-items, align-items, place-items
- justify-items, 그리드 "안"에서 가로로 아이템 배치 하는 방법
- align-items, 그리드 "안"에서 세로로 배치하는 방법
- place-items : justify-items, align-items 합친거

```css
.grid {
    display: grid;
    justify-items: stretch; // stretch(default)/start/center
    align-items: end // center/start
}

.grid {
    place-items: stretch / end
}

// 아이템에 가로세로 지정하면 stretch 안먹힘, 지정 안하면 fontsize로 먹힘
.header {
    width: 40px;
    height: 40px;
}
```

## justify-content, align-content
- item은 그리드에 셀 하나하나, content는 그리드 전체
- justify-content, align-content 는 화면 전체에 그리드를 어떻게 배치 할지 정의
```css
.grid {
    display: grid;
    height : 250vh;
    justify-content: center // 그리드 표를 배치함, space-between
    align-content : start
}
```

## align-self, justify-self, place-self
- 개별적으로 아이템에 align-items 속성 주기
- place-self는 align-self, justify-self 합친거

```css
.header {
    align-self: end;
    justify-self: center;
}

.header {
    place-self: end / center;
}
```

## grid-auto-rows, grid-auto-columns, grid-auto-flow
- grid-template-rows 수 넘어서 row가 생긴다면 자동으로 row를 추가한다.
- grid-auto-rows 자동으로 추가 되는 row에 속성 정의
- grid-auto-flow 디폴트가 row, column으로 자동추가 하고 싶을 때 정의
- grid-auto-columns은 grid-auto-flow: column; 일 때

```css
.grid {
    display : grid;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(4, 100px);
    grid-auto-rows: 200px; //4개 이후부터
}

.grid {
    display : grid;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(4, 100px);
    grid-auto-flow: column;
    grid-auto-columns: 200px; //4개 이후부터
}
```

## minmax
- 최소, 최대값 지정 가능
```css
.grid {
    display : grid;
    grid-template-columns: repeat(4, minmax(100px, 150px));
}
```

## auto-fit auto-fill
- repeat 에 쓸 수 있음
- auto-fill : 화면에 따라 자동으로 그리드 채워줌
- auto-fit : 지금 있는 돔을 자동으로 화면 사이즈에 맞춰서 채워줌

```css
.grid {
    display : grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 150px));
}

.grid {
    display : grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 150px));
}
```

## min-content, max-content
- max-content : 박스가 content가 차지할 수 있는 최대 길이만큼 커짐, 줄바꿈 안됨
- min-content : content를 재배열하더라도 박스가 최소한으로 줄어들게 함
```css
//최대 1fr, 최소 컨텐츠 최소크기만큼
.grid {
    display : grid;
    grid-template-columns: repeat(5, minmax(min-content, 1fr);
}

.grid {
    display : grid;
    grid-template-columns: repeat(5, minmax(20px, max-content);
}
```

## grid garden
<https://cssgridgarden.com/#ko>