const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast","api"
    ],
    target: "https://localhost:7118",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
