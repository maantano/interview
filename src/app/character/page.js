import React from "react";

const page = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                인성
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                자신의 강점과 약점은 무엇인가요?
              </h2>
              <p className="leading-relaxed mb-8">
                저의 강점은 회복 탄력성이 남들보다 높다는 점입니다. 개발을
                하다보면, 막히는 부분도 있고 또 회사생활을 하다보면 낙담할때가
                있지 않습니까? 저는 안좋은 일이 있어도 그 감정에서 30분을 넘기지
                않으려고 합니다. 또한 약간의 집요한 구석이 있어서 막히는 부분이
                있다면 막히는 부분을 부셔버릴떄까지 찾아보고 해결하려는 약간의
                집요한 구석이 있습니다. 반면에 제 약점은 디테일한 부분에 부족한
                부분이 있습니다. 이전 회사에서도 기한이 좀 빠듯한 경우들이 자주
                있어 기능동작을 우선적으로 작업하고 이후 리팩토링을 하는
                경우들이 있었습니다.
              </p>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  6
                </span>
              </div>
              <a className="inline-flex items-center">
                <img
                  alt="blog"
                  src="https://dummyimage.com/104x104"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    Holden Caulfield
                  </span>
                  <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                    UI DEVELOPER
                  </span>
                </span>
              </a>
            </div>
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                개발
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                어떤 프레임워크를 사용하여 개발했나요? 왜 그 프레임워크를
                선택했나요?
              </h2>
              <p className="leading-relaxed mb-8">
                저는 React를 선호합니다. 이유는 React가 사용자 인터페이스 구축과
                관리를 쉽게 할 수 있는 사용자 측 라이브러리이기 때문입니다.또한
                리액트 컴포넌트는 모듈화를 통해서 개발 생산성을 높이고, 코드
                유저 보수성을 높일 수 있습니다. 최근에는 Next 프레임워크를
                사용해 봤는데, 코드 분할, 경로 기반 프리페칭 장점이 많다고
                하지만, SSR 과 Next 라우터가 꽤나 직관적이고 강력하다고
                생각했습니다.
              </p>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  6
                </span>
              </div>
              <a className="inline-flex items-center">
                <img
                  alt="blog"
                  src="https://dummyimage.com/103x103"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    Alper Kamu
                  </span>
                  <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                    DESIGNER
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                개발
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                CSR 장단점
              </h2>

              <p className="leading-relaxed mb-8">
                <span className="mb-2 inline-block py-1 px-5 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                  장점
                </span>
                <br />
                CSR의 장점은 Javascript를 사용해서 동적으로 Dom을 그려내기
                때문에 원하는 내용만 업데이트를 할 수 있습니다. 예를 들어 링크
                이동을 클릭했을 때 헤더, 푸터와 같이 중복되는 내용은 고정으로
                두고 안에 콘텐츠만 업데이트하여 로드할 수 있습니다.
                <br />
                <span className="my-2 inline-block py-1 px-5 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                  단점
                </span>
                <br />
                단점은 HTML 파일을 하나만 받아와서 작동하다 보니 각각 페이지에
                대한 정보를 담기 힘들어 SEO에 취약합니다. 첫 로드 시 모든 로직이
                담겨있는 Javascript를 다운로드하다 보니 첫 진입 시 로딩 속도가
                길다는 단점이 있습니다.
              </p>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  6
                </span>
              </div>
              <a className="inline-flex items-center">
                <img
                  alt="blog"
                  src="https://dummyimage.com/104x104"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    Holden Caulfield
                  </span>
                  <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                    UI DEVELOPER
                  </span>
                </span>
              </a>
            </div>
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                개발
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                SSR 장단점
              </h2>
              <p className="leading-relaxed mb-8">
                <span className="mb-2 inline-block py-1 px-5 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                  장점
                </span>
                <br />
                CSR은 모든 로직이 담겨 있는 Javascript 파일을 다운로드했지만,
                SSR은 클라이언트에서 요청한 페이지의 HTML을 다운로드하기 때문에
                CSR보다 초기 진입 시 로딩이 빠릅니다. 서버에서 렌더링 후 개별
                페이지를 넘겨받는 것이므로 각 페이지에 대한 정보를 입력하기
                쉽습니다. 그러므로 CSR보다 SEO를 향상할 수 있습니다.
                <br />
                <span className="my-2 inline-block py-1 px-5 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                  단점
                </span>
                <br />
                링크 이동 클릭 시 새로운 HTML 파일 자체를 서버에서 받아오기
                때문에 화면 깜빡임 현상이 있습니다. 부분 업데이트하는 CSR 과는
                달리 클릭했을 때 새로운 HTML을 받아오기 때문입니다. 또한 헤더,
                푸터처럼 중복되는 내용도 다시 렌더링하여 받는 것입니다. 그래서
                초기 진입은 CSR보다 빠를지 몰라도 페이지 이동은 SSR이 더 느린
                편에 속합니다. 또한 SSR은 완성된 HTML을 Javascript 파일보다 먼저
                받아오기 때문에 완성된 HTML로 화면은 확인되지만, Javascript
                다운로드가 늦어진다면 기능이 동작하지 않는 경우가 있습니다.
              </p>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  6
                </span>
              </div>
              <a className="inline-flex items-center">
                <img
                  alt="blog"
                  src="https://dummyimage.com/103x103"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    Alper Kamu
                  </span>
                  <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                    DESIGNER
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                개발
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                RESTful API 에 대해 설명해주세요.
              </h2>

              <div className="leading-relaxed mb-8">
                RESTful API는 HTTP 프로토콜을 기반으로 하는 웹 서비스 아키텍쳐
                입니다. 자원, 메소드, 메시지 등을 정의하여 클라이언트 와 서버
                간의 통신을 가능하게 합니다. 또한 RESTful API 표준 HTTP 메소드는
                (GET,POST,PUT,DELETE)를 사용하여 서버와 통신합니다/
                {/* <hr className="my-5" /> */}
                <p className="inline-block  mb-2 py-1 px-2 rounded bg-green-100 text-green-800 text-xs font-medium tracking-widest">
                  요약
                </p>
                <br />
                <ul>
                  <li>
                    GET: 서버에서 리소스(데이터)를 요청하는 메소드입니다. 요청한
                    데이터를 가져와 응답합니다.
                  </li>
                  <li>
                    POST: 서버에 데이터를 전송하는 메소드입니다. 데이터를
                    전송하여 서버에서 처리하고, 처리 결과를 응답합니다.
                  </li>
                  <li>
                    PUT: 서버에 데이터를 업데이트하는 메소드입니다. 요청한
                    데이터를 서버에 저장하고, 처리 결과를 응답합니다.
                  </li>
                  <li>
                    DELETE: 서버에서 데이터를 삭제하는 메소드입니다. 요청한
                    데이터를 서버에서 삭제하고, 처리 결과를 응답합니다.
                  </li>
                </ul>
              </div>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  6
                </span>
              </div>
              <a className="inline-flex items-center">
                <img
                  alt="blog"
                  src="https://dummyimage.com/104x104"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    Holden Caulfield
                  </span>
                  <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                    UI DEVELOPER
                  </span>
                </span>
              </a>
            </div>
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                개발
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                HTTP 메소드
              </h2>
              <div className="leading-relaxed mb-8">
                조회: GET 등록: POST 수정: PUT 삭제: DELETE
                <br />
                <span className="mb-2 inline-block py-1 px-5 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                  GET
                </span>
                <p>
                  1. HTTP 명세에 의하면 GET 요청은 오로지 데이터를 읽을 때만
                  사용되고 수정할 때는 사용하지 않는다.
                </p>
                <p>
                  2. 같은 요청을 여러 번 하더라도 변함없이 항상 같은 응답을 받을
                  수 있다.
                </p>
                <p>3. 헤더 담아 보낸다.</p>
                <br />
                <span className="mb-2 inline-block py-1 px-5 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                  POST
                </span>
                <p>
                  1. POST 메소드는 주로 새로운 리소스를 생성(create)할 때
                  사용된다.
                </p>
                <p>
                  2. 같은 POST 요청을 반복해서 했을 때 항상 같은 결과물이 나오는
                  것을 보장하지 않는다
                </p>
                <p>
                  3. URL을 통해서 데이터를 받지 않고, Body 값을 통해서 받는다.
                </p>
                <br />
                <span className="mb-2 inline-block py-1 px-5 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                  PUT
                </span>
                <p>
                  1.PUT는 리소스를 생성 / 업데이트하기 위해 서버로 데이터를
                  보내는 데 사용됩니다.
                </p>
                <p>
                  2. URL을 통해서 어떠한 데이터를 수정할지 파라메터를 받는다.
                  그리고 수정할 데이터 값을 Body 값을 통해서 받는다.
                </p>
                <br />
                <span className="mb-2 inline-block py-1 px-5 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                  DELETE
                </span>
                <p>1. DELETE 메서드는 지정된 리소스를 삭제합니다.</p>
                <p>2. Body 값 없이 성공 여부 응답만 보낸다.</p>
                <br />
              </div>
              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <a className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  1.2K
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                  6
                </span>
              </div>
              <a className="inline-flex items-center">
                <img
                  alt="blog"
                  src="https://dummyimage.com/103x103"
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-gray-900">
                    Alper Kamu
                  </span>
                  <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                    DESIGNER
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                개발
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                CSRF & XSS 공격
              </h2>
              <div className="leading-relaxed mb-8">
                <span className="mb-2 mr-2 inline-block py-1 px-5 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                  CSRF 공격
                </span>
                CSRF 공격은 특정 웹사이트가 사용자의 브라우저를 신용하여
                발생하는 공격이다.
                <br />
                <span className="mb-2 mr-2 inline-block py-1 px-5 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                  XSS 공격
                </span>
                (사이트 간 스크립팅) 공격은 사용자가 웹사이트를 신용하여 악성
                스크립트가 실행된다.
                <br />
                <span className="mb-2 mr-2 inline-block py-1 px-5 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                  요약
                </span>
                XSS 공격은 악성 코드가 클라이언트에서 발생하는데 반에, CSRF
                공격은 악성 코드가 서버에서 발생한다고 볼 수 있다.
              </div>
            </div>
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                개발
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                CSRF나 XSS 공격을 막는 방법은?
              </h2>
              <div className="leading-relaxed mb-8">
                CSRF 공격을 막기 위해서는 서버에서 CSRF Token을 생성하여 세션에
                저장하고, 프론트엔드 요청 시 해당 Token을 함께 전송하여
                인증한다. Samesite 속성을 쿠키에 설정하여 다른 도메인에서는
                쿠키를 사용하지 못하도록 제한한다. XSS 공격을 막기 위해서는 입력
                값들의 유효성 검증을하고, 특수문자를 제외하는 정규식을 통해
                제거한다. CSP(Content-Security-Policy) 정책을 설정하여, 허용된
                스크립트만 실행되도록 제한 할 수 있다. HTTPS을 사용하여 통신
                프토콜을 암호화할 수 있도록 한다.
              </div>
            </div>
          </div>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                개발
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                async/await에 대해 설명해보세요.
              </h2>
              <div className="leading-relaxed mb-8">
                <span className="mb-2 mr-2 inline-block py-1 px-5 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                  요약
                </span>
                async/await는 비동기적인 작업을 처리할 수 있는 문법 입니다.
                async 함수를 정의하면 함수 내부에서 await 키워드를 이용하여
                비동기적으로 처리되는 작업이 완료될 때까지 기다린 후, 결과값을
                반환하는 처리를 할 수 있습니다. async/await는 Promise를 기반으로
                하며, 코드를 보다 간결하고 직관적으로 작성할 수 있도록 해줍니다.
                async 함수는 항상 Promise 객체를 반환하며, await 키워드를
                이용하여 비동기 처리를 기다립니다.
              </div>
            </div>
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                개발
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                Promise
              </h2>
              <div className="leading-relaxed mb-8">
                - 비동기 처리 시점을 명확하게 표현할수 있는 패턴입니다.
                <br /> - 프로미스는 Promise 생성자 함수를 통해 인스턴스화한다
                Promise 생성자 함수는 비동기 작업을 수행할 콜백 함수를 인자로
                전달 받는데, 이 콜백 함수는 resolve, reject 함수를 인자로
                받습니다.
                <br /> - pending,fuillfiled,rejected,settld 상태 정보를
                갖습니다.
                <br />
                비동기 함수 내에서 Promise 객체를 생성하고 그 내부에서 비동기
                처리를 구현한다. 이때 비동기 처리에 성공하면 resolve 메소드를
                호출한다.
                <br />
                이때 resolve 메소드의 인자로 비동기 처리 결과를 전달 하는데, 이
                처리 결과는 Promise 객체의 후속 처리 메소드로 전달된다. <br />
                만약 비동기 처리에 실패하면 reject 메소드를 호출한다. 이때
                reject 메소드의 인자로 에러 메시지를 전달한다. 이 에러 메시지는
                Promise 객체의 후속 처리 메소드로 전달된다.
                <br /> 후속 처리 메소드에는 대표적으로 then(Promise 반환)과
                catch(예외)가 있다.
              </div>
            </div>
          </div>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                개발
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                브라우저 렌더링 원리에 대해서 설명해보세요.
              </h2>
              <div className="leading-relaxed mb-8">
                브라우저 렌더링은 HTML, CSS, JavaScript 등의 웹 페이지 자원을
                브라우저가 화면에 그리는 과정을 말합니다. 브라우저 렌더링 원리와
                순서는 크게 다음과 같은 단계로 구성됩니다. 먼저 DOM을
                생성합니다. 브라우저는 HTML 문서를 파싱하여 DOM 트리를
                생성합니다. 이때, HTML 태그를 노드로 변환하고, 노드간의 계층
                관계를 형성합니다. 두 번째로 CSSOM을 생성합니다. 브라우저는 CSS
                파일을 파싱하여 CSSOM 트리를 생성합니다. 이때, CSS 속성을 노드로
                변환하고, 노드간의 계층 관계를 형성합니다. 세 번째로 DOM트리와
                CSSOM을 결합하여 렌더 트리를 생성 합니다. 이때, 실제 화면에
                표시될 요소만을 선택하여 렌더 트리를 형성합니다. 이제,
                브라우저는 렌더 트리를 이용하여 각 요소의 크기와 위치를 계산하는
                과정인 레이아웃을 거쳐 화면에 요소를 그리는 페인팅 과정을 거치게
                됩니다. 이때, 요소의 배경, 테두리, 글자 등을 그리게 됩니다.
              </div>
            </div>
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                개발
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                가장 최근에 해결한 기술적인 문제는 무엇이었나요?
              </h2>
              <div className="leading-relaxed mb-8">
                최근에 개발한 API들을 파이어베이스로 마이그레이션 하는 경험이
                있습니다. 파이어베이스 사용은 처음이라 학습을 하면서 적용을
                했습니다. RDB를 사용하다가 NoSQL은 처음 사용해봤는데, 조회를
                주로 하는 프로젝트라 사용에 앎맞은 적용인것같았습니다. 최근
                논문의 글을 읽었는데, RDB 와 NoSQL의 실질적인 퍼포먼스 비교를 한
                내용이었습니다. 제가 아주 깊이 다양한 조건들을 셋팅해서 확인을
                할 수는 없었지만, 해당 내용에는 전반적으로 3배 이상 빠른것을 볼
                수 있었습니다. 아무래도 Key-value 타입은 GET, SET 명령으로
                단순히 읽고 쓰기기 때문에 속도가 낮을 수밖에 없는 것 같습니다.
                이러한 결과로 볼 때 NoSQL은 전반적으로 RDB보다 빠른 처리 속도를
                지원하는 것을 알 수 있었습니다. 그러나 이러한 결과만으로 둘 중
                어떤 데이터베이스 타입이 절대적으로 좋다고 말할 수는 없다고
                생각합니다. ACID 원칙으로 엄격하게 데이터의 형태를 유지하고
                일관성을 보장하는 관계형 데이터베이스나 느슨하지만 높은 성능을
                보장하는 NoSQL 데이터베이스를 비즈니스 로직에 따라 적절히
                분배하여 사용하는 편이 좋을 것이라고 생각합니다.
              </div>
            </div>
          </div>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                개발
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                해당 프로젝트에서 자신의 역할은 무엇이었나요?
              </h2>
              <div className="leading-relaxed mb-8">
                B2C 플랫폼인 위빌더에서는 사용자들이 자신들의 홈페이지, 쇼핑몰을
                제작할 수 있는 웹 에디터와 플랫폼 백오피스의 전반적인 UI/UX 개발
                했습니다. 그리고 B2B에서는 주문도메인을 백오피스를 개발했습니다.
                그리고 서버 관리 부서가 따로 있었지만 각 서비스 마다 서버
                담당자가 있었는데, 제가 부담당을 했었습니다. 그래서 기본적인
                트러블 슈팅이나 쉘 관리 같은 내용들을 한 경험이 있습니다. 개발
                팀에서는 후임 직원이 3명 있었고 선임 직원이 3명이 있었습니다.
                중간급 직원으로 팀 분위기 관련해서 중요한 역할을 했다고
                생각하고, 기획, 퍼블, 디자인, 같은 타 팀과 협의를 할때 다소
                냉랭해질수 있는 분위기를 자알 풀었다고 생각합니다. 종료 후에는
                유지 보수와 서비스 최적화를 진행 하였습니다.
              </div>
            </div>
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                개발
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                호이스팅에 대해 설명해보세요.
              </h2>
              <div className="leading-relaxed mb-8">
                실행 컨텍스트 생성 시 렉시컬 스코프 내의 선언이 끌어올려 지는 게
                호이스팅입니다.
                <br />
                호이스팅은 변수와 함수 선언이 스코프(scope)의 최상단으로 올려져
                실행되는 것을 의미합니다. 이로 인해 선언 전에 사용하는 경우
                오류가 발생할 수 있습니다. 여기서 주의할 점은 &quot;선언문&quot;
                이라는 것이며, &quot;대입문(할당)&quot;은 끌어올려지지 않는다는
                점입니다. 컴파일러는 자바스크립트 엔진이 인터프리팅 하기 전에
                컴파일을 하는데 선언과 대입을 구분합니다. 는 선언, 초기화가
                동시에 이루어 지기 때문에, undefined를 출력하지만, let,const 는
                선언과 초기화를 분리해서 해, 선언단계만 호이스팅되기 때문에
                Reference Error를 출력한다. TDZ(Temporal Dead Zone)에 빠진다.
                함수 선언문의 경우도 호이스팅 됩니다.
                <br />
                렉시컬 스코프 : 중첩된 함수 그룹에서 내부 함수가 상위 범위의
                변수 및 기타 리소스에 엑세스 할 수 있음을 의미한다. 함수를
                어디서 선언하였는지에 따라 상위 스코프를 결정한다는 뜻이며, 가장
                중요한 점은 어디서 호출 하는지가 아니라 어디에 선언 되었는지에
                따라 결정된다.
              </div>
            </div>
          </div>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                개발
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                &quot;==&quot; 와 &quot;===&quot;의 차이는 무엇인가요?
              </h2>
              <div className="leading-relaxed mb-8">
                &quot;==&quot;는 동등 연산자로, 두 값을 비교할 때 형변환(type
                coercion)을 수행합니다. 즉, 비교하는 값의 데이터 타입이
                다르더라도 자동으로 형변환을 수행한 후에 비교합니다.
                <br />
                &quot;===&quot;는 일치 연산자로, 두 값이 데이터 타입과 값이 모두
                같은지 비교합니다. 따라서 &quot;===&quot;를 사용하면 형변환 없이
                정확한 값을 비교할 수 있습니다.
              </div>
            </div>
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                개발
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                이벤트 버블링에 대해서 설명해주세요.
              </h2>
              <div className="leading-relaxed mb-8">
                이벤트 버블링(event bubbling)은 HTML 에서 이벤트가 발생했을 때,
                해당 요소에서 이벤트가 처리된 후, 상위 요소로 이벤트가 전파되는
                현상을 말합니다. 이벤트 버블링은 이벤트가 전파되는 동안 부모
                요소에서도 이벤트를 감지할 수 있다는 장점이 있습니다. 즉,
                이벤트를 처리하는 핸들러 함수를 부모요소에 등록해 놓으면, 자식
                요소에서 발생한 이벤트도 모두 처리 할 수 있습니다. 이를 활용
                하면, 여러 개의 하위요소에서 발생하는 이벤트를 하나의 이벤트
                핸들러로 바인딩하는 이벤트 위임 처리를 할 수 있습니다. 버블링 및
                캡쳐링을 방지하기 위해서는 이벤트 객체의 stopPropagation()
                메서드를 사용하여 이벤트 전파를 중지시키거나, 이벤트 핸들러에서
                이벤트가 발생한 요소를 확인하여 처리해야 합니다.
              </div>
            </div>
          </div>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                개발
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                클로저란 무엇인가요?
              </h2>
              <div className="leading-relaxed mb-8">
                함수가 선언될 때 자동으로 생성되는 렉시컬 환경에 대한
                설명입니다. 이러한 렉시컬 환경은 스코프 체인을 형성하게 되는데,
                스코프 체인은 함수가 선언될 때의 모든 변수와 함수를 포함하는
                렉시컬 스코프를 형성합니다. 외부 함수가 실행 되고 반환된 후에도
                외부 함수의 범위 내의 함수에 체이닝을 할 수 있는 함수입니다.
                정보를 은닉하기 위해서 사용합니다. 프로젝트에서 카운터나 토글
                관련해서 작업 내용이 있었는데, 클로저의 대표적인 적용예제라고
                해서 당시에 적용해봤던 경험이 있습니다.
                <br />
                자바스크립트에는 없는 캡슐화라는 개념을 구현할 수 있고 정보
                은닉과 캡슐화가 가져다주는 이점들을 얻을 수 있다.
              </div>
            </div>
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                개발
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                클래스형 컴포넌트와 함수형 컴포넌트의 차이는 무엇일까요?
              </h2>
              <div className="leading-relaxed mb-8">
                리액트에서 컴포넌트를 만드는 방법에는 클래스형 컴포넌트와 함수형
                컴포넌트가 있습니다. 클래스형 컴포넌트는 ES6의 클래스를 사용하여
                컴포넌트를 정의합니다. 이 방식은 리액트 컴포넌트의 상태 와
                생명주기를 다룰 떄 매우 유용합니다. 반며에 함수형 컴포넌트는
                ES6의 화살표 함수를 사용하여 컴포넌트를 정의힙니다. 이 방식은 훅
                API 와 함께 많이 사용되며, 컴포넌트의 상태와 생명주기를 다룰
                떄도 유용합니다. 클래스형 컴포넌트와 함수형 컴포넌트의 가장 큰
                차이점은 상태와 생명주기의 다루는 방식입니다. 클래스형
                컴포넌트는 상태로 this.state로 정의하고, 생명주기 메서드를
                오버라이드 하여 다양한 작업을 수행합니다. 반면에 함수형
                컴포넌트는 상태를 useState 훅을 사용하여 정의하고, useEffect
                훅을 사용하여 생명주기를 다룹니다. 또한 클래스형 컴포넌트느는
                this 키워드를 사용하여 상태나 메서드를 참조하며, 함수형
                컴포넌트에서는 this 키워드를 사용하지 않습니다 이러한 차이점
                때문에, 함수형 컴포넌트는 더 간결하고 가독성이 좋아지며,
                테스트와 리팩토링이 쉽게 이루어 집니다.
              </div>
            </div>
          </div>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                개발
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                TDD란 무엇인가요?
              </h2>
              <div className="leading-relaxed mb-8">
                TDD(Test-Driven Development)는 테스트 주도 개발 방법론의 준말로,
                개발자가 코드를 작성하기 전에 먼저 테스트 케이스를 작성하고 이를
                통과시키는 것을 중심으로 개발을 진행하는 방법입니다. TDD는 코드
                품질을 향상시키고 버그를 미리 발견하여 개선하는 데 도움이
                됩니다. 또한, 코드 변경 시 이전에 작성된 테스트 케이스를
                수행하여 기존 코드의 영향을 미치는 부분을 파악하고, 안정적인
                코드 개발에 도움을 줍니다. Jest 가 대표적인 도구로 toBe,
                toEqual,tobeTruthy,tobeFalsy,toContain 같은 matcher 함수들로
                테스트를 진행합니다. 저도 실제로 업무에서 도입하고 하나하나
                작성을 초기에는 했었는데, 이게 일이 바쁘고 기한은 촉박하니까 잘
                안하게 되더라구요 부서 내부적으로 그래서 다음 업무에서는 꼭
                TDD를 경험하고싶습니다.
              </div>
            </div>
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                개발
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                클래스형 컴포넌트와 함수형 컴포넌트의 차이는 무엇일까요?
              </h2>
              <div className="leading-relaxed mb-8">
                리액트에서 컴포넌트를 만드는 방법에는 클래스형 컴포넌트와 함수형
                컴포넌트가 있습니다. 클래스형 컴포넌트는 ES6의 클래스를 사용하여
                컴포넌트를 정의합니다. 이 방식은 리액트 컴포넌트의 상태 와
                생명주기를 다룰 떄 매우 유용합니다. 반며에 함수형 컴포넌트는
                ES6의 화살표 함수를 사용하여 컴포넌트를 정의힙니다. 이 방식은 훅
                API 와 함께 많이 사용되며, 컴포넌트의 상태와 생명주기를 다룰
                떄도 유용합니다. 클래스형 컴포넌트와 함수형 컴포넌트의 가장 큰
                차이점은 상태와 생명주기의 다루는 방식입니다. 클래스형
                컴포넌트는 상태로 this.state로 정의하고, 생명주기 메서드를
                오버라이드 하여 다양한 작업을 수행합니다. 반면에 함수형
                컴포넌트는 상태를 useState 훅을 사용하여 정의하고, useEffect
                훅을 사용하여 생명주기를 다룹니다. 또한 클래스형 컴포넌트느는
                this 키워드를 사용하여 상태나 메서드를 참조하며, 함수형
                컴포넌트에서는 this 키워드를 사용하지 않습니다 이러한 차이점
                때문에, 함수형 컴포넌트는 더 간결하고 가독성이 좋아지며,
                테스트와 리팩토링이 쉽게 이루어 집니다.
              </div>
            </div>
          </div>
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                개발
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                Static Site Generator에 대해서 아시나요?
              </h2>
              <div className="leading-relaxed mb-8">
                Static Site Generator(SSG)는 정적인 HTML, CSS, JavaScript 파일을
                생성하는 소프트웨어입니다. SSG를 사용하면 동적인 서버 측
                프로그래밍 없이 정적인 웹 페이지를 생성할 수 있습니다. 이에 대한
                몇 가지 장점은 다음과 같습니다. 정적인 파일을 생성하기 때문에,
                웹 서버의 보안에 대한 걱정이 줄어듭니다. 정적인 파일은 웹
                브라우저에 의해 더 빠르게 다운로드됩니다. 따라서 로딩 속도가
                향상되며 사용자 경험이 좋아집니다. GatsbyJS, Next.js, Hugo,
                Jekyll 등과 같은 플랫폼들이 있습니다.
              </div>
            </div>
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                개발
              </span>
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                클래스형 컴포넌트와 함수형 컴포넌트의 차이는 무엇일까요?
              </h2>
              <div className="leading-relaxed mb-8">
                리액트에서 컴포넌트를 만드는 방법에는 클래스형 컴포넌트와 함수형
                컴포넌트가 있습니다. 클래스형 컴포넌트는 ES6의 클래스를 사용하여
                컴포넌트를 정의합니다. 이 방식은 리액트 컴포넌트의 상태 와
                생명주기를 다룰 떄 매우 유용합니다. 반며에 함수형 컴포넌트는
                ES6의 화살표 함수를 사용하여 컴포넌트를 정의힙니다. 이 방식은 훅
                API 와 함께 많이 사용되며, 컴포넌트의 상태와 생명주기를 다룰
                떄도 유용합니다. 클래스형 컴포넌트와 함수형 컴포넌트의 가장 큰
                차이점은 상태와 생명주기의 다루는 방식입니다. 클래스형
                컴포넌트는 상태로 this.state로 정의하고, 생명주기 메서드를
                오버라이드 하여 다양한 작업을 수행합니다. 반면에 함수형
                컴포넌트는 상태를 useState 훅을 사용하여 정의하고, useEffect
                훅을 사용하여 생명주기를 다룹니다. 또한 클래스형 컴포넌트느는
                this 키워드를 사용하여 상태나 메서드를 참조하며, 함수형
                컴포넌트에서는 this 키워드를 사용하지 않습니다 이러한 차이점
                때문에, 함수형 컴포넌트는 더 간결하고 가독성이 좋아지며,
                테스트와 리팩토링이 쉽게 이루어 집니다.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
