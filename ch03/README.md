# ch 03

npx react-native init ch03_1 --template react-native-template-typescript

### style 속성과 스타일 객체

- 스타일 속성은 style 속성에 결정되는 객체의 속성
- style 속성에 결정되는 값은 HTML과 같은 마크업 언어와 달리 **객체**

### style 속성의 이름 표기법

- 스타일 객체가 가지는 속성을 스타일 속성이라고 부름
- 요가 엔진이 지정한 이름만 사용이 가능
- flex, color 소문자로 시작
- 두가지 단어 이상 구성 -> 카멜 표기법 사용

> 요가 엔진

    자바스크립트 엔진만 떼어냈기 때문에 css 엔진이 따로 존재하지 않았음
    요가라는 이름의 css 엔진을 직접 구현

### style 속성에 배열 설정 구문

- style 속성에는 배열을 설정 가능
- 속성 설정 값이 배열이면 배열 안의 스타일 객체를 모두 결합하여 하니의 스타일로 만들어줌

```js
<div style={[스타일 객체1, 스타일 객체2]}/>
```

### 뷰 컴포넌트의 backgroundColor 스타일 속성

- 코어 컴포넌트 중 View라는 이름을 가진 컴포넌트는 backgroudColor 속성으로 자신의 바탕색을 설정이 가능
- Text 컴포넌트는 자신의 색을 설정 할 수 없지만 **color** 속성으로 글자 색상을 바꾸기 가능
- 내부에서 스타일을 설정하는 것을 **인라인 스타일** 이라고 부름

### StyleSheet API

리엑트 네이티브에서 제공하는 API

- StyleSheet.create 목적이 자바스크립트 언어로 만든 스타일 객체를 네이티브 모듈로 한꺼번에 옮겨주는 것이 효율적이다.
- 객체로 만들어서 한번에 전달하는 것이 목적 중 하나
- 네이티브 모듈은 전달받은 스타일 객체를 자신의 로컬 저장소에 저장
- 보관된 스타일 객체를 참조하므로 불필요한 자바스크립트 엔진 스레드와 네이티브 UI 스레드 간의 데이터 전송이 일어나지 않기 때문에 렌더링 속도가 빨라지는 장점을 가지고 있음

> 인라인 스타일과 StyleSheet 스타일의 차이

    컴포넌트는 필요에 의해서 리액트 네이티브에 의해 재랜더링 됨
    재렌더링은 상황에 따라 반복해서 발생
    인라인 스타일 방식 : 자바스크립트 엔진 쪽 스레드 -> UI 스레드로 브리지 경우해서 전송
    But StyleSheet.create -> UI 스레드 쪽에 캐시 되기 때문에 속도 up
    정적 스타일 객체는 StyleSheet.create으로 생성하는 것이 더 효율적이다.

### Google material design, react-native-paper 패키지

- 구글 색상표에서 세로줄의 색 이름은 색상을 HSL(Hue-Saturation-Light)방식으로 표현
- Hue 값을 30도 씩 회전하여 만든 것
- 가로줄은 Ligth를 조금 씩 어둡게 하며 만든검

- react-native-paper 패키지 : Colors라는 심벌을 제공
  - 이 심범을 이용하면 구글 색상표에서 Blue열 400번 색상을 Colors.blue500 처럼 표현이 가능

> 설치

    npm i react-native-vector-icons
    npm i react-native-paper
    npm i color
    npm i -D @types/color

### 구글 머테리얼 디자인 색상 테마와 color 패키지

- 디자인은 크게 색상과 보조 색상으로 나눠서 앱의 테마 색상을 결정할 것을 권고
- 앱의 테마 색상이 결정되면 글자가 모든 색상에서 잘 보일 수 있도록 글자 색상도 잘 결정해야함
-
