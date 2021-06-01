# ch02

- npx react-native init ch02_1 --template react-native-template-typescript

- 정적 HTML과 동적 HTML
  - HTML을 웹브라우저로 전송하여서 실행하는 방식이 아닌
  - 웹 브라우저에서 자바스크르비트 코드를 동적으로 HTML을 생성하는 방식
  - 프런트엔드 프레임워크가 됨

### DOM과 랜더링

DHTML 방식은 자바스크립트가 div와 같은 텍스트를 만드는 것이 아닌
객체 지향 언어의 상속 관계로 설계한 문서 객체 타입 자바스크립트 객체를 생성하는 방식으로 동작

> div -> HTMLDivElement 클래스의 인스턴스
> h1 -> HTMLHeadingElement 클래스의 인스턴스

- 위와 같은 클래스를 DOM이라고 부르고 DOM 클래스의 인스턴스를 DOM 객체
- 이것이 부모 자식 관계 -> 트리구조라 불림
- 이것을 **DOM** 구조라고 함

### 물리 돔과 가상 돔

> 물리 DOM

    웹 브라우저에서 자바스크립트 코드가 생성하는 실제 DOM 구조

> 가상 DOM

    리액트 코드가 생성한 자바스크립트 객체 구조
    리액트는 특정 시점에서 가상 DOM 구조를 물리 DOM구조로 만듬
    이것을 -> 리액트가 랜더링한다.
    패키지 -> 렌더러라 함

- React -> react-dom 렌더러
- R/N -> react-native 렌더러

- 패키지의 역할
  - 리엑트와 리엑트 네이티브 모두 react 패키지 사용
  - App 컴포넌트 -> 네이티브 렌더러 -> ios or Android

### 브리지 방식 렌더링

모든 것이 자바스크립트로 동작하는 리엑트에서 React.render라는 DOM 랜더러의 동작을 코드 확인 가능
But 리액트 네이티브에서는 네이티브 렌더러 확인 불가

- 이것은 ad나 ios의 디렉터리에 있는 자바나 오브젝티브-c로 구현된 네이티브 모듈에서 실행
- C++ 언어로 구현된 JavaScriptCore 엔진
  - A/D -> JNI(Java Native Interface)
  - IOS -> FFI(Foreign Function Interface)

1. 리액트 네이티브 앱을 폰에 설치하고 실행 시 리액트 네이티브 모듈 실행
2. 네이티브 담당하는 UI 스레드, App.tsx와 같은 자바스립트 코드를 실행하는 엔진 스레드 2개가 동시 실행

> UI 스레드 엔진 스레드

    메시지 큐 방식으로 렌더링 데이터 주고 받음
    터치 -> 자바스크립트 쪽 스레드에 이벤트 형식으로 넘김

- 위와 같은 방식으로 동작하는 프레임워크 -> **브리지 방식** 프레임워크

> 스레드

    운영체제가 제공하는 서비스
    앱을 실행하면 운영체제는 프로그램 코드를 하나씩 실행
    자바스크립트 -> 싱글 스레드
    but Java, Objective C -> 다중 스레드

- 리액트 네이티브 전용 패키지에는 UI 스레드 존재
- npx react-naitve link
- npx pod-install

### React.createElement API가 하는 일

리액트와 리액트 네이티브에서 React.createElement API는 가장 저수준 기능으로 가상 DOM 생성

1. HTML

```html
<p>Hello world!</p>
```

2. 물리 DOM 객체 생성

```js
const pElement = document.createElement("p");
pElement.innerText = "Hello Js world";
```

- 물리 DOM 객체는 객체 생성 과정과 렌더링 등 2개의 과정이 필요

```js
document.body.appendChild(pElement);
```

- 리엑트 네이티브도 리엑트 처럼 가상 DOM 객체 생성
- DOM 객체를 네이티브로 넘김
- 자바 파일 만들어서 app에서 인식

### 아이폰 네이티브 모듈과 npx pod-install

