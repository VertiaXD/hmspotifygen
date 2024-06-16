const axios = require('./axiosUtils');
const fs = require('fs');

let promoCodeCount = 0; // Initialize promo code count

async function redeemOfferAndSavePromotionCode(cookies, userData, offer) {
  try {
    const requestOptions = {
      method: 'POST',
      url: 'https://app2.hm.com/tr_tr/loyalty/redeemOffer',
      headers: {
        'Accept': 'application/json',
        'Accept-Encoding': 'gzip',
        'Connection': 'Keep-Alive',
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        'Cookie': cookies,
        'User-Agent': 'targetapp_android_22',
        'X-App-DeviceType': 'samsung SM-G988N',
        'X-App-Version': '24.21.1',
        'x-devID': 'cZvPYITlTe6Yt1NmLdiTJc',
        'X-OS-Version': '7.1.2'
      },
      data: {
        customerLoyaltyId: '115713343531676',
        offerKey: 'OFR81205',
        offerPropositionId: '1799182701',
        offerType: 'ZR12',
        pointsImpactFlag: '0',
        pointsImpactValue: '0',
        propositionStatusId: '3',
        $stable: '8',
        CREATOR: 'fm.b@cde62cc',
        Companion: 'kt.b@2926915',
        OFFER_DETAILS_PROPOSITION_REQUEST_CODE: '2',
        REDEEM_PROPOSITION_REQUEST_CODE: '3'
      }
    };

    const redeemResponse = await axios(requestOptions);

    if (redeemResponse.data && redeemResponse.data.promotionCode !== undefined) {
      const promotionCode = redeemResponse.data.promotionCode;
      const dataToWrite = `${promotionCode}\n`;
      fs.appendFileSync('promotionCodes.txt', dataToWrite);
      promoCodeCount++; // Increment promo code count
      process.title = `Promo Codes Generated: ${promoCodeCount}`; // Update process title
      console.log('[SUCCESS] Successfully Generated Promo Code.');
    } else {
      console.log('[ERROR] Error Occurred While Generating Promo!');
    }

    return redeemResponse.data;
  } catch (error) {
    console.error('[ERROR] Error Occurred While Generating Promo!');
    throw error;
  }
}

module.exports = redeemOfferAndSavePromotionCode;