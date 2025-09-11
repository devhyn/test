// Node.js의 기본 http 모듈을 가져옵니다.
const http = require('http');

// 서버가 실행될 호스트 이름과 포트 번호를 설정합니다.
const hostname = '127.0.0.1';
const port = 3000;

// http.createServer()를 사용해 서버를 생성합니다.
// 요청(req)이 들어올 때마다 응답(res)으로 "Hello, World!"를 보냅니다.
const server = http.createServer((req, res) => {
  res.statusCode = 200; // 성공적인 응답을 의미하는 상태 코드 200
  res.setHeader('Content-Type', 'text/plain'); // 응답 콘텐츠가 일반 텍스트임을 명시
  res.end('Hello, World!\n'); // 응답을 종료하며 메시지를 전송
});

// 설정한 포트와 호스트 이름으로 서버가 요청을 수신하도록 합니다.
server.listen(port, hostname, () => {
  // 서버가 성공적으로 시작되면 콘솔에 메시지를 출력합니다.
  console.log(`Server running at http://${hostname}:${port}/`);
});