ios 디렉터리의 Profile은 A/D 디렉터리의 build.greadle에 해당하는 파일
build.gradle 파일과 비슷하게 node_moudles 디렉토리 native_modules 설치 의미

- R/N 파일 만들 시 npx pod-install 자동 실행

### 2.2 JSX 구문 탐구

- JSX = JavaScript + XML

- XML

  - 태그 이름을 자유롭게 지을 수 있음
  - eXtensive Markup Langage
  - 자바스크립와 XML 구문을 결합해 사용하는 코드를 JSX라 부름

- JSX

  - Javascript + XML
  - XML에 자바스크립트를 연결할 용도로 만든 구문
  - 자바스크립트를 확장한다는 의미
  - 페이스북 팀에서 JSX 구문이 마치 표준 바사크립트 문법에 포함된 것 처럼 동작하도록 설계
  - ESNext 자바스크립트 컴파일러인 바벨(babel)이 플러그인 구조로 동작하기 때문에 가능

- R/N -> metro-react-native-babel-preset

### 마크업 언어 용어

HTML 마크업 언어는 XML 마크업 언어의 부분 집합

- XML 태크나 속성 마음대로 확장 가능
- But HTMl 불가

> 마크업 언어 문법

    1. <> 꺽쇠 기호로 감싼 시작태그를 만듬
    2. 끝 마침은 </div> 꺽쇠를 앞에 둠
    3. 시작 태그에는 id, style 같은 속성을 기술가능
    4. 속성 값은 항상 작은 따옴표나 큰 따옴표로 감싼다.
    5. 시작 태그와 끝 태그 사이에는 자식요소 삽입 가능
        자식요소는 XML요소나 문자열
    6. 스스로 닫는 Self Closing tag도 존재

### React.createElement와 JSX 구문과의 관계

React.createElement는 컴포넌트를 가상 DOM 객체로 만듬
컴포넌트는 여러개의 속성과 하나 이상의 자식 컴포넌트를 가질 수 있음

```js
<Text>Hello World!<Text>
```

- XML 파서가 React.createElement(Text, null, 'Hello World!')로 변환을
- 하여서 자바스크립트가 이를 이해할 수 있다.
- @babel/plugin-transform-react-jsx

### 중괄호의 의미

JSX는 XML 마크업 구조에서 중괄호({})를 사용하여 자바스크립트 코드를 감싸는 형태의 문법을 제공

- 자바스크립의 변숫값을 XML 구문안에 표시 가능

```js
const hello = "hi";
<Text>{hello}</Text>;
```

- JSX 구문은 XML 구문을 따르기 때문에 위를 그대로 사용가능하다.
- JSX 구문 자체를 변수에 담을 수 있음
- 또는 변수에 담는 과정을 생략하고 함수의 반환값으로 사용가능

- JSX 구문의 자바스크립트 코드는 반드시 return 키워드 없이 값을 반환해야 함
- return 키워드 없이 값을 반환하는 구문을 타입스크립트나 ESNext 자바스크립트 에서는
- **표현식**이라고 부른다.

### 표현식과 실행문 그리고 JSX

코드를 실행 시키다 보면 '식이 필요함' 같은 오류 나옴
이는 표현식을 의미한다.

- 표현식 : return 키워드 없이 어떤 값을 반환하는 코드를 말함

  - 1+1 같은 코드 조각
  - 'Hello World!' 같은 **값으로 평가하는 어떤 것을 의미**

- 실행문 : 표현식의 반대

  - if 문은 실행문이기 때문에 JSX 코드 안에서는 사용이 불가
  - switch-case 또한 불가함

- 실행문에서의 console.log
  - 가상 DOM 객체를 반환하지 않아 오류가 생김
  - console.log -> React.createElement로의 변환이 불가하기 때문에 생김

### 조건에 따라 분기되는 JSX문 작성

1. if문을 JSX문 밖에 구현하여 문제 해결

```javascript
export default function App() {
  const isLoading = true;
  if (isLoading) {
    return (
      <SafeAreaView>
        <Text>Hellow Jsx</Text>
      </SafeAreaView>
    );
  }
}
```

