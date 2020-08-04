---
date: 2020-08-04
---

# scss

- css preprocesser
- scss와 sass는 다른 syntax를 가지고 있음, scss가 sass를 위한 공식적인 문법으로 릴리즈 됨
- stylus, less도 있음

## variables

- 변수 처럼 사용하기 위해 '\$' 붙이기

```scss
// _variables.scss
$title: 65px;
//import 후 사용 가능
@import "_variables";

body {
  font-size: $paddingLeft;
}
```

## nested

- 코드 가독성, 코드 수 줄일 수 있음

```scss
//css
.box {
  margin-top: 20px;
}
.box h1 {
  color: red;
}
//scss
.box {
  margin-top: 20px;
  h1 {
    color: red;
  }
}
```

## mixins

- 함수형으로 정의

```scss
//_mixins.scss
@mixin sexyTitle($color) {
  color: $color;
  font-size: 32px;
}

//style.scss
// import후 include 해서 씀
@import "_mixins";

h1 {
  @include sexyTitle(blue);
}
```

- 프로그램 로직도 가능

```scss
//_mixins.scss
@mixin link($word) {
  @if $word == "odd" {
    color: blue;
  } @else {
    color: red;
  }
  font-size: 32px;
}

//style.scss
// import후 include 해서 씀
@import "_mixins";

h1 {
  @include link("odd");
}
```

## extends

- 코드 중복성 줄일 수 있음

```scss
//_buttons.scss
%button {
  border-redius: 7px;
  font-sizle: 12px;
  text-transform: uppercase;
  padding: 5px 10px;
}

// styles.scss
@import "_buttons";

a {
  @extend %button;
  text-decoration: none;
}

button {
  @extend %button;
  border: none;
}
```

## responsive mixins

- 디바이스 반응형으로 믹스인 사용

```scss
$minIphone: 500px;
$maxIphone: 900px;
$minTablet: $minIphone + 1;
$maxTablet: 1120px;

//_mixins.scss
@mixin responsive($device) {
  @if $device == "iphone" {
    @media screen and (min-width: $minIphone) and (max-width: $maxIphone) {
      @content;
    }
  } @else if $device == "tablet" {
    @media screen and (min-width: $minTablet) and (max-width: $maxTablet) {
      @content;
    }
  } @else if $device == "iphone-l" {
    @media screen and (min-width: $minIphone) and (max-width: $maxIphone) and (orientation: landscape) {
      @content;
    }
  }
}

//style.scss
@import "_mixins";

h1 {
  color: red;
  @include responsive("iphone") {
    color: yellow;
  }
  @include responsive("iphone-l") {
    font-size: 60px;
  }
  @include responsive("tablet") {
    color: green;
  }
}
```

- 믹스인 만들어 놓은 오픈 소스 많음
- [awesome-scss](https://github.com/colourgarden/awesome-scss)
- bourbon, Animate.scss
