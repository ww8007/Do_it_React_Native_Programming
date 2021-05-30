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
