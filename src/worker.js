self.onmessage = (event) => {
  // Load package
  const ARIMA = require("arima");

  // Synthesize timeseries
  const ts = Array(24)
    .fill(0)
    .map((_, i) => i + Math.random() / 5);
  console.log(ts);

  // Init arima and start training
  //   const arima = new ARIMA({
  //     p: 2,
  //     d: 1,
  //     q: 2,
  //     verbose: false,
  //   }).train(ts);

  //   // Predict next 12 values
  //   const [pred, errors] = arima.predict(12);

  self.postMessage(ts);
  self.close();
};