2. 조건문을 단축 평가 코드로 바꾸기

```javascript
export default function App() {
  const isLoading = true;

  return (
    <SafeAreaView>
      {isLoading && <Text>Hellow Jsx</Text>}
      {!isLoading && <Text>Not Render</Text>}
    </SafeAreaView>
  );
}
```

- undefined
  - 리액트에서는 undefined가 유효한 컴포넌트이므로 작성가능
  - undefined가 반환되는 JSX 코드는 단순히 무시하면 됨

3. JSX 문을 변수에 담아서 해결

```javascript
export default function App() {
  const isLoading = true;
  const children = isLoading ? (
    <Text>Loading...</Text>
  ) : (
    <Text>Hello JSX!</Text>
  );
  return <SafeAreaView>{children}</SafeAreaView>;
}
```

### 배열과 JSX 구문

배열에 SafeAreaView의 자식 컴포넌트로 렌더링

- 배열 변수에 담긴 JSX문은 반드시 부모 컴포넌트의 자식 컴포넌트 형태로 만들어야 함
- JSX문에서 여러 개의 자식 컴포넌트가 있을 때 반드시 XML 작성 원칙을 준수해야함
- 꼭 부모 요소가 존재해야함!!!

## 02-3 컴포넌트와 속성 이해하기

컴포넌트는 JSX와 함께 리액트와 리액트 네이티브의 핵심기능

- faker 외부 패키지 설치
  - 가짜 데이터를 만드는 패키지
  - 개발에 필요한 다양한 가짜 데이터를 제공
  - npm i faker
  - npm i -D @types/faker

### 리엑트 네이티브가 제공하는 두 가지 서비스

지금까지는 Text 컴포넌트를 사용하여 화면에 텍스트를 렌더링
리액트 네이티브 제공하는 서비스는 Text와 같은 코어 컴포넌트와 Platform
Alert과 같은 API 두가지가 있음

- Text 와 같은 코어 컴포넌트는 화면에 어떤 내용을 렌더링 할 때 사용
- API는 폰의 하드웨어나 운영체제가 제공하는 기능이 필요할 때 사용

> 리엑트 같은 프레임워크에서는 자신만의 컴포넌트를 생성 가능

    사용자 정의 컴포넌트나 사용자 컴포넌트라고 불림

### 사용자 컴포넌트

객체지향 프로그래밍에서 컴포넌트는 UI를 담당하는 클래스를 의미
오랫동안 리액트와 R/N은 객체지향 방식의 클래스 컴포넌트 사용

- 그러다가 함수형 컴포넌트 도입, 리액트 훅 사용

### 화살표 방식 함수 컴포넌트 생성

- 속성(property)이 없는 컴포넌트 -> function
- 속성 존재하면 화살표 방식

### 속성

프로그래밍 용어에서 속성(property)은 클래스의 멤버변수를 의미
컴포넌트 또한 화면 UI를 담당하는 클래스 이므로 속성을 가질 수 있음

- 속성 값이 수시로 바뀔 수 있음
- 수시로 바뀜 -> 가변 mutable
- 한 번 설정시 안바뀜 -> 불면 immutable

- 리액트 네이티브는 컴포넌트의 속성이 바뀌면 이를 즉각 화면에 반영해야 함
- 바뀐값을 화면 반영 -> rerendering
- react, R/N 에서의 속성의 : 클래스 속성 + 재랜더링

> XML 같은 마크업 언어 속성 : attribute
> 타입스크립트 속성 : property

### JSX 속성 설정

1. string 타입 속성 값 지정

```js
<Person name="Jack">
```

2. number 타입 속성 값 지정
   - 속성값을 설정할 때 중괄호로 감싸야함

```javascript
<Person age={22}>
```

3. 속성값이 객체일 시 {}괄호로 감쌈

- 안쪽의 {}는 객체를 만드는 구문
- 바깥쪽의 {}는 JSX 구문

```js
<Person person={{name: 'Jack', age: 32}}>
```

### 속성의 용도

