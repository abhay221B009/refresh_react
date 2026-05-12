//assignment , we will learn here to make a in memory  hospital.
const express = require("express");
const app = express();
const port = 3002;

//middleware to parse json body
app.use(express.json());

var users = [
  {
    name: "Abhay",
    kidneys: [
      {
        healthy: true,
      },
    ],
  },
];

//get request to get all users
app.get("/", (req, res) => {
  const abhayKidneys = users[0].kidneys;
  console.log(abhayKidneys);
  const numberOfKidneys = abhayKidneys.length;
  let numberOfHealthyKidneys = 0;

  for (let i = 0; i < abhayKidneys.length; i++) {
    if (abhayKidneys[i].healthy) {
      numberOfHealthyKidneys++;
    }
  }

  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

//post request to add a new kidney to abhay
app.post("/", (req, res) => {
  const isHealthy = req.body.healthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "kidney added successfully",
  });
});

//put request to update the health status of a kidney
app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({
    msg: "kidney health status updated successfully",
  });
});

//delete request to remove a kidney from abhay
app.delete("/", (req, res) => {
  const newKidneys = [];
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      newKidneys.push({
        healthy: true,
      });
    }
  }
  users[0].kidneys = newKidneys;
  res.json({
    msg: "unhealthy kidneys removed successfully",
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

//there are mainly 4 types of request methods
//1.GET
//2.POST
//3.PUT
//4.DELETE

//status codes
//1xx - informational
//2xx - success
//3xx - redirection
//4xx - client error
//5xx - server error

//specific status codes
//200 - OK
//201 - Created
//400 - Bad Request
//401 - Unauthorized
//403 - Forbidden
//404 - Not Found
//500 - Internal Server Error
