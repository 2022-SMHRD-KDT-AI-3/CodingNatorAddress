const mysql = require('mysql')  // mysql 프로그램을 가져온게 아니라 모듈을 가져온거임

// mysql연결 (ip주소, userid, password, port번호, 연결할데이터베이스)
let conn = mysql.createConnection({
    host: 'project-db-stu.ddns.net',
    user: 'campus_g_0325_6',
    password: 'smhrd6',
    port: '3307',
    database: 'campus_g_0325_6'
})

// DB연결 
conn.connect();

module.exports = conn;


// 저 연결 안에 요소값만 바뀔거임