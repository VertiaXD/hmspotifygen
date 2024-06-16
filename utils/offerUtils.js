const axios = require('./axiosUtils');

const offersUrl = 'https://app2.hm.com/tr_tr/v1/offersProposition?businessPartnerId=3234629783&offerSpace=rewardSpace&maximumNumberOfOffers=50&getOffers=true&getCoupons=true&countryCode=TR';

async function getOffers(cookies) {
  try {
    const offersResponse = await axios.get(offersUrl, { headers: { Cookie: cookies } });
    return offersResponse.data;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getOffers
};
