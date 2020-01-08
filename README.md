# Ahobsu-Node-Backend

유니큐와 유초코파이 노드로 탈주하다😎

<h1 align="center">Welcome to ahobsu 👋</h1>
<p>
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

# MashUp Node JS Project

### 💻 [API](http://ec2-54-175-1-15.compute-1.amazonaws.com/apiDocs/)

## 매일매일 미션을 수행하며 카드를 수집해 보자

### 주요 기능

- 로그인 회원가입
  - 구글 로그인
  - 애플 로그인
  - 회원 탈퇴
- 매일 새로운 미션 3가지 제공
  - 미션 재발급 기능(제한적으로 제공)
- 주별로 새로운 카드 세트 제공
- 답변작성
  - 당일 답변 수정
  - 일주일치 답변 조회
  - 특정날짜 답변 조회
- 파일
  - 이미지 업로드
  - 일주일치 이미지 제공

### 폴더 구조
bin - 서버에 대한 부가설명
config - 설정파일
lib - 공통함수 (helper)
middleware - 미들웨어 모아둔 곳 
models - data model
public - 정적파일
routes - 라우터
swagger - api docs and testing

### Quick Start

- node : v11.13.0
- npm : 6.7.0

- 의존성 설치

```sh
git clone https://github.com/mash-up-kr/Ahobsu-Node-Backend.git
cd Ahobsu-Node-Backend
npm install
```

- 개발 서버 시작

```sh
  npm start
```

- 배포 시작

```sh
  npm run depoly
```

### 써드파티 패키지

| 모듈 | 역할 | 사용한 부분 |
| ---- | ---- | ----------- |
| [aws-sdk](https://github.com/aws/aws-sdk-net) | Amazon Web Services and build scalable solutions with Amazon S3, Amazon DynamoDB, Amazon Glacier |   |
| [cookie-parser](https://github.com/expressjs/cookie-parser) | 쿠키파서 |   |
| [debug](https://www.npmjs.com/package/debug/v/2.6.9) | 노드 코어의 디버깅 기술을 모델로 한 작은 node.js 디버깅 유틸리티 |   |
| [dotenv](https://github.com/motdotla/dotenv) | nodejs 프로젝트를 위해 .env에서 환경 변수를로드 |   |
| [express](https://github.com/expressjs/express) | 미니멀리스트 웹 프레임 워크 |   |
| [formidable](https://github.com/node-formidable/node-formidable) | 파일 업로드를 구문 분석하기위한 node.js 모듈 |   |
| [greenlock-express](https://github.com/stampr/greenlock-express.js/tree/master) | 웹 서버 , 웹 브라우저 및 node.js 미들웨어 시스템을위한 인증서 |   |
| [http-errors](https://github.com/jshttp/http-errors) | Express, Koa, Connect 등에 대한 HTTP 오류를 쉽게 생성 |   |
| [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) | JSON 형태로 인증토큰을 만들어 통신할때쓰는 인증방식 |   |
| [moment](https://github.com/moment/moment) | 날짜관련 작업을 위한 자바스크립트 라이브러리 |   |
| [morgan](https://github.com/expressjs/morgan)| node.js 용 HTTP 요청 로거 미들웨어 |   |
| mysql2 | 데이터베이스 |   |
| [nodemon](https://github.com/remy/nodemon) | 디렉토리의 파일 변경이 감지되면 노드 응용 프로그램을 자동으로 다시 시작 |   |
| [pm2](https://github.com/Unitech/pm2) | JavaScript 런타임 Node.js의 프로세스 관리자 |   |
| redirect-https |   |   |
| [sequelize](https://github.com/sequelize/sequelize) | Node.js를위한 사용하기 쉬운 다중 SQL 언어 ORM  |   |
| [sequelize-cli](https://github.com/sequelize/cli) | Sequelize 명령 줄 인터페이스 (CLI) |   |
| [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) | 일을 기반으로 자동 생성 swagger-ui 생성 API 문서를 명시 적으로 제공 |   |

## Author

👤 **YuChocopie**

<img src="https://avatars2.githubusercontent.com/u/18034145?s=460&v=4" width=80/>

Github: [@YuChocopie](https://github.com/YuChocopie)

👤 **Yuni-Q**

<img src="https://avatars0.githubusercontent.com/u/18049757?s=460&v=4" width=80/>

Github: [@Yuni-Q](https://github.com/Yuni-Q)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/mash-up-kr/Ahobsu-Node-Backend/issues).

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
