const http = require('http');

//웹서버 생성
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
            <h1>🎉 Docker 성공 🎉</h1>
            <p>ver1.1</p>
        `);
});

//3000번 포트 대기
server.listen(3000, () => {
    console.log('서버 실행중: http://localhost:3000');
}); // workflow test
