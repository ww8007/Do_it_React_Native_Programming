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
