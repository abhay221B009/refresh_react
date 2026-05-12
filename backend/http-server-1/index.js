// const express = require("express");
// const app = express();
// const port = 3000;

// app.use(express.json()); //middleware to parse json body
// // app.get("/", (req, res) => {
// //   res.send("hello world");
// // });

// //we can also send variables in response
// // app.get("/", (req, res) => {
// //   let a = 123456;

// //   res.send(`${a} , hello world`);
// // });

// //we can also send json response to client
// // app.get("/route-handler", (req, res) => {
// //   res.json({
// //     name: "Abhay",
// //     age: 22,
// //   });
// // });

// //we can also send html tags in response
// app.get("/route-handler", (req, res) => {
//   res.send("<b>Hi there</b>");
// });

// //post request
// app.post("/", (req, res) => {
//   console.log(req.body);

//   console.log(req.headers["authorization"]);

//   res.send({
//     msg: "2+2=4",
//     body: req.body,
//   });
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
