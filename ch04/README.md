# 리액트 훅

- 리액트 프레임워크

  - 컴포넌트라는 기법으로 가상 DOM 객체를 만들고 나서 가상 DOM 객체에 어떤 변화 감지시 해당 변화만 화면에 재랜더링 하여 전체 프레임워크 속도를 빠르게 하는데 초점이 맞춰진 프레임워크

- 클래스 컴포넌트는 코드를 작성하는 방법도 복잡하고 1초당 60회 정도의 매우 빠른 재랜더링을 실행해야 할 때 화면에 정상적인 렌더링이 안되는 버그를 내포
- 함수 컴포넌트가 어떤 값을 유지할 수 있도록 새로운 개념의 데이터 캐시 시스템 생성
- 새로운 데이터 캐시 시스템을 쉽게 사용할 수 있도록 접두사 use로 시작한 API 제공 이를 react-hook이라고 명시

| 용도                    | 훅                  |
| ----------------------- | ------------------- |
| 컴포넌트 데이터 관리    | useMemo             |
|                         | useCallback         |
|                         | useState            |
|                         | useRedcuer          |
| 컴포넌트 생명주기 대응  | useEffect           |
|                         | useLayoutEffect     |
| 컴포넌트 간의 정보 공유 | useContext          |
| 컴포넌트 메서드 호출    | useRef              |
|                         | useImperativeHandle |

### 리액트 훅 사용 시 주의해야할 점

> 훅의 특징

    1. 같은 리액트 훅을 여러 번 호출할 수 있다.
    1. 함수 컴포넌트 몸통이 아닌, 몸통 안 복합 실행문 -> {}에서는 호출 불가
    1. 비동기 함수(async 키워드 붙은)는 콜백 함수로 사용 불가

- 사용불가 한 경우
  1. 함수 몸통 { }블럭에서 사용
  1. if 문 { }안에서 훅 호출
  1. for문 { }안에서 훅을 호출

> 준비 사항

    npx react-native init ch04_1 --template react-native-template-typescript

- react-native.config.js

```js
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ["./src/assets/fonts"],
};
```
