/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
