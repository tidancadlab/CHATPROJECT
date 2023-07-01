// API

const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
require("dotenv").config();
const sql = require("mssql/msnodesqlv8");
const config = require("./dbConfig");
const { getUser, addUser } = require("./dbOparations");

//<--------- Internet Connection Checking Start ------------->

// require("dns").lookup("www.google.com", function (err) {
//   if (err) {
//     checkInternet(false);
//   } else {
//     checkInternet(true);
//   }
// });

// function checkInternet(isConnected) {
//   if (isConnected) {
//   } else {
//     console.log("No internet.......");
//   }
// }

//<--------- Internet Connection Checking End ------------->

app.use(
  cors({
    origin: "*",
  }),
  express.json()
);

app.use(async (req, res, next) => {
  try {
    const data = req.headers.authorization;
    if (data == "nvdjvbfhvbknx jvbdfuvbguyrgyubrguybvdfhvfkvefiv") {
      next();
    } else {
      res.status(401).json({
        message: "Unauthorized!",
        url: "http://localhost:8080" + req.url,
      });
    }
  } catch (error) {
    res.status(401).json({ message: "Unauthorized!", error: error });
  }
});

app.get("/", async (req, res) => {
  const data = getUser();
  let abc;
  await data.then((r) => (abc = r));
  res.setHeader('tcl-token', 'token=' + Date())
  res.json(abc);
});

app.post("/addUser", async (req, res) => {
  const user = { ...req.body };
  const data = addUser(user);
  data.then((r) =>
    res.json({ result: r, message: "Registered", originalError: { code: 200 } })
  );
});

app.listen(8080, () => {
  console.log(`server Running on ${8080}`);
});
