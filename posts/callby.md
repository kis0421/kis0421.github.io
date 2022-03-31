---
title: 5분 컷 하는 Call by Reference 그리고 Call by Value
contentsType: 자바스크립트
date: 2021.12.08
---

# Call by Reference 그리고 Call by Value <br/><br/>
## 글을 쓰는 이유
프로그래밍 언어에서 함수를 작성하고 호출을 하는 일은 매우 자연스럽고 일상일 것이다.<br/>
그 중 call by reference와 call by value에 대한 개념을 확실히 알고, 흐름에 맞게 로직을 구성하는것은 매우 중요하다.<br/><br/>
간혹 정확한 의미를 모르고 사용하는 코드가 큰 버그가 될 수 있다.<br/><br/>
구글에 검색을 하면 자료가 수 없이 나오지만,<br/>
그 중 내가 이해한 중요한 부분들을 글로 저장하고, 한번 더 내 머릿속에 주먹밥으로 만들어 저장하려한다.<br/><br/>
___

## Call by reference/value가 뭐야 ?
> 영문 그대로 '참조에 의한 호출'과 '값에 의한 호출' 이다.
> 각각 '함수를 호출할 때 인자를 전달하는 방식'으로 설명할 수 있다.


### Call by value
- 함수를 호출 할 때 인자로 **value**(값)를 **복사**하여 전달한다.
- 복사하여 전달된 인자는 지역 변수(local variable)의 특성을 갖는다.
- 원시 타입(primitive type)을 전달한다.

### Call by reference
- 함수를 호출 할 때 인자로 **reference**(값에 대한 **참조 주소**, 메모리상의 주소를 담고있는 변수)을 전달한다.
- reference를 전달했기 떄문에 인자는 일반적으로 전역 변수(global variable)의 특성을 갖는다
- 참조 타입(reference type)을 전달한다.


___

## 예제
### Call by value

``` javascript
function printName(name){
    name = `${name} 입니다.`;
 	console.log(name);  // 김쑥갓 입니다.
};

const friendName = "김쑥갓";
printName(friendName);

console.log(friendName); // 김쑥갓
```

prefix로 name을 `김쑥갓 입니다.` 라는 문장으로 재할당을 하고 출력을 한다.<br/>
함수가 종료 된 이후에 friendName은 여전히 `김쑥갓` 이다.<br/>
값 자체를 복사해서 전달을 했기 때문에 원본 값은 변하지 않는다.<br/><br/>


### Call by Reference


``` javascript
function printMemberName(memberInfo){
    member.name = `${member.name} 입니다.`;
	console.log(params.name); // 김흥국 입니다.
};

const memberInfo = {
    name: "김흥국",
    age: 15
};
printMemberName(memberInfo);

console.log(memberInfo.name); // 김흥국 입니다.
```


마찬가지로 `member.name`을 `printMemberName` 함수 내에서 `김흥국 입니다.`라는 문자열로
재할당을 한 뒤 출력을 했다.<br/>
그런데, 함수가 종료가 되었음에도 `memberInfo.name`의 값은 여전히 함수 내에서 바꿔준 문장이다.<br/><br/>

이유는 참조타입의 변수를 인자로 넘겨주었기 때문에 값을 복사해서 전달하는 value와 달리 reference 값은
동일한 주소지를 바라본다.<br/>

즉 함수 안에서 재할당한 `member.name`은 이미 선언되어있던 `memberInfo.name`과 같고, 이를 수정한것이다.<br/>
전달하는 인자나, 넘겨받은 파라미터를 어떠한 처리도 없이 사용을 한다면 위 예제와 아래의 예제의 결과는 동일하다.<br/><br/>

``` javascript
function printMemberName() {
  memberInfo.name = `${memberInfo.name} 입니다.`;
  console.log(memberInfo.name); // 김흥국 입니다.
}
const memberInfo = {
    name: "김흥국",
    age: 62,
};
printMemberName();
console.log(memberInfo.name); // 김흥국 입니다.

```


### side effect
참조 타입의 변수를 그대로 전달하고, 재할당이 일어나는 경우에는 위에서 본 예제와 같이 함수 종료후에도<br/>
원본 객체의 값은 변경이 되어있다.<br/>
함수 내에서 외부에 선언된 값을 변경한다는것은 `원본 값이 변조가 된다` 는 이유만으로도 위험성이 크다고 말할 수 있다.<br/><br/>

### then how ?

참조 타입의 call by reference로 인해 사이드 이펙트가 발생하는것을 방지하려면 reference가 다른 값을 전달하면 된다.<br/>
``` javascript
function printMemberName(member) {
  member.name = `${member.name} 입니다.`;
  console.log(member.name); // 김흥국 입니다.
}

const memberInfo = {
  name: "김흥국",
  age: 15,
};

printMemberName({...memberInfo});
console.log(memberInfo.name); // 김흥국
```

위와 같이 `memberInfo`라는 객체를 전개 구문(spread operator)을 통해 값을 전달했다.<br/>
이렇게 되면 미리 선언되어있던 `memberInfo`와 `printMemberName`함수 내에 `member`는 다른 참조 값을 갖는거 같아 보인다.<br/>
spread 연산자 외에도 object의 경우 `Object.assign` array의 경우 `slice()` 등으로 의도한대로 원본 데이터는 유지되는 코드를 작성 할 수 있다.<br/><br/>

**하.지.만** <br/><br/>

depth가 2depth 이상의 값을 전달하고, 그 값을 수정하면 원본 데이터 또한 변경이 된다.
그렇기 때문 위 방법 또한 완전하게 같은 값의 다른 reference를 생성했다고 말할 수 없다.
즉, 완벽한 deep copy가 아닌것이다.

(이와 관련해서는 deep copy shallow copy 라는 키워드로 검색을 해보자) <br/><br/>
___
## 결론 

그렇다면 참조타입을 함수의 인자로 전달하는것은 안전하지 않기 때문에 사용을 지양해야하나?<br/>
**그렇지 않다고 생각한다.** 참조 타입을 인자로 전달하지 않으면 불편함이 생길 수 있다.<br/><br/>

가령 `member` 라는 객체 하나만 전달 하면 되는것을  `printMember(member.name, member.age)` 같은 형태로 풀어서 전달하는것은 비효율적이다. 객체의 속성이 얼마나 많을 지도 모르고, 배열 혹은 객체의 깊이가 얼마나 깊어질지도 모르기 때문이다.<br/><br/>

함수에 참조 타입의 값을 인자로 전달하는 경우에는 우리가 알고있는 `call by reference`를 다시 한번 생각을 하고 부작용이 없는 코드를 작성하는것이 중요하다. 함수 내에서 외부 변수에 접근을 하는 경우에도 마찬가지다.<br/>