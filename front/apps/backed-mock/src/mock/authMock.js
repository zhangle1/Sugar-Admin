// authMock.js
const jwt = require('jsonwebtoken');

const users = [
  { id: '1', username: 'user1', password: 'password1', realName: 'User One', avatar: 'avatar1.png', homePath: '/home/user1', roles: ['admin'] },
  { id: '2', username: 'user2', password: 'password2', realName: 'User Two', avatar: 'avatar2.png', homePath: '/home/user2', roles: ['user'] },
];

let refreshTokens = [];

/**
 * 登录接口
 */
function login(req, res) {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    const accessToken = jwt.sign({ id: user.id }, 'access_secret_key', { expiresIn: '15m' });
    const refreshToken = jwt.sign({ id: user.id }, 'refresh_secret_key');

    refreshTokens.push(refreshToken);

    return res.json({
      accessToken,
      desc: 'Login successful',
      realName: user.realName,
      userId: user.id,
      username: user.username,
    });
  } else {
    return res.status(401).send('Invalid credentials');
  }
}

/**
 * 刷新 Token 接口
 */
function refreshToken(req, res) {
  const { token } = req.body;

  if (!token || !refreshTokens.includes(token)) {
    return res.sendStatus(403);
  }

  jwt.verify(token, 'refresh_secret_key', (err, user) => {
    if (err) return res.sendStatus(403);

    const accessToken = jwt.sign({ id: user.id }, 'access_secret_key', { expiresIn: '15m' });
    res.json({ data: accessToken, status: 200 });
  });
}

/**
 * 退出登录接口
 */
function logout(req, res) {
  const { token } = req.body;
  refreshTokens = refreshTokens.filter(t => t !== token);
  res.sendStatus(204); // No Content
}

/**
 * 获取用户权限码接口
 */
function getAccessCodes(req, res) {
  res.json(['code1', 'code2', 'code3']); // 示例权限码
}

/**
 * 获取用户信息接口
 */
function getUserInfo(req, res) {
  const token = req.headers['authorization']?.split(' ')[1]; // 从 Authorization 头获取 Token
  if (!token) return res.sendStatus(401);

  jwt.verify(token, 'access_secret_key', (err, user) => {
    if (err) return res.sendStatus(403);
    
    const userInfo = users.find(u => u.id === user.id);
    if (userInfo) {
      res.json({
        desc: 'User info retrieved successfully',
        homePath: userInfo.homePath,
        token,
        avatar: userInfo.avatar,
        realName: userInfo.realName,
        roles: userInfo.roles,
        userId: userInfo.id,
        username: userInfo.username,
      });
    } else {
      res.sendStatus(404);
    }
  });
}

// 导出接口函数
module.exports = {
  login,
  refreshToken,
  logout,
  getAccessCodes,
  getUserInfo, // 添加获取用户信息接口
};