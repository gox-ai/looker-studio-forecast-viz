const dscc = require("@google/dscc");
const viz = require("@google/dscc-scripts/viz/initialViz.js");
const local = require("./localMessage.js");
const d3 = require("d3");
import { getHeight, getWidth } from "@google/dscc";
// const Ml = require("./ml.min.js")
const HoltWinters = require("./holt_winters.js");
const moment = require("moment-timezone");
// const holtWinters = require("holtwinters")
// console.log(holtWinters)

// let augmentedDataSet = holtWinters.getAugumentedDataset

// write viz code here
// const drawViz = async (dataIn) => {
//   // let worker = new Worker("./worker.js");
//   // worker.onmessage = (event) => {
//   //   const num = event.data;
//   //   console.log(num);
//   // };
//   // worker.postMessage(dataIn);
//   const parseTime = d3.timeParse("%Y%m%d");
//   const tblList = dataIn.tables.DEFAULT;
//   let history = tblList.map((row) => {
//     return {
//       date: parseTime(row["dateID"][0]),
//       metric: row["metricID"][0],
//     };
//   });
//   console.log(history);
//   // let forecast = (
//   //   await axios.post("https://devdev.gox.ai/aravind/predict", {
//   //     historyData: tblList,
//   //   })
//   // ).data;

//   console.log(HoltWinters)
//   const hotWinters = new HoltWinters(1, 1, 2, 7)
//   console.log("history", history)
//   const historyNumbers = history.map(d => d?.metric)
//   // const predictedHistoryNumber = hotWinters.fit(historyNumbers)
//   // const predictedValues = hotWinters.predict(10)
//   // console.log(predictedValues)

//   console.log(HoltWinters)
//   let forecast = []
//   //   {
//   //     "dateID": [
//   //       "20221127"
//   //     ],
//   //     "metricID": [
//   //       56
//   //     ]
//   //   },
//   //   {
//   //     "dateID": [
//   //       "20221128"
//   //     ],
//   //     "metricID": [
//   //       245
//   //     ]
//   //   },
//   //   {
//   //     "dateID": [
//   //       "20221129"
//   //     ],
//   //     "metricID": [
//   //       220
//   //     ]
//   //   },
//   //   {
//   //     "dateID": [
//   //       "20221130"
//   //     ],
//   //     "metricID": [
//   //       206
//   //     ]
//   //   },
//   //   {
//   //     "dateID": [
//   //       "20221201"
//   //     ],
//   //     "metricID": [
//   //       204
//   //     ]
//   //   },
//   //   {
//   //     "dateID": [
//   //       "20221202"
//   //     ],
//   //     "metricID": [
//   //       191
//   //     ]
//   //   },
//   //   {
//   //     "dateID": [
//   //       "20221203"
//   //     ],
//   //     "metricID": [
//   //       95
//   //     ]
//   //   },
//   //   {
//   //     "dateID": [
//   //       "20221204"
//   //     ],
//   //     "metricID": [
//   //       79
//   //     ]
//   //   },
//   //   {
//   //     "dateID": [
//   //       "20221205"
//   //     ],
//   //     "metricID": [
//   //       149
//   //     ]
//   //   },
//   //   {
//   //     "dateID": [
//   //       "20221206"
//   //     ],
//   //     "metricID": [
//   //       226
//   //     ]
//   //   },
//   //   {
//   //     "dateID": [
//   //       "20221207"
//   //     ],
//   //     "metricID": [
//   //       132
//   //     ]
//   //   }
//   // ]
//   // let forecast = [
//   //   {
//   //     "dateID": [
//   //       "20221127"
//   //     ],
//   //     "metricID": [
//   //       56
//   //     ]
//   //   },
//   //   {
//   //     "dateID": [
//   //       "20221128"
//   //     ],
//   //     "metricID": [
//   //       245
//   //     ]
//   //   },
//   //   {
//   //     "dateID": [
//   //       "20221129"
//   //     ],
//   //     "metricID": [
//   //       220
//   //     ]
//   //   },
//   //   {
//   //     "dateID": [
//   //       "20221130"
//   //     ],
//   //     "metricID": [
//   //       206
//   //     ]
//   //   },
//   //   {
//   //     "dateID": [
//   //       "20221201"
//   //     ],
//   //     "metricID": [
//   //       204
//   //     ]
//   //   },
//   //   {
//   //     "dateID": [
//   //       "20221202"
//   //     ],
//   //     "metricID": [
//   //       191
//   //     ]
//   //   },
//   //   {
//   //     "dateID": [
//   //       "20221203"
//   //     ],
//   //     "metricID": [
//   //       95
//   //     ]
//   //   },
//   //   {
//   //     "dateID": [
//   //       "20221204"
//   //     ],
//   //     "metricID": [
//   //       79
//   //     ]
//   //   },
//   //   {
//   //     "dateID": [
//   //       "20221205"
//   //     ],
//   //     "metricID": [
//   //       149
//   //     ]
//   //   },
//   //   {
//   //     "dateID": [
//   //       "20221206"
//   //     ],
//   //     "metricID": [
//   //       226
//   //     ]
//   //   },
//   //   {
//   //     "dateID": [
//   //       "20221207"
//   //     ],
//   //     "metricID": [
//   //       132
//   //     ]
//   //   }
//   // ]

