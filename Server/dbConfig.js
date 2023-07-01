const config = {
  server: "127.0.0.1",
  database: "TidanGroup",
  driver: "TidanGroupDB",
  options: {
    trustedConnection: true,
    encrypt: false, // If using SSL/TLS encryption
  },
};

module.exports = config;
