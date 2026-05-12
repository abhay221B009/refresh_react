const express = require("express");
const app = express();
const port = 3002;

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
