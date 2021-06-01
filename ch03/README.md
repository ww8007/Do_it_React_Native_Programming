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
    npm i react-native-paper / yarn add react-native-paper
    npm i color
    npm i -D @types/color

### 구글 머테리얼 디자인 색상 테마와 color 패키지

- 디자인은 크게 색상과 보조 색상으로 나눠서 앱의 테마 색상을 결정할 것을 권고
- 앱의 테마 색상이 결정되면 글자가 모든 색상에서 잘 보일 수 있도록 글자 색상도 잘 결정해야함

### View 컴포넌트와 CSS 박스 모델

리액트 네이티브는 View 가 들어간 컴포넌트를 제공
View 컴포넌트는 여러개의 리액트 네이티브 컴포넌트를 자식 요소로 가질 수 있고
화면 UI의 레이아웃, 스타일링을 담당하는 중요한 역할을 함

### Platform과 Dimensions API

앱이 어느 쪽 폰에서 동작하는 지 확인 할 수 있는 API

> Platform : 실행되는 디바이스의 os

    console.log(Plaform.OS)

> Dimensions : 실행되는 폰의 크기

    const {width, height} = Dimensions.get('window)
    이 값은 폰을 가로로 회전하더라도 (landscape 모드) 변하지 않음

### View 컴포넌트의 backgroundColor 스타일 속성

- 리액트 네이티브의 바탕색 : View가 들어가는 컴포넌트를 사용
  - backgroundColor
- 리액트 네이티브의 글자색 : Text가 들어가는 컴포넌트를 사용
  - color

> fontSize

    R/N의 스타일 속성에는 반드시 number 타입이나 undefined로 설정해야함

### width와 height 스타일 속성과 값 설정 방법

CSS 박스 모델을 적용한 컴포넌트를 사용하여 width와 height 스타일 속성으로 자신의 크기를 설정 가능

- width, height 속성값에는 다음 4가지 방법 중 하나 사용

1. 명시적 width, height를 설정하지 않고 리액트 네이티브의 기본 설정 방식을 따르는 방법
1. 픽셀(pixel, px) 단위의 숫자는 직접 설정하는 방법
1. 부모 요소의 width, heigth 기준으로 자식 컴포넌트의 크기를 퍼센트(%)로 설정하는 방법
1. flex 속성을 사용하여 여러 자식 컴포넌트가 부모 컴포넌트의 크기를 분할하여 가지는 방법

### View의 기본 wdith 값과 height값

SafeAreaView와 같은 View 컴포넌트에 width, height 설정하지 않을 시

- width : 부모 컴포넌트의 width 그대로 설정
- height : 자식 요소를 수평으로 배치했을 때는 자식 요소 중 가장 높은 요소의 height 값

  - 수직 : 수직으로 배치했을 때는 자식 요소의 height 값을 모두 더한 값으로 설정

- 이런 이유로 SafeArea의 높이는 수직으로 배열된 자식 요소 3개의 높이를 모두 더한 값

### 명시적으로 픽셀 단위의 값을 설정하는 방법

- Dimensions API를 이용해 얻는 폰의 크기를 width와 height로 설정이 가능

```js
  SafeAreaView: {
    backgroundColor: Colors.blue500,
    height,
  },
```

> 타입스크립트 문법

    변수 이름과 속성 이름이 같을 경우 변수를 생략 가능하다.
    height : hegiht -> height

### 부모 요소의 크기를 기준으로 퍼센트 설정 법

SafeAreaView의 부모 컴포넌트는 App
App과 같은 사용자 컴포넌트는 렌더링에 참여하지 않고
리액트 네이티브 코어 컴포넌트만 화면에 직접 랜더링함

- 랜더링 관점에서 볼 시 SafeAreaView의 부모 컴포넌트는 App이 아닌 네이티 쪽 모듈에서 생성된
- 자바나 오브젝티브 -c로 구현한 **네이티브 컴포넌트**
- 위의 컴포넌트의 크기 === 폰의 크기
- Dimensions.get('window')의 반환값은 네이티브 쪽 최상위 컴포넌트의 크기

- CSS 에서 퍼센트의 값은 항상 부모 컴포넌트의 기준으로 함

### flex 스타일 속성

View가 들어간 컴포넌트 width, height 스타일 속성값을 어떻게 설정하는지 알아봄

- width, height 속성 설정 대신 flex 스타일 속성 1 설정 시
  - height : '100%' 효과가 발생
- flex : 1 -> height : '100%'
- flex : 0.5 -> height : '50%'
- SafeAreaView의 크기를 네이티브 쪽 부모 요소의 크기와 똑같게 하려면
  - SafeAreaView의 flex 스타일 속성에 1이란 값

> flex와 widht, heigth 같이 사용

    같이 사용하게 되면 width와 height의 적용순위 > flex
    컴포넌트의 height는 부모요소의 flex를 따라가지 않음!!!

### margin 스타일 속성

View가 들어간 컴포넌트 뿐만이 아닌 대부분의 코어 컴포넌트는 margin이라는 속성을 설정가능
margin 스타일 속성은 부모/자식 간 혹은 이웃한 형제 요소 간의 간격을 조정

- margin -> 10% 위,아래,좌우, 10퍼센트 씩 떨어짐
- marginLeft = marginRight인 상황에 사용가능 -> marginHorizontal
- marginTop = marginBottom -> marinVertical
- marginHorizontal = marginVertical -> margin
- 이웃한 형제 컴포넌트 끼리는 기준으로 픽셀씩 떨어짐

### padding 스타일 속성

padding 스타일 속성은 부모/자식 간의 관계에서 **부모 컴포넌트** 쪽에 적용 하는 스타일 속성
대부분은 부모 컴포넌트 내부에 자식 컴포넌트를 배치할 때
자식이 자신의 영역을 다 채우지 않는 것이 보기 좋아보임

- padding 을 사용하여서 자신으로 부터 얼마나 자식이 떨어져있는지 확인이 가능
- paddingLeft === paddingRight -> paddingHorizontal
- paddingTop === paddingBottom -> paddingVertical

### border 관련 스타일 속성

리엑트 네이티브 코어 컴포넌트는 대부분의 자신 영역의 경계를 설정 가능하도록 스타일 속성 사용 가능

| 속성         | 의미                                                                        |
| ------------ | --------------------------------------------------------------------------- |
| borderWidth  | border 넓이를 의미하며 borderLW, RW, TW, BW Width 속성을 사용하여 세부 설정 |
| borderColor  | border 색상을 의미하며 위와 같이 Color 속성을 이용하여 세부설정             |
| borderRadius | 모서리의 둥근 정도를 의미                                                   |
| borderStyle  | 실선, 점선 등 border 스타일 의미                                            |

> ios와 안드로이드 padding 차이

    안드로이드에서 SafeAreaView -> 단순히 View로 동작
    but IOS -> View가 들어간 컴포넌트지만 padding 스타일 속성은 적용되지 않음

### Platform.select 메서드

- 운영체제별로 다른 값을 적용시켜서 이 padding 값이 다르게 나오는 오류를 해결한다.

```js
paddingLeft: Platform.select({ ios: 0, android: 20 });
```

- ios -> padding 값 먹지 않기 때문에 margin 값으로 해결
- android -> ios와 화면을 맞추기 위해서 padding을 사용

### 자원과 아이콘 사용하기

- 모바일 앱 개발에서 자원은 앱에 포함하여 배포하는 이미지, 폰트, 아이콘 등의 파일
- 모바일 앱은 통신이 끊어지는 오프라인 상태를 염두에 두어야함
- 필수 자원은 앱에 포함해 배포해야 함

> 설치

    npm i faker
    npm i -D @types/color @types/faker

### 배경으로 사용할 이미지 내려받기

unsplash.com

### ImageBackground 코어 컴포넌트 사용하기

```js
import { ImageBackground } from "react-native";
```

```js
<ImageBackground style={{flex: 1}} source={require('./src/assets/images/bj.jpg')}>
```

> base64 인코딩 방식 이미지 삽입

    Node.js가 기본 제공하는 require API는 대상 파일이 이미지라면 base64로 인코딩된 문자열을 반환
    리엑트 네이티브 앱에서 이미지 파일은 자바스크립트 코드에 삽입된 형태로 배포됨

- 리액트 네이티브 Image가 포함된 Image나 ImageBackground 컴포넌트는 항상
- source속성에 requrie를 사용하여 읽는 방식으로 파일을 설정해야 함
- 또한 반드시 width, height 스타일 속성 값을 지정해야함
- flex로 대체 가능

- ImageBackgound는 화면 전체를 덮는 방식으로 사용하는 사용하는 컴포넌트
- flex: 1 스타일 -> width, height 지정
- 이름에 View가 없지만 View가 들어간 컴포넌트 처럼 자식을 가질 수 있음

### Image 코어 컴포넌트

- Image 코어 컴포넌트는 ImageBackground 처럼 이미지 파일을 화면에 렌더링 하는 기능 제공
- Image는 ImageBackground와 달리 자식 컴포넌트를 가질 수 없음
- Image, ImageBackground에 앱의 자원이 아닌 원격지 서버에서 받아야 하는 경우
  - {uri: 이미지*파일*웹\_주소}

### 폰트 직접 설치하고 사용하기

이번엔 폰트를 내려받아 src/assets/fonts 디렉터리에 설치
구글에서 'Dancing Script'로 찾은 다음 다운 받아서 사용

### react-native.config.js

- 자원 파일을 앱에 포함하려면 npx react-native link라는 명령을 실행해야 함
- react-native.config.js <- 이 파일이 있어야 위의 명령 실행 가능

> project : 필수 키

    이 project 키는 link 명령이 ios와 안드로이드 디렉토리를 대상을 동작 한다는 것을 지정

### react-native link 명령으로 폰트 자원 링크하기

> 설치

    npx react-native link

### fontFamily 스타일 속성

지금까지의 Text 컴포넌트는 특별한 폰트 설정 없이 텍스트를 화면에 출력
-> 네이티브가 기본 폰트를 제공하기 때문

```js
fontFamily: "파일_확장자가_없는_폰트_파일_이름";
```

- 부모 요소에는 자식 요소의 스타일을 설정하지 못한다.

### fontWeight 스타일 속성

- fontWeight 스타일 속성을 사용하여 글꼴 두께를 바꿀 수 있음
- 문자열로 지정해야 하는 것이 특징이다.

### textAlign 스타일 속성

- Text 컴포넌트에 width, height 스타일 속성을 적용하면 다음 화면처럼
- 전체 텍스트 크기와 Text 컴포넌트 크기에 Text 불일치 width, height를 설정하지 않더라도 텍스트가 길어서 여러줄로 출력될 때도 발생
- width, height 스타일 속성을 적용하면 다음 화면처럼 전체 텍스트 크기와 Text 컴포넌트 크기에 불일치가 생김
- width, height를 설정 하지 않더라도 여러줄로 출력 때도 발생

1. left
1. center
1. right

### ios 문제점

아이콘이 텍스트 아래에 렌더링 되는 것이 아닌 화면 아래쪽에 렌더링 됨

### flex: 1의 의미

App.tsx의 View 컴포넌트 스타일을 자세히 보면 flex: 1 스타일 속성이 설정된 것을 확인 가능

- ImageBackground와 같은 부모 컴포넌트의 Image, View, Icon등 자식 컴포넌트 중에 flex 스타일 속성에 0이 아닌 값을 가지는 컴포넌트가 없다면 여분이 그대로 남음
- But View가 flex로 된다면 부모 컴포넌트 heigth 여분이 모두 flex: 1인 컴포넌트의 높이가 됨
- 높이 여분을 자신의 높이로 삼기 때문에 ICON은 화면 아래에 위치하게 됨

### 컴포넌트 배치 관련 스타일 속성 탐
