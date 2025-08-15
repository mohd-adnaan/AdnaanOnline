// In your webpack.config.js
module.exports = {
  // ... other config
  ignoreWarnings: [
    {
      module: /@mediapipe/
    }
  ]
};