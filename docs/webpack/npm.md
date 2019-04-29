# npm

## npm 최신 버전 업그레이드

- npm 디폴트 설치 경로 (노드 설치 경로랑 같음) : C:\Program Files (x86)\nodejs
- 글로벌 패키지 설치 경로 : C:\Users\<username>\AppData\Roaming\npm
1. `%ProgramFiles%\nodejs\npm`, `%ProgramFiles%\nodejs\npm.cmd`파일 삭제하기
2. npm 최신버전 설치

``` bash
npm install npm@latest
```

OR

``` bash
cd %ProgramFiles%\nodejs
npm install npm@latest
```

### 패키지 경로 확인 후 수정

- npm config get prefix -g 명령어로 글로벌 패키지 설치 경로 알 수 있음
- `%ProgramFiles%\nodejs\node_modules\npm\npmrc` 파일에서 셋팅
- `npm config set prefix "${APPDATA}/npm" -g` 명령어로도 셋팅 가능  
- [npm version DOC](https://docs.npmjs.com/try-the-latest-stable-version-of-npm)

## npm install / update / ci

- npm install
    - package.json에 새로 추가 된 모듈 설치
    - 모듈이 업데이트 됐어도 이미 설치 된 모듈 업데이트 안 함
    - package-lock.json 파일 생성
    - [npm install DOC](https://docs.npmjs.com/cli/install)
- npm update
    - 모듈 업데이트 됐을 때 package.json에 명시한 범위 안에서 업데이트
    - 새로 추가 된 모듈 설치
    - 업데이트 후 package.json 업데이트 버전으로 수정
    - package-lock.json 파일 생성
    - [npm update DOC](https://docs.npmjs.com/cli/update.html)
- npm ci
  - 설치 된 모듈 모두 삭제 후 package-lock.json으로 모듈 재 설치
  - npm install 보다 빠름
  - npm 5.7.0 부터 사용가능
  - [npm CI DOC](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)

## package-lock.json

- package.json에는 install, update 가능한 범위를 명시해 놓는다.
- npm intall은 로컬에 저장 돼 있는 모듈은 재 설치를 안하기 때문에 언제 install 했는지에 따라 다른 버전이 설치 될 수 있다.
- npm update는 명령어 입력 시점에서 update 가능한 범위 안에서 최신 범위로 업데이트 하기 때문에 update 명령 시점에 따라서 다른 버전이 설치 될 수 있다.
- package-lock.json은 install, update 시점에 생성되고 현재 설치 된 버전을 기록한다.

```js
        "@babel/code-frame": {
            "version": "7.0.0-beta.47",
            //현재 설치 된 버전
            "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.0.0-beta.47.tgz",
            "integrity": "sha512-W7IeG4MoVf4oUvWfHUx9VG9if3E0xSUDf1urrnNYtC2ow1dz2ptvQ6YsJfyVXDuPTFXz66jkHhzMW7a5Eld7TA==",
            "dev": true,
            "requires": {
                "@babel/highlight": "7.0.0-beta.47"
            }
        }
```

- npm install 시 package-lock.json이 있다면 package-lock.json에 명시된 버전으로 설치한다.
- npm update 시에 모듈이 업데이트 된다면 pakage.json, package-lock.json 업데이트 버전으로 수정.
- git에 package-lock.json를 올리고 npm ci를 사용하면 같은 버전의 형상을 쓸 수 있다.
- [npm package-lock DOC](https://docs.npmjs.com/files/package-locks)
- [npm ci DOC](https://docs.npmjs.com/cli/ci.html)

## package.json version syntex

- 노드 모듈 버전 범위 syntex
- [major, minor, patch]
  1. Hyphen : 하이픈으로 사이 범위값 명시  
    1.2.3 - 2.3.4
  2. X-Ranges : *, x, X로 명시  
    1.x  
    1.2.x
  3. Tilde Ranges : 명시한 범위는 안 바뀜, 명시 안 한 하위 버전 만 업데이트  
    ~1.2 == 1.2.x  
    ~1.2.3 == 1.2.3
  4. Caret Ranges : 0 버전이 아니면 마이너, 패치 버전 만 업데이트, 0버전은 안정화가 안돼서 크게 변하기 때문에 유지하는 컨셉  
    ^1.2.3 : >=1.2.3 <2.0.0  
    ^0.2.3 := >=0.2.3 <0.3.0  
    ^0.0.3 := >=0.0.3 <0.0.4
- [npm semver DOC](https://docs.npmjs.com/misc/semver)

## npm 레지스트리 경로 설정

- 넥서스와 같은 사내 내부 스토리지에서 모듈을 설치 하고자 할 경우
- npm config set resistry <경로>
- npm config list 로 확인
- C:\Users\<username>\npmrc 파일에 registry 경로 셋팅
``` bash
registry=<내부경로>
```
- [npm config doc](https://docs.npmjs.com/cli/config)