//   // console.log(Ml)

//   // let result = Ml.ArrayXY.sortX({ x: [2, 3, 1], y: [4, 6, 2] });
//   // // console.log(result)

//   // const ExponentialRegression = Ml.ExponentialRegression

//   // .sort(sortByDateAscending);

//   // Scale the range of the data
//   // history = [
//   //   {
//   //     date: "2019-10-23T18:30:00.000Z",
//   //     metric: 9972,
//   //   },
//   //   {
//   //     date: "2019-10-24T18:30:00.000Z",
//   //     metric: 9818,
//   //   },
//   //   {
//   //     date: "2019-10-25T18:30:00.000Z",
//   //     metric: 6655,
//   //   },
//   //   {
//   //     date: "2019-10-26T18:30:00.000Z",
//   //     metric: 5807,
//   //   },
//   //   {
//   //     date: "2019-10-27T18:30:00.000Z",
//   //     metric: 9989,
//   //   },
//   //   {
//   //     date: "2019-10-28T18:30:00.000Z",
//   //     metric: 11277,
//   //   },
//   //   {
//   //     date: "2019-10-29T18:30:00.000Z",
//   //     metric: 11645,
//   //   },
//   //   {
//   //     date: "2019-10-30T18:30:00.000Z",
//   //     metric: 9122,
//   //   },
//   //   {
//   //     date: "2019-10-31T18:30:00.000Z",
//   //     metric: 9658,
//   //   },
//   // ];

//   // console.log(forecast);
//   // let forecast = [
//   //   {
//   //     dateID: ["20221207"],
//   //     metricID: [6639],
//   //   },
//   //   {
//   //     dateID: ["20221206"],
//   //     metricID: [2836],
//   //   },
//   //   {
//   //     dateID: ["20221205"],
//   //     metricID: [2161],
//   //   },
//   //   {
//   //     dateID: ["20221204"],
//   //     metricID: [1446],
//   //   },
//   //   {
//   //     dateID: ["20221203"],
//   //     metricID: [1204],
//   //   },
//   //   {
//   //     dateID: ["20221202"],
//   //     metricID: [2023],
//   //   },
//   //   {
//   //     dateID: ["20221201"],
//   //     metricID: [2304],
//   //   },
//   // ];

//   const margin = { top: 20, right: 20, bottom: 30, left: 70 };
//   const width = 1000 - margin.left - margin.right;
//   const height = 500 - margin.top - margin.bottom;
//   // parse the date / time

//   // history = history.map((d) => {
//   //   return {
//   //     date: parseTime(d.date),
//   //     metric: d.metric,
//   //   };
//   // });

//   forecast = forecast.map((row) => {
//     return {
//       date: parseTime(row["dateID"][0]),
//       metric: row["metricID"][0],
//     };
//   });
//   // forecast.unshift(history[history.length - 1]);

//   // set the ranges
//   var x = d3.scaleTime().range([0, width]);
//   var y = d3.scaleLinear().range([height, 0]);

//   // define the line
//   const line = d3
//     .line()
//     .x((d) => x(d.date))
//     .y((d) => y(d.metric));

//   // Scale the range of the data
//   x.domain([d3.min(history, (d) => d.date), d3.max(forecast, (d) => d.date)]);

