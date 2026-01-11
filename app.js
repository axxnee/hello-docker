const http = require('http');

//웹서버 생성
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
            <p>ver1.1</p>
            <p>🎉 Docker 성공 🎉</p>
            <p>ver1.2</p>
            <p>desc 자동배포 구축 완료</p>
        `);
});

//3000번 포트 대기
server.listen(3000, () => {
    console.log('서버 실행중: http://localhost:3000');
}); 
