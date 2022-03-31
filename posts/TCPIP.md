---
title: TCP/IP
contentsType: 기초
date: 2022.01.15
---



# TCP/IP

## TCP(Transmission Control Protocol)란?

**TCP**는 ‘전송 제어 프로토콜’로 주로 클라이언트와 서버간의 데이터를 
신뢰성 있게 통신할 때 사용한다.

#
- 연결 지향 프로토콜
- 데이터 누락, 패킷 순서 뒤바뀜 검사, 데이터 검사 및 교정 관련 기능이 있어
**신뢰성 있는 프로토콜** 로 불림


#
### 3-way handshaking

서로의 연결 상태 확인을 위해 여러 방법 중 **3-way handshaking** 이라는 방법을 사용 


#
1. Client가 서버에 SYN 이라는 요청 패킷을 송신
2. Server에서 ACK이라는 요청 응답 패킷과 SYN을 송신
3. Client가 이를 정상적으로 수신 했다면 다시 요청에 응답하는 ACK를 송신

---

## IP(Internet Protocol)란?

**IP**는 인터넷에 연결된 기기(장치)를 식별 할 수 있는 고유 주소다.


비유를 하자면 장치들의 ‘전화 번호’ 라고 생각을 한다.
#
### ipv4

- internet protocol version 4 말그대로 IP의 버전4다.
- 각 자리는 .으로 구분하는 8bit(0~255)의 숫자이며 총 32bit의 이진수다.

### ipv6

- internet protocol version 6 말 그대로 IP의 버전6이다
- ipv4의 한정적인 수로 인해 등장한 새로운 체계다.
- 16bit 씩 8자리며 각 자리는 콜론(:)으로 구분한다

### Reference

___

- [[네트워크] IP주소란? IPv4와 IPv6. IP주소는 왜 필요한가? 내 컴퓨터 IP 확인하는 법](https://jhnyang.tistory.com/245)

- [[ 네트워크 이해하기 Step4] TCP란?](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=yeopil-yoon&logNo=221297403864)

- [[TCP] 위키](https://ko.wikipedia.org/wiki/%EC%A0%84%EC%86%A1_%EC%A0%9C%EC%96%B4_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C)