부모 컴포넌트가 자식 컴포넌트 쪽으로 데이터를 전달하고 싶을 때 사용

### 타입스크립트 3.8 import type

- FunctionComponent -> FC 타입 함수 컴포넌트 타입은 FC
- 타입 : 타입스크립트가 코드를 자바스크립트로 컴파일 할 때만 필요한 정보
- 타입 -> 자바스크립트 : 타입관련 부분이 다 사라짐
- but 클래스는 물리적으로 동작하는 메서드와 속성을 가지기 때문에 자바스크립트 코드로 변환해도 컴파일 된 형태는 남아 있음

### ScrollView 코어 컴포넌트와 key 속성

- 여러개의 Person 컴포넌트 생성 후 person 속성 전달 시 화면에서 모두 볼 수 없게 됨
- 이를 해결하기 위해서 ScrollView 사용

## 컴포넌트의 이벤트 속성 이해하기

- npx react-native init ch02_4 --template react-native-template-typescript
- npx react-native init ch02_4 --template typescript

### 이벤트 속성과 이벤트 처리기

onPress, onChangeText처럼 이름에 on이라는 접두사가 붙는 속성 -> 이벤트 속성

- 이벤트 속성에는 항상 콜백함수가 존재 해야함

  - 이벤트 콜백 함수 또는 이벤트 처리기(event handler)라고 부름

- Button 코어 컴포넌트

```js
// 버튼 지정
<Button onPress={콜백_함수}/>
// 콜백 함수 형태
콜백_함수 = () => {함수 몸통}
```

> 여기서 알아보는 콜백 함수의 개념

    Callback 사용 이유 : 비동기적 프로그래밍
    이벤트가 발생했거나 특정 시점에 도달 시 시스템에서 호출하는 함수를 뜻함
    1. 사용자 이벤트 처리
    1. 네트워크 응답 처리
    1. 파일 읽고 쓰기
    1. 시간 지연

### Alert API

리액트 네이티브는 Alert API를 제공
리액트 네이티브에서 API는 JSX 구문에서 제공되는 코어 컴포넌트와 달리 타입스크립트 코드에서 사용하는 기능을 의미

```js
import { Alert } from "react native";
```

### 터처블 코어 컴포넌트

- 버튼의 문제점 : 디자인에 융통성이 없음

```js
import { TouchableOpacity, TouchableHighlight } from "react-native";
```

> 특징

    1. 컴포넌트 영역 터치 시 onPress 이벤트 속성에 설정된 이벤트 핸들러 콜백 함수 호출
    1. 단 한개의 자식 컴포넌트만 가능

- 사실 Text 컴포넌트는 onPress 이벤트 속성을 제공함

### Text 코어 컴포넌트의 onPress 이벤트 속성

- Text 컴포넌트도 onPress 이벤트 속성을 제공
- 다만 터치 했을 시 아무런 시각 효과가 없다는 것이 차이

### TextInput 코어 컴포넌트

- TextInput 컴포넌트 특징

1. defaultValue 초기값 설정 가능
1. 입력된 텍스트는 value 속성 값으로 얻을 수 있음
1. 텍스트 입력 시 onChangeText 이벤트 처리기 실행
1. placeholder 속성 사용 시 표시문구 표시 가능
1. editable 속성 false 입력 못하게 가능
1. keyboardType 설정 가능
1. 포커를 갖는 focus 메소드, blur 메서드
1. 텍스트 입력 가능 상태 -> onFocus, 입력 불가 -> onBlur 이벤트 호출
1. 텍스트 입력 끝날 시 onEndEditing 이벤트 호출
1. 자식 요소를 갖지 못함

- onChnageText 시그니처
  ```js
  onChangeText(text: string) => void
  ```

> 함수 시그니처

    타입스크립트 언어에서 모든 변수는 어떤 타입을 가짐
    함수 또한 어떤 타입을 가지게 됨
    함수 선언문에서 함수 이름만 제외한 부분을 -> 함수타입
    이를 함수 시그니처라고 함

### 컴포넌트 스타일링
