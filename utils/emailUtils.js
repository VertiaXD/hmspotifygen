function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(7);
    return `user${randomString}@example.com`;
  }
  
  module.exports = generateRandomEmail;
  