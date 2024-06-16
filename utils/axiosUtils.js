const axios = require('axios');

const axiosInstance = axios.create({
  headers: {
    'Accept': 'application/json',
    'Accept-Encoding': 'gzip',
    'Connection': 'Keep-Alive',
    'Content-Type': 'application/json',
    'Host': 'app2.hm.com',
    'User-Agent': 'targetapp_android_22',
    'X-App-DeviceType': 'samsung SM-G988N',
    'X-App-Version': '24.21.1',
    'x-devID': 'cZvPYITlTe6Yt1NmLdiTJc',
    'X-OS-Version': '7.1.2'
  }
});

module.exports = axiosInstance;