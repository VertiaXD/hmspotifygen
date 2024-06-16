const axios = require('./axiosUtils');
const generateRandomEmail = require('./emailUtils');

const registrationUrl = 'https://app2.hm.com/tr_tr/register/newcustomer';

async function registerUser() {
  try {
    const email = generateRandomEmail();
    const password = "12345Alp.";

    const requestData = {
      "email": email,
      "pwd": password,
      "day": "2",
      "month": "6",
      "year": "2006",
      "birthDate": "2006-06-02",
      "hmNewsSubscription": false,
      "create-account-privacy-policy": true
    };

    const registrationResponse = await axios.post(registrationUrl, requestData);
      const cookies = registrationResponse.headers['set-cookie'];

    return cookies;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  registerUser
};