//   y.domain([
//     d3.min(history, (d) => d.metric) * 0.5,
//     d3.max(history, (d) => d.metric) * 1.5,
//   ]);

//   // append the svg obgect to the body of the page
//   // appends a 'group' element to 'svg'
//   // moves the 'group' element to the top left margin
//   d3.select("body").selectAll("svg").remove();

//   const svg = d3
//     .select("body")
//     .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//     .append("g")
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//   svg
//     .append("g")
//     .attr("transform", "translate(0," + height + ")")
//     .call(d3.axisBottom(x));

//   svg
//     .append("g")
//     .call(d3.axisLeft(y))
//     .append("text")
//     .attr("fill", "#000")
//     .attr("transform", "rotate(-90)")
//     .attr("y", 6)
//     .attr("dy", "0.71em")
//     .attr("text-anchor", "end");
//   // .text("Avocados Sold");

//   svg
//     .append("path")
//     .datum([])
//     // .datum(history)
//     .attr("fill", "none")
//     .attr("stroke", "steelblue")
//     .attr("stroke-width", 1.5)
//     .attr("d", line);

//   svg
//     .append("path")
//     .datum([])
//     // .datum(forecast)
//     .attr("fill", "none")
//     .attr("stroke", "tomato")
//     .attr("stroke-dasharray", "10,7")
//     .attr("stroke-width", 1.5)
//     .attr("d", line);
// };

const drawViz = async (dataIn) => {
  const parseTime = d3.timeParse("%Y%m%d");
  const tblList = dataIn.tables.DEFAULT;
  let history = tblList.map((row) => {
    return {
      date: parseTime(row["dateID"][0]),
      metric: row["metricID"][0],
    };
  });

  console.log("history", history);

  const input_1 = dataIn.style.input_1.value;
  const input_2 = dataIn.style.input_2.value;
  const input_3 = dataIn.style.input_3.value;
  const input_4 = dataIn.style.input_4.value;
  // console.log("input_1", input_1);
  // console.log("input_2", input_2);
  // console.log("input_3", input_3);
  // console.log("input_4", input_4);
  let forecast = [];

  const holtWinters = new HoltWinters(input_1, input_2, input_3, input_4);
  const historyNumbers = history.map((row) => row.metric);
  const predictedHistoryNumber = holtWinters.fit(historyNumbers);
  const predictedValues = holtWinters.predict(10);

  let lastDateValue = history[history.length - 1].date;

  forecast = predictedValues.map((value) => {
    lastDateValue = moment.utc(lastDateValue).add(1, "days").format("YYYYMMDD");
    return {
      dateID: [lastDateValue],
      metricID: [value],
    };
  });

  const margin = { top: 20, right: 20, bottom: 30, left: 70 };
  const width = 1000 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  forecast = forecast.map((row) => {
    return {
      date: parseTime(row["dateID"][0]),
      metric: row["metricID"][0],
    };
  });
  // set the ranges
  var x = d3.scaleTime().range([0, width]);
  var y = d3.scaleLinear().range([height, 0]);

  // define the line
  const line = d3
    .line()
    .x((d) => x(d.date))
    .y((d) => y(d.metric));

  // Scale the range of the data
  x.domain([d3.min(history, (d) => d.date), d3.max(forecast, (d) => d.date)]);

  y.domain([
    d3.min(history, (d) => d.metric) * 0.5,
    d3.max(history, (d) => d.metric) * 1.5,
  ]);

  // append the svg obgect to the body of the page
  // appends a 'group' element to 'svg'
  // moves the 'group' element to the top left margin
  d3.select("body").selectAll("svg").remove();

  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  svg
    .append("g")
    .call(d3.axisLeft(y))
    .append("text")
    .attr("fill", "#000")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", "0.71em")
    .attr("text-anchor", "end");
  // .text("Avocados Sold");

  svg
    .append("path")
    .datum(history)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("d", line);
  console.log("forecast", forecast);

  svg
    .append("path")
    .datum(forecast)
    .attr("fill", "none")
    .attr("stroke", "tomato")
    .attr("stroke-dasharray", "10,7")
    .attr("stroke-width", 1.5)
    .attr("d", line);
};

// renders locally
if (false) {
  drawViz(local.message);
} else {
  dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });
}
