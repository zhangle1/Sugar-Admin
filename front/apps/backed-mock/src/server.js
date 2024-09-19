// server.js
const express = require('express');
const cors = require('cors');
const authMock = require('./mock/authMock'); // 根据实际路径调整

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// 注册模拟接口
app.post('/auth/login', authMock.login);
app.post('/auth/refresh', authMock.refreshToken);
app.post('/auth/logout', authMock.logout);
app.get('/auth/codes', authMock.getAccessCodes);
app.get('/user/info', authMock.getUserInfo); // 注册获取用户信息接口

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});