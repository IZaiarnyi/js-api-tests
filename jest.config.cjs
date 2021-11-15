let timeout = process.env.TIMEOUT || 60000

const config = {
    verbose: true,
    testTimeout: timeout,
    testRunner: "jest-jasmine2",
    setupFiles: ["dotenv/config"],
    reporters: ["default", "jest-allure"],
    setupFilesAfterEnv: ['jest-allure/dist/setup']
};
  
module.exports